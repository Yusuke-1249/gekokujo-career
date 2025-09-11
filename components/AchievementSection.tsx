export default function AchievementSection() {
  const achievements = [
    {
      title: "平均年収UP",
      value: "120",
      unit: "万円",
      note: "※2023年実績・個人差あり"
    },
    {
      title: "累計入社者数",
      value: "3,500",
      unit: "名",
      note: "※2020年〜2024年累計"
    },
    {
      title: "内定率",
      value: "92",
      unit: "%",
      note: "※3ヶ月以内・2023年実績"
    },
    {
      title: "最短内定",
      value: "7",
      unit: "日",
      note: "※最短記録・個人差あり"
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
              <p className="text-xs text-gray-500 mt-2">{item.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}