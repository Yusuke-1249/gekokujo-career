export default function ServiceFlowSection() {
  const steps = [
    {
      number: "01",
      title: "無料相談",
      description: "まずはお気軽にご相談ください。専任アドバイザーがあなたの希望をヒアリングします。"
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
    <section className="py-12 px-4 bg-white">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
          サービスの流れ
        </h2>
        <div className="relative">
          {steps.map((step, index) => (
            <div key={index}>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-sun to-primary text-white rounded-full flex items-center justify-center">
                      <span className="text-xl font-bold">{step.number}</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="flex justify-center my-4">
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}