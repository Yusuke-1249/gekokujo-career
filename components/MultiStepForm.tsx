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

  const progress = ((step - 1) / (TOTAL_STEPS - 1)) * 100;

  // マスコットの表情を決定
  const getMascotImage = () => {
    if (step >= 7) return "/images/mascot-normal.png"; // step 7以降は笑顔
    return "/images/mascot.png"; // デフォルトは炎の目
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
      if (!formData.email) newErrors.email = "メールアドレスを入力してください";
      if (!formData.phone) newErrors.phone = "電話番号を入力してください";
      if (formData.phone && formData.phone.length < 10) {
        newErrors.phone = "電話番号は10桁以上で入力してください";
      }
      if (!formData.agreed) newErrors.agreed = "同意が必要です";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateStep()) return;
    
    setIsSubmitting(true);
    
    // API送信処理（実装予定）
    console.log("送信データ:", formData);
    
    // 仮の送信処理
    setTimeout(() => {
      setIsSubmitting(false);
      // /thanksページへ遷移
      window.location.href = "/thanks";
    }, 1000);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900">希望の勤務地を選択してください</h2>
            <div className="grid grid-cols-1 gap-3">
              {["大阪", "愛知", "東京", "千葉", "神奈川"].map((location) => (
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
                  src="/images/mascot-cry.png"
                  alt="泣き顔マスコット"
                  className="w-16 h-16 flex-shrink-0"
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
                <label className="block text-sm font-medium text-gray-700 mb-1">せい</label>
                <input
                  type="text"
                  value={formData.lastNameKana}
                  onChange={(e) => handleInputChange("lastNameKana", e.target.value)}
                  className={`w-full p-3 border-2 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 ${
                    errors.lastNameKana ? "border-red-300" : "border-gray-200"
                  }`}
                  placeholder="やまだ"
                />
                {errors.lastNameKana && <p className="text-red-500 text-xs mt-1">{errors.lastNameKana}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">めい</label>
                <input
                  type="text"
                  value={formData.firstNameKana}
                  onChange={(e) => handleInputChange("firstNameKana", e.target.value)}
                  className={`w-full p-3 border-2 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 ${
                    errors.firstNameKana ? "border-red-300" : "border-gray-200"
                  }`}
                  placeholder="たろう"
                />
                {errors.firstNameKana && <p className="text-red-500 text-xs mt-1">{errors.firstNameKana}</p>}
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
              onClick={handleNext}
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
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className={`w-full p-3 border-2 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 ${
                  errors.email ? "border-red-300" : "border-gray-200"
                }`}
                placeholder="example@email.com"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">電話番号（ハイフンなし）</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value.replace(/[^0-9]/g, ""))}
                className={`w-full p-3 border-2 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 ${
                  errors.phone ? "border-red-300" : "border-gray-200"
                }`}
                placeholder="09012345678"
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
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
                <a href="/terms" className="text-primary font-medium hover:underline">利用規約</a>および
                <a href="/privacy" className="text-primary font-medium hover:underline">プライバシーポリシー</a>に同意します
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
        
      default:
        return null;
    }
  };

  return (
    <section id="form-section" className="bg-gray-50 pb-8">
      <div className="max-w-md mx-auto px-4">
        {/* 簡単30秒バッジとマスコット */}
        <div className="text-center mb-4 -mt-6 relative z-10">
          <div className="relative inline-block">
            <div className="inline-block bg-gray-900 text-white px-6 py-3 rounded-full shadow-lg">
              <span className="text-lg font-bold">簡単</span>
              <span className="text-2xl font-black mx-1">30秒</span>
              <span className="text-lg font-bold">！無料相談</span>
            </div>
            {/* マスコットキャラ */}
            <motion.img 
              src={getMascotImage()}
              alt="応援マスコット"
              className="absolute -right-16 top-1/2 -translate-y-1/2 w-20 h-20"
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

        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
          {/* 進捗バー */}
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
          {/* プログレスバーのマスコット */}
          <motion.img
            src={getMascotImage()}
            alt="応援マスコット"
            className="absolute -top-10 w-12 h-12 pointer-events-none z-10"
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
        </div>
      </div>

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