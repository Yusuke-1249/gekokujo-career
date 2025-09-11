export default function ServiceFlowSection() {
  const steps = [
    {
      number: "01",
      title: "無料相談",
      description: "まずはお気軽にご相談ください。専任アドバイザーがあなたの希望をヒアリング。"
    },
    {
      number: "02",
      title: "求人紹介",
      description: "あなたに最適な求人を厳選してご紹介。非公開求人も多数あります。"
    },
    {
      number: "03",
      title: "面接対策",
      description: "書類作成から面接練習まで、内定獲得に向けて徹底サポート。"
    },
    {
      number: "04",
      title: "内定・入社",
      description: "内定後の条件交渉から入社後のフォローまで、最後までサポートします。"
    }
  ];

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
          サービスの流れ
        </h2>
        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-sun text-white rounded-full flex items-center justify-center font-bold">
                {step.number}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                <p className="text-sm text-gray-700">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}