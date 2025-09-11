"use client";

import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "転職サービスの料金はかかりますか？",
      answer: "完全無料でご利用いただけます。転職成功まで一切費用はかかりません。企業からの紹介料で運営しているため、求職者の方からは料金をいただいておりません。"
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
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
          よくある質問
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
                <span className={`text-sun transition-transform ${openIndex === index ? "rotate-180" : ""}`}>
                  ▽
                </span>
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4">
                  <p className="text-sm text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}