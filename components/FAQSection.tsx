"use client";

import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // 最初の項目を開いた状態に

  const faqs = [
    {
      question: "転職サービスの料金はかかりますか？",
      answer: "完全無料でご利用いただけます。転職成功まで一切費用はかかりません。採用企業との提携により運営しているため、求職者の方は完全無料でご利用いただけます。"
    },
    {
      question: "学歴は関係ありますか？",
      answer: "学歴不問の求人を多数ご用意しています。中卒・高卒の方も多数転職に成功されています。大切なのはあなたのやる気と可能性です。"
    },
    {
      question: "ブラック企業ではないか心配です",
      answer: "厳選した優良企業のみをご紹介しています。労働条件を事前にしっかり確認し、安心して働ける環境を提供します。万が一の場合も入社後のフォローで対応いたします。"
    },
    {
      question: "フリーター歴が長くても大丈夫ですか？",
      answer: "フリーターから正社員への転職実績が多数あります。あなたの経験を活かせる企業をご紹介し、面接でのアピール方法もアドバイスいたします。"
    },
    {
      question: "相談だけでも大丈夫ですか？",
      answer: "もちろん大丈夫です。転職を迷っている段階でも、まずは気軽にご相談ください。無理な転職を勧めることはありません。あなたのキャリアについて一緒に考えさせていただきます。"
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
          よくある質問
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full p-5 text-left flex items-start justify-between hover:bg-gray-50 transition-all duration-200"
                aria-expanded={openIndex === index}
              >
                <div className="flex items-start flex-1 pr-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary-light rounded-full flex items-center justify-center text-primary font-bold text-sm mr-3">
                    Q
                  </span>
                  <span className="font-medium text-gray-900 text-sm leading-relaxed">{faq.question}</span>
                </div>
                <svg 
                  className={`flex-shrink-0 w-5 h-5 text-primary transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                className={`transition-all duration-200 ${openIndex === index ? "max-h-96" : "max-h-0"} overflow-hidden`}
              >
                <div className="px-5 pb-5">
                  <div className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 font-bold text-sm mr-3">
                      A
                    </span>
                    <p className="text-sm text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}