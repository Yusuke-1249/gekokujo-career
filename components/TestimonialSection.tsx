export default function TestimonialSection() {
  const testimonials = [
    {
      name: "田中 健太",
      before: "コンビニバイト",
      beforeSalary: "年収180万円",
      after: "IT企業 営業職",
      afterSalary: "年収420万円",
      company: "大手SaaS企業",
      age: "24歳・男性",
      period: "転職まで2週間",
      image: "/images/user1.jpg", // プレースホルダー
      comment: "バイトを転々としていた自分でも、未経験からIT営業に挑戦できました。最初は不安でしたが、専任アドバイザーが履歴書の書き方から面接での話し方まで、本当に細かく教えてくれました。今では大手企業で正社員として働き、将来の不安がなくなりました。",
      highlights: ["完全週休2日", "年間休日125日", "リモートワーク可"]
    },
    {
      name: "佐藤 美咲",
      before: "派遣事務",
      beforeSalary: "年収240万円",
      after: "商社 総合職",
      afterSalary: "年収380万円",
      company: "専門商社",
      age: "28歳・女性",
      period: "転職まで3週間",
      image: "/images/user2.jpg", // プレースホルダー
      comment: "派遣で5年間働いていましたが、将来が不安で転職を決意。総合職は無理だと思っていましたが、私の経験を活かせる企業を見つけてくれました。年収だけでなく、福利厚生も充実していて、初めてボーナスをもらった時は本当に嬉しかったです。",
      highlights: ["賞与年2回", "退職金制度", "産休育休実績多数"]
    },
    {
      name: "山田 翔",
      before: "フリーター",
      beforeSalary: "年収200万円",
      after: "製造業 技術職",
      afterSalary: "年収400万円",
      company: "上場メーカー",
      age: "22歳・男性",
      period: "転職まで10日",
      image: "/images/user3.jpg", // プレースホルダー
      comment: "高卒でフリーターをしていた自分が、上場企業の正社員になれるなんて夢みたいです。手に職をつけたいという希望を伝えたら、研修制度が充実している企業を紹介してくれました。今では専門技術を身につけて、やりがいを持って働いています。",
      highlights: ["社内研修充実", "資格取得支援", "寮・社宅完備"]
    }
  ];

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
          転職成功者の声
        </h2>
        <div className="space-y-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 shadow-md border border-gray-100">
              {/* ユーザー情報ヘッダー */}
              <div className="flex items-start mb-4">
                <div className="w-16 h-16 bg-gray-300 rounded-full mr-4 flex items-center justify-center text-gray-500 text-xs">
                  写真
                </div>
                <div className="flex-1">
                  <p className="font-bold text-gray-900">{item.name}</p>
                  <p className="text-sm text-gray-600">{item.age}</p>
                  <p className="text-xs text-primary font-bold">{item.period}</p>
                </div>
              </div>

              {/* 転職前後の比較 */}
              <div className="bg-white rounded-lg p-4 mb-4 border border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-center flex-1">
                    <p className="text-xs text-gray-500 mb-1">Before</p>
                    <p className="font-bold text-gray-700 text-sm">{item.before}</p>
                    <p className="text-sm text-gray-600">{item.beforeSalary}</p>
                  </div>
                  <div className="text-primary text-2xl mx-2">→</div>
                  <div className="text-center flex-1">
                    <p className="text-xs text-primary mb-1">After</p>
                    <p className="font-bold text-primary-dark text-sm">{item.after}</p>
                    <p className="text-sm font-bold text-primary">{item.afterSalary}</p>
                    <p className="text-xs text-gray-600 mt-1">{item.company}</p>
                  </div>
                </div>
              </div>

              {/* 成功のポイント */}
              <div className="flex flex-wrap gap-2 mb-4">
                {item.highlights.map((highlight, idx) => (
                  <span key={idx} className="bg-primary-light text-primary text-xs px-2 py-1 rounded-full font-medium">
                    {highlight}
                  </span>
                ))}
              </div>

              {/* コメント */}
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-sm text-gray-700 leading-relaxed">
                  「{item.comment}」
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 p-4 bg-accent-light rounded-lg">
          <p className="text-center text-sm font-bold text-accent-dark mb-2">
            あなたも成功者の仲間入り！
          </p>
          <p className="text-center text-xs text-gray-600">
            ※個人の感想です。効果には個人差があります。
          </p>
        </div>
      </div>
    </section>
  );
}