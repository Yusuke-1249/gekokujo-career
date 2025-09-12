export default function StrengthSection() {
  const strengths = [
    {
      title: "未経験特化",
      description: "未経験からの転職に特化した求人とサポート体制",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "伴走サポート",
      description: "書類作成から面接対策まで専任アドバイザーが徹底サポート",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "非公開求人",
      description: "一般には公開されていない優良企業の求人を多数保有",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: "定着支援",
      description: "入社後も3ヶ月間のフォローアップで安心の職場定着",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
          私たちの強み
        </h2>
        <div className="space-y-4">
          {strengths.map((item, index) => (
            <div key={index} className="flex items-start space-x-4 p-5 bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center flex-shrink-0 text-primary">
                {item.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-1 text-lg">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}