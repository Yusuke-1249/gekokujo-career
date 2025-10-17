"use client";

export default function HeroSection() {
  return (
    <section className="bg-white">
      <div className="max-w-md mx-auto">
        {/* ヒーロー画像 */}
        <img
          src="/images/hero-main.png"
          alt="今日から下剋上転職 - 20代特化、初めての転職歓迎"
          className="w-full h-auto"
          onError={(e) => {
            // 画像が読み込めない場合はプレースホルダーを表示
            e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500"%3E%3Crect fill="%23FF4500" width="500" height="500"/%3E%3Ctext x="50%25" y="50%25" font-size="24" fill="white" text-anchor="middle" dy=".3em"%3E画像を準備中%3C/text%3E%3C/svg%3E';
          }}
        />
      </div>
    </section>
  );
}
