export default function StrengthSection() {
  const strengths = [
    {
      title: "未経験特化",
      description: "未経験からの転職に特化した求人とサポート体制"
    },
    {
      title: "伴走サポート",
      description: "書類作成から面接対策まで専任アドバイザーが徹底サポート"
    },
    {
      title: "非公開求人",
      description: "一般には公開されていない優良企業の求人を多数保有"
    },
    {
      title: "定着支援",
      description: "入社後も3ヶ月間のフォローアップで安心の職場定着"
    }
  ];

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
          私たちの強み
        </h2>
        <div className="space-y-4">
          {strengths.map((item, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 bg-primary-light rounded-lg">
              <span className="text-primary font-bold text-xl">●</span>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}