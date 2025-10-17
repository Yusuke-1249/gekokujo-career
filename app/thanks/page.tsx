"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ThanksPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-primary-light to-accent-light flex items-center justify-center px-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-md w-full"
      >
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 space-y-6">
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white text-center py-3 rounded-lg font-bold shadow-lg">
            転職相談お申し込み完了
          </div>

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

          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold text-gray-900">
              ご登録ありがとうございます！
            </h1>
            <p className="text-lg text-gray-700">
              今後の流れについて、ご説明いたします。
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-5 space-y-3">
            <h2 className="font-bold text-lg text-gray-900">転職相談について</h2>
            <div className="space-y-2 text-left">
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

          <div className="text-center text-sm text-gray-500">
            <Link href="/" className="text-primary font-semibold hover:underline">
              トップページに戻る
            </Link>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
