export default function AchievementSection() {
  const achievements = [
    {
      title: "平均年収UP",
      value: "120",
      unit: "万円"
    },
    {
      title: "サービス満足度",
      value: "96",
      unit: "%",
      note: "※直近6ヶ月のアンケート結果"
    },
    {
      title: "内定率",
      value: "85",
      unit: "%"
    },
    {
      title: "最短内定",
      value: "3",
      unit: "日"
    }
  ];

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
          選ばれる実績
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {achievements.map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm">
              <p className="text-sm text-gray-600 mb-1">{item.title}</p>
              <div className="flex items-end justify-center">
                <span className="text-3xl font-bold text-sun">{item.value}</span>
                <span className="text-lg text-gray-700 ml-1">{item.unit}</span>
              </div>
              {item.note && <p className="text-xs text-gray-500 mt-2">{item.note}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}