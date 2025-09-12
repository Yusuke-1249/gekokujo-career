export default function AboutSection() {
  return (
    <section className="py-8 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          下剋上キャリアとは
        </h2>
        <p className="text-sm text-gray-700 mb-6 leading-relaxed">
          未経験・フリーター・第二新卒特化の<br />
          <span className="text-primary font-bold text-base">完全無料</span>転職支援サービスです
        </p>
        
        <div className="flex justify-center space-x-6">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm font-medium text-gray-700">完全無料</span>
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm font-medium text-gray-700">未経験OK</span>
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm font-medium text-gray-700">年収UP実績</span>
          </div>
        </div>
      </div>
    </section>
  );
}