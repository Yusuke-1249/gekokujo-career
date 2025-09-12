export default function AchievementSection() {
  const achievements = [
    {
      title: "平均年収UP額は",
      highlight: "80万円",
      description: "",
      note: "※1",
      icon: "graph"
    },
    {
      highlight: "95%",
      title: "",
      description: "の人がサービスに満足しています。",
      note: "※2",
      icon: "check"
    },
    {
      title: "内定率",
      highlight: "85%",
      description: "（6ヶ月以内）",
      note: "※3",
      icon: "handshake"
    }
  ];

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <p className="text-gray-600 text-sm mb-2">下剋上キャリアを利用した多くの方が</p>
          <h2 className="text-2xl font-bold text-gray-900">
            「相談してよかった！」
          </h2>
          <p className="text-gray-600 text-sm mt-2">と感じています。</p>
        </div>
        
        <div className="space-y-6">
          {achievements.map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mr-4">
                  {item.icon === "graph" && (
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  )}
                  {item.icon === "check" && (
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                  {item.icon === "handshake" && (
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-lg font-bold text-gray-900">
                    {item.title}
                    <span className="text-primary text-2xl">{item.highlight}</span>
                    {item.description}
                    <sup className="text-xs text-gray-500 ml-1">{item.note}</sup>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-white rounded-lg text-xs text-gray-500">
          <p>※1｜2025年1月1日〜7月31日に就業決定された方の平均値</p>
          <p>※2｜面談後アンケート結果より（2025年1月1日〜7月31日）</p>
          <p>※3｜6ヶ月以内の内定獲得率（2025年1月1日〜7月31日）</p>
        </div>
      </div>
    </section>
  );
}