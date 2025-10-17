"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ThanksPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-primary-light to-accent-light flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-white rounded-3xl shadow-2xl p-8 text-center relative overflow-hidden"
        >
          {/* 満面の笑みマスコット */}
          <motion.img
            src="/images/mascot-happy.webp"
            alt="登録完了おめでとう！"
            className="w-32 h-32 mx-auto mb-6"
            width={128}
            height={128}
            initial={{ scale: 0, rotate: -360 }}
            animate={{ 
              scale: 1, 
              rotate: 0,
              y: [0, -10, 0]
            }}
            transition={{
              scale: { duration: 0.8, ease: "backOut" },
              rotate: { duration: 0.8, ease: "easeOut" },
              y: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          />

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl font-bold text-primary mb-4"
          >
            登録完了！
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-4 mb-8"
          >
            <p className="text-gray-700 text-lg font-medium">
              お申し込みありがとうございます！
            </p>
            <p className="text-gray-600">
              担当アドバイザーより<br />
              <span className="font-bold text-primary">24時間以内</span>にご連絡いたします
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-gradient-to-r from-primary-light to-accent-light p-6 rounded-xl mb-6"
          >
            <h2 className="font-bold text-gray-900 mb-3">次のステップ</h2>
            <ol className="text-left text-sm space-y-2">
              <li className="flex items-start">
                <span className="text-primary font-bold mr-2">1.</span>
                <span>アドバイザーからの連絡をお待ちください</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-2">2.</span>
                <span>あなたの希望を詳しくヒアリング</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-2">3.</span>
                <span>最適な求人をご紹介</span>
              </li>
            </ol>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <Link
              href="/"
              className="inline-block text-sm text-gray-500 hover:text-primary transition-colors"
            >
              トップページへ戻る
            </Link>
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center text-xs text-gray-600 mt-6"
        >
          ※迷惑メール設定をご確認ください<br />
          ※電話番号の入力に誤りがないかご確認ください
        </motion.p>
      </div>
    </main>
  );
}
