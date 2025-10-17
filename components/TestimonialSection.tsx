import Image from "next/image";

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "T.K さん",
      before: "コンビニバイト",
      after: "営業職",
      company: "大手不動産会社",
      age: "24歳・男性",
      period: "内定まで2週間",
      image: "/images/success-1.webp",
      comment: "バイトを転々としていた自分でも、未経験から営業に挑戦できました。最初は不安でしたが、専任アドバイザーが履歴書の書き方から面接での話し方まで、本当に細かく教えてくれました。今では大手企業で正社員として働き、将来の不安がなくなりました。"
    },
    {
      name: "M.S さん",
      before: "倉庫作業員",
      after: "建築系管理職",
      company: "大手ゼネコン",
      age: "25歳・女性",
      period: "内定まで1週間",
      image: "/images/user2.webp", // プレースホルダー
      comment: "派遣で5年間働いていましたが、将来が不安で転職を決意。専門職は無理だと思っていましたが、私の経験を活かせる企業を見つけてくれました。年収だけでなく、福利厚生も充実していて、初めてボーナスをもらった時は本当に嬉しかったです。"
    },
    {
      name: "S.Y さん",
      before: "フリーター",
      after: "機械系エンジニア",
      company: "メーカー",
      age: "22歳・男性",
      period: "内定まで5日",
      image: "/images/user3.webp", // プレースホルダー
      comment: "高卒でフリーターをしていた自分が、上場企業の正社員になれるなんて夢みたいです。手に職をつけたいという希望を伝えたら、研修制度が充実している企業を紹介してくれました。今では専門技術を身につけて、やりがいを持って働いています。"
    }
  ];

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
          転職成功者にインタビューしました！
        </h2>
        <div className="space-y-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 shadow-md border border-gray-100">
              {/* ユーザー情報ヘッダー */}
              <div className="flex items-start mb-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                  loading="lazy"
                />
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
                  </div>
                  <div className="text-primary text-2xl mx-2">→</div>
                  <div className="text-center flex-1">
                    <p className="text-xs text-primary mb-1">After</p>
                    <p className="font-bold text-primary-dark text-sm">{item.after}</p>
                    <p className="text-xs text-gray-600 mt-1">{item.company}</p>
                  </div>
                </div>
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
      </div>
    </section>
  );
}
