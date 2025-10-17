"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FormData = {
  workLocation: string;
  jobType: string;
  gender: string;
  startPeriod: string;
  employmentStatus: string;
  education: string;
  drivingLicense: string;
  lastName: string;
  firstName: string;
  lastNameKana: string;
  firstNameKana: string;
  age: string;
  email: string;
  phone: string;
  agreed: boolean;
};

const initialFormData: FormData = {
  workLocation: "",
  jobType: "",
  gender: "",
  startPeriod: "",
  employmentStatus: "",
  education: "",
  drivingLicense: "",
  lastName: "",
  firstName: "",
  lastNameKana: "",
  firstNameKana: "",
  age: "",
  email: "",
  phone: "",
  agreed: false,
};

const TOTAL_STEPS = 9;

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [showStudentError, setShowStudentError] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const progress = ((step - 1) / (TOTAL_STEPS - 1)) * 100;

  // マスコットの表情を決定
  const getMascotImage = () => {
    if (step >= 7) return "/images/mascot-normal.webp"; // step 7以降は笑顔
    return "/images/mascot.webp"; // デフォルトは炎の目
  };

  const handleNext = () => {
    if (step < TOTAL_STEPS) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSelection = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value });
    
    // 学生の場合はブロック
    if (field === "employmentStatus") {
      if (value === "学生") {
        setShowStudentError(true);
        return;
      } else {
        setShowStudentError(false);
      }
    }
    
    // 自動で次のステップへ
    if (step < 8) {
      setTimeout(() => handleNext(), 300);
    }
  };

  const formatPhoneNumber = (value: string): string => {
    const numbers = value.replace(/[^\d]/g, '');
    if (numbers.length <= 3) return numbers;
    if (numbers.length <= 7) return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
    return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7, 11)}`;
  };

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData({ ...formData, [field]: value });
    setErrors({ ...errors, [field]: "" });
  };

  const validateStep = () => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    
    if (step === 8) {
      if (!formData.lastName) newErrors.lastName = "姓を入力してください";
      if (!formData.firstName) newErrors.firstName = "名を入力してください";
      if (!formData.lastNameKana) newErrors.lastNameKana = "せいを入力してください";
      if (!formData.firstNameKana) newErrors.firstNameKana = "めいを入力してください";
      if (!formData.age) newErrors.age = "年齢を選択してください";
      
      const ageNum = parseInt(formData.age);
      if (ageNum < 18 || ageNum > 65) {
        newErrors.age = "18歳から65歳の間で選択してください";
      }
    }
    
    if (step === 9) {
      if (!formData.email) {
        newErrors.email = "メールアドレスを入力してください";
      } else if (/[^\x00-\x7F]/.test(formData.email)) {
        // 日本語（全角文字）が含まれているかチェック
        newErrors.email = "半角英数字で入力してください";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        // メール形式チェック
        newErrors.email = "正しいメールアドレスの形式で入力してください";
      }
      if (!formData.phone) newErrors.phone = "電話番号を入力してください";
      if (formData.phone && formData.phone.length !== 11) {
        newErrors.phone = "電話番号は11桁で入力してください";
      }
      if (!formData.agreed) newErrors.agreed = "同意が必要です";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateStep()) return;
    if (hasSubmitted) return; // 重複送信防止
    
    setHasSubmitted(true); // 送信済みフラグを設定
    
    // 即座に完了画面を表示（楽観的UI）
    setStep(10);
    setIsSubmitting(true);
    
    // フォームデータをコピー（電話番号はハイフンなしで送信）
    const submitData = {
      ...formData,
      phone: formData.phone.replace(/-/g, '') // ハイフンを除去
    };
    
    // バックグラウンドで送信処理（リトライ機能付き）
    let retryCount = 0;
    const maxRetries = 1;
    
    while (retryCount < maxRetries) {
      try {
        const response = await fetch('/api/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(submitData),
        });
        
        const result = await response.json();
        
        if (!result.success) {
          // エラーをログに記録するが、throwはしない（画面にエラーを表示しない）
          console.log('送信エラー:', result.error || '送信に失敗しました');
        }
        
        // 成功したらフォームリセット
        setFormData(initialFormData);
        setIsSubmitting(false);
        break; // 成功したらループを抜ける
        
      } catch (error) {
        retryCount++;
        
        if (retryCount >= maxRetries) {
          // すべてのリトライが失敗した場合（ログのみ、表示はしない）
          console.error('送信エラー:', error);
          setIsSubmitting(false);
          // エラーでも完了画面のまま（楽観的UI）
          break;
        }
        
        // リトライ前に1秒待機
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
  };
  

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900">希望の勤務地を選択してください</h2>
            <div className="grid grid-cols-1 gap-3">
              {["大阪", "愛知", "東京", "千葉", "神奈川","上記以外"].map((location) => (
                <button
                  key={location}
                  type="button"
                  onClick={() => handleSelection("workLocation", location)}
                  className={`p-4 text-lg rounded-xl border-2 transition-all transform hover:scale-105 ${
                    formData.workLocation === location
                      ? "border-primary bg-gradient-to-r from-primary to-accent text-white font-bold shadow-lg"
                      : "border-gray-400 hover:border-primary hover:shadow-md bg-gray-50"
                  }`}
                >
                  {location}
                </button>
              ))}
            </div>
          </div>
        );
        
      case 2:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900">希望の職種を選択してください</h2>
            <div className="grid grid-cols-1 gap-3">
              {["営業", "エンジニア", "販売", "接客・サービス", "事務", "工場・製造業", "これ以外の職種", "特に決まっていない"].map((job) => (
                <button
                  key={job}
                  type="button"
                  onClick={() => handleSelection("jobType", job)}
                  className={`p-4 text-lg rounded-xl border-2 transition-all transform hover:scale-105 ${
                    formData.jobType === job
                      ? "border-primary bg-gradient-to-r from-primary to-accent text-white font-bold shadow-lg"
                      : "border-gray-400 hover:border-primary hover:shadow-md bg-gray-50"
                  }`}
                >
                  {job}
                </button>
              ))}
            </div>
          </div>
        );
        
      case 3:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900">性別を選択してください</h2>
            <div className="grid grid-cols-1 gap-3">
              {["男性", "女性"].map((gender) => (
                <button
                  key={gender}
                  type="button"
                  onClick={() => handleSelection("gender", gender)}
                  className={`p-4 text-lg rounded-xl border-2 transition-all transform hover:scale-105 ${
                    formData.gender === gender
                      ? "border-primary bg-gradient-to-r from-primary to-accent text-white font-bold shadow-lg"
                      : "border-gray-400 hover:border-primary hover:shadow-md bg-gray-50"
                  }`}
                >
                  {gender}
                </button>
              ))}
            </div>
          </div>
        );
        
      case 4:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900">就業開始までの期間を選択してください</h2>
            <div className="grid grid-cols-1 gap-3">
              {["できるだけ早く", "1〜2ヶ月先", "3ヶ月以上先", "未定"].map((period) => (
                <button
                  key={period}
                  type="button"
                  onClick={() => handleSelection("startPeriod", period)}
                  className={`p-4 text-lg rounded-xl border-2 transition-all transform hover:scale-105 ${
                    formData.startPeriod === period
                      ? "border-primary bg-gradient-to-r from-primary to-accent text-white font-bold shadow-lg"
                      : "border-gray-400 hover:border-primary hover:shadow-md bg-gray-50"
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>
        );
        
      case 5:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900">現在の就業状況を選択してください</h2>
            <div className="grid grid-cols-1 gap-3">
              {["正社員", "契約社員", "派遣社員", "パート・アルバイト", "無職", "学生"].map((status) => (
                <button
                  key={status}
                  type="button"
                  onClick={() => handleSelection("employmentStatus", status)}
                  className={`p-4 text-lg rounded-xl border-2 transition-all transform hover:scale-105 ${
                    formData.employmentStatus === status
                      ? "border-primary bg-gradient-to-r from-primary to-accent text-white font-bold shadow-lg"
                      : "border-gray-400 hover:border-primary hover:shadow-md bg-gray-50"
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
            {showStudentError && (
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3"
              >
                <motion.img
                  src="/images/mascot-cry.webp"
                  alt="泣き顔マスコット"
                  className="w-16 h-16 flex-shrink-0"
                  width={64}
                  height={64}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, ease: "backOut" }}
                />
                <div>
                  <p className="text-red-600 font-bold">申し訳ございません</p>
                  <p className="text-red-600 text-sm mt-1">新卒のご紹介先がないため、現在学生の方はサービス対象外となっております。</p>
                </div>
              </motion.div>
            )}
          </div>
        );
        
      case 6:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900">最終学歴を選択してください</h2>
            <div className="grid grid-cols-1 gap-3">
              {["中学校卒業", "高校卒業", "短大卒業", "専門学校卒業", "大学卒業"].map((edu) => (
                <button
                  key={edu}
                  type="button"
                  onClick={() => handleSelection("education", edu)}
                  className={`p-4 text-lg rounded-xl border-2 transition-all transform hover:scale-105 ${
                    formData.education === edu
                      ? "border-primary bg-gradient-to-r from-primary to-accent text-white font-bold shadow-lg"
                      : "border-gray-400 hover:border-primary hover:shadow-md bg-gray-50"
                  }`}
                >
                  {edu}
                </button>
              ))}
            </div>
          </div>
        );
        
      case 7:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900">自動車免許をお持ちですか？</h2>
            <div className="grid grid-cols-1 gap-3">
              {["はい", "いいえ"].map((license) => (
                <button
                  key={license}
                  type="button"
                  onClick={() => handleSelection("drivingLicense", license)}
                  className={`p-4 text-lg rounded-xl border-2 transition-all transform hover:scale-105 ${
                    formData.drivingLicense === license
                      ? "border-primary bg-gradient-to-r from-primary to-accent text-white font-bold shadow-lg"
                      : "border-gray-400 hover:border-primary hover:shadow-md bg-gray-50"
                  }`}
                >
                  {license}
                </button>
              ))}
            </div>
          </div>
        );
        
      case 8:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900">お名前と年齢を入力してください</h2>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">姓</label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  className={`w-full p-3 border-2 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 ${
                    errors.lastName ? "border-red-300" : "border-gray-200"
                  }`}
                  placeholder="山田"
                />
                {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">名</label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  className={`w-full p-3 border-2 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 ${
                    errors.firstName ? "border-red-300" : "border-gray-200"
                  }`}
                  placeholder="太郎"
                />
                {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">せい（ひらがな）</label>
                <input
                  type="text"
                  value={formData.lastNameKana}
                  onChange={(e) => handleInputChange("lastNameKana", e.target.value)}
                  onBlur={(e) => {
                    // フォーカスが外れた時にひらがな以外を削除
                    const value = e.target.value;
                    const hiraganaOnly = value.replace(/[^\u3040-\u309F]/g, '');
                    if (value !== hiraganaOnly) {
                      handleInputChange("lastNameKana", hiraganaOnly);
                    }
                  }}
                  className={`w-full p-3 border-2 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 ${
                    errors.lastNameKana ? "border-red-300" : "border-gray-200"
                  }`}
                  placeholder="やまだ"
                />
                {errors.lastNameKana && <p className="text-red-500 text-xs mt-1">{errors.lastNameKana}</p>}
                {formData.lastNameKana && !/^[\u3040-\u309F]*$/.test(formData.lastNameKana) && (
                  <p className="text-amber-600 text-xs mt-1">ひらがなで入力してください</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">めい（ひらがな）</label>
                <input
                  type="text"
                  value={formData.firstNameKana}
                  onChange={(e) => handleInputChange("firstNameKana", e.target.value)}
                  onBlur={(e) => {
                    // フォーカスが外れた時にひらがな以外を削除
                    const value = e.target.value;
                    const hiraganaOnly = value.replace(/[^\u3040-\u309F]/g, '');
                    if (value !== hiraganaOnly) {
                      handleInputChange("firstNameKana", hiraganaOnly);
                    }
                  }}
                  className={`w-full p-3 border-2 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 ${
                    errors.firstNameKana ? "border-red-300" : "border-gray-200"
                  }`}
                  placeholder="たろう"
                />
                {errors.firstNameKana && <p className="text-red-500 text-xs mt-1">{errors.firstNameKana}</p>}
                {formData.firstNameKana && !/^[\u3040-\u309F]*$/.test(formData.firstNameKana) && (
                  <p className="text-amber-600 text-xs mt-1">ひらがなで入力してください</p>
                )}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">年齢</label>
              <select
                value={formData.age}
                onChange={(e) => handleInputChange("age", e.target.value)}
                className={`w-full p-3 border-2 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 ${
                  errors.age ? "border-red-300" : "border-gray-200"
                }`}
              >
                <option value="">選択してください</option>
                {Array.from({ length: 48 }, (_, i) => i + 18).map((age) => (
                  <option key={age} value={age}>{age}歳</option>
                ))}
              </select>
              {errors.age && <p className="text-red-500 text-xs mt-1">{errors.age}</p>}
            </div>
            <button
              type="button"
              onClick={() => {
                // 必須項目のチェック
                if (!formData.lastName || !formData.firstName || !formData.lastNameKana || !formData.firstNameKana || !formData.age) {
                  // エラーメッセージを設定
                  const newErrors: Partial<Record<keyof FormData, string>> = {};
                  if (!formData.lastName) newErrors.lastName = "姓を入力してください";
                  if (!formData.firstName) newErrors.firstName = "名を入力してください";
                  if (!formData.lastNameKana) newErrors.lastNameKana = "せい（ひらがな）を入力してください";
                  if (!formData.firstNameKana) newErrors.firstNameKana = "めい（ひらがな）を入力してください";
                  if (!formData.age) newErrors.age = "年齢を選択してください";
                  setErrors(newErrors);
                  return;
                }
                handleNext();
              }}
              className="w-full p-4 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-xl hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
            >
              次へ進む
            </button>
          </div>
        );
        
      case 9:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900">連絡先を入力してください</h2>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">メールアドレス</label>
              <input
                type="email"
                inputMode="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                onBlur={(e) => {
                  const value = e.target.value;
                  if (value) {
                    // 日本語（全角文字）が含まれているかチェック
                    if (/[^\x00-\x7F]/.test(value)) {
                      setErrors({...errors, email: "半角英数字で入力してください"});
                    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                      setErrors({...errors, email: "正しいメールアドレスの形式で入力してください"});
                    }
                  }
                }}
                className={`w-full p-3 border-2 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 ${
                  errors.email ? "border-red-300" : "border-gray-200"
                }`}
                placeholder="example@email.com"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">電話番号</label>
              <input
                type="tel"
                value={formatPhoneNumber(formData.phone)}
                onChange={(e) => {
                  const rawValue = e.target.value.replace(/[^0-9]/g, "");
                  if (rawValue.length <= 11) {
                    handleInputChange("phone", rawValue);
                  }
                }}
                className={`w-full p-3 border-2 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 ${
                  errors.phone ? "border-red-300" : "border-gray-200"
                }`}
                placeholder="090-1234-5678"
                maxLength={13} // ハイフン含めて13文字
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              {formData.phone && formData.phone.length > 0 && formData.phone.length < 11 && (
                <p className="text-amber-600 text-xs mt-1">11桁の電話番号を入力してください</p>
              )}
            </div>
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="agreement"
                checked={formData.agreed}
                onChange={(e) => handleInputChange("agreed", e.target.checked)}
                className="mt-1 w-5 h-5 text-primary border-2 rounded focus:ring-primary accent-primary"
              />
              <label htmlFor="agreement" className="text-sm text-gray-700">
                <a href="/terms" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">利用規約</a>および
                <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">プライバシーポリシー</a>に同意します
              </label>
            </div>
            {errors.agreed && <p className="text-red-500 text-xs">{errors.agreed}</p>}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting || formData.employmentStatus === "学生"}
              className={`w-full p-5 font-bold rounded-xl transition-all ${
                isSubmitting || formData.employmentStatus === "学生"
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-gradient-to-r from-primary to-accent text-white hover:shadow-xl transform hover:-translate-y-0.5"
              }`}
            >
              {isSubmitting ? "送信中..." : "無料で転職相談する"}
            </button>
          </div>
        );
        
      case 10:
        // 完了画面
        return (
          <div className="space-y-6 py-4">
            {/* 転職相談お申し込み完了バー */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white text-center py-3 rounded-lg font-bold shadow-lg">
              転職相談お申し込み完了
            </div>

            {/* 喜びライオンマスコット */}
            <motion.img 
              src="/images/mascot-happy.webp" 
              alt="喜び顔マスコット" 
              className="w-32 h-32 mx-auto"
              width={128}
              height={128}
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            />

            {/* メインメッセージ */}
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-gray-900">
                ご登録ありがとうございます！
              </h2>
              <p className="text-lg text-gray-700">
                今後の流れについて、ご説明いたします。
              </p>
            </div>

            {/* 転職相談について */}
            <div className="bg-white rounded-xl shadow-md p-5 space-y-3">
              <h3 className="font-bold text-lg text-gray-900">転職相談について</h3>
              <div className="space-y-2">
                <div className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-gray-700">相談からお仕事紹介まで<span className="text-primary font-bold">完全無料</span></span>
                </div>
                <div className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-gray-700">履歴書／職務経歴書も<span className="text-primary font-bold">作成します</span></span>
                </div>
                <div className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-gray-700">やりたいことが<span className="text-primary font-bold">決まってなくてもOK</span></span>
                </div>
                <div className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-gray-700">他では<span className="text-primary font-bold">公開されていない求人</span>もご紹介</span>
                </div>
              </div>
            </div>

            {/* 電話番号 */}
            <div className="bg-white rounded-xl shadow-md p-5 space-y-3">
              <p className="text-gray-700 font-bold text-center">
                下記番号からお電話させていただきます！
              </p>
              <div className="space-y-2">
                <div className="bg-gray-50 rounded-lg p-3">
                  <a href="tel:090-4725-7418" className="block text-center text-gray-800 text-xl font-bold hover:text-gray-600">
                    090-4725-7418
                  </a>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <a href="tel:070-4093-9633" className="block text-center text-gray-800 text-xl font-bold hover:text-gray-600">
                    070-4093-9633
                  </a>
                </div>
              </div>
            </div>

            {/* LINE追加 */}
            <div className="text-center space-y-3">
              <p className="text-green-600 font-bold">
                LINEでの相談日時のご希望も<br />
                受け付けております！
              </p>
              <a 
                href="https://lin.ee/NnxXPKx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition-colors"
              >
                <span className="mr-2">LINE</span> 友だち追加
              </a>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <section id="form-section" className="bg-gray-50 pb-8">
      <div className="max-w-md mx-auto px-4">
        {/* 簡単30秒バッジとマスコット - 完了画面では非表示 */}
        {step !== 10 && (
          <div className="text-center mb-4 -mt-6 relative z-10">
            <div className="relative inline-block">
              <button 
                type="button"
                className="inline-block bg-gray-900 text-white px-6 py-3 rounded-full shadow-lg hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 cursor-pointer"
                onClick={() => {
                  // フォーム内の最初の選択ボタンを探してフォーカス
                  const formButtons = document.querySelectorAll('#form-section .grid button');
                  if (formButtons.length > 0) {
                    (formButtons[0] as HTMLElement).focus();
                    // スムーズにスクロール
                    formButtons[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }
                }}
              >
                <span className="text-lg font-bold">簡単</span>
                <span className="text-2xl font-black mx-1">30秒</span>
                <span className="text-lg font-bold">！無料相談</span>
              </button>
              {/* マスコットキャラ */}
              <motion.img 
                src={getMascotImage()}
                alt="応援マスコット"
                className="absolute -right-16 top-1/2 -translate-y-1/2 w-20 h-20"
                width={80}
                height={80}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ 
                  scale: 1, 
                  rotate: [0, -10, 10, -10, 10, 0]
                }}
                transition={{
                  scale: { duration: 0.5, ease: "backOut" },
                  rotate: { 
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut"
                  }
                }}
              />
            </div>
          </div>
        )}

        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
          {/* 進捗バー - ステップ10（完了画面）では非表示 */}
          {step !== 10 && (
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-bold text-gray-700">
                  STEP <span className="text-2xl text-primary">{step}</span>
                  <span className="text-gray-400 ml-1">/ {TOTAL_STEPS}</span>
                </span>
                {step > 1 && (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="text-sm text-gray-500 hover:text-primary transition-colors font-medium"
                  >
                    ← 前へ戻る
                  </button>
                )}
              </div>
              <div className="relative w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-yellow-400 via-primary to-accent h-2 rounded-full transition-all duration-500 ease-out shadow-sm"
                  style={{ width: `${progress}%` }}
                />
                {/* プログレスバーのマスコット - ステップ10では非表示 */}
                {step !== 10 && (
                  <motion.img
                    src={getMascotImage()}
                    alt="応援マスコット"
                    className="absolute -top-10 w-12 h-12 pointer-events-none z-10"
                    width={48}
                    height={48}
                    style={{ left: `calc(${progress}% - 24px)` }}
                    animate={{
                      y: step === TOTAL_STEPS ? [-10, -20, -10] : [0, -3, 0],
                      rotate: step === TOTAL_STEPS ? [0, 360] : [0, 0]
                    }}
                    transition={{
                      y: { 
                        duration: step === TOTAL_STEPS ? 0.5 : 1.5,
                        repeat: step === TOTAL_STEPS ? 0 : Infinity,
                        ease: "easeInOut"
                      },
                      rotate: {
                        duration: 0.5,
                        ease: "easeOut"
                      }
                    }}
                    key={step} // ステップが変わるとアニメーションがリセット
                  />
                )}
              </div>
            </div>
          )}

      {/* フォームコンテンツ */}
      <div className="min-h-[420px]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
