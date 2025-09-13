import Footer from '@/components/Footer';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8 text-center">利用規約</h1>
        
        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 space-y-6">
          <section>
            <p className="text-gray-700 leading-relaxed mb-4">
              この利用規約（以下、「本規約」といいます。）は、株式会社Apoial（以下、「当社」といいます。）が運営する「下剋上キャリア」（以下、「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下、「ユーザー」といいます。）には、本規約に従って、本サービスをご利用いただきます。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">第1条（適用）</h2>
            <p className="text-gray-700 leading-relaxed">
              本規約は、ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">第2条（サービスの利用開始）</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              ユーザーは、本サービス上で当社が指定する情報を入力することにより、本サービスを利用できます。利用にあたり、当社による承認や利用登録は不要です。
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              ただし、当社は以下の事由があると判断した場合、サービスの提供をお断りすることがあり、その理由については一切の開示義務を負わないものとします。
            </p>
            <ol className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>虚偽の情報を入力した場合</li>
              <li>本規約に違反したことがある者からの申請である場合</li>
              <li>その他、当社がサービス提供を相当でないと判断した場合</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">第3条（本サービスの提供）</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              当社は、ユーザーに対し、以下のサービスを無料で提供します。
            </p>
            <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
              <li>求人情報の紹介</li>
              <li>キャリアカウンセリング</li>
              <li>履歴書・職務経歴書の作成支援</li>
              <li>面接対策の支援</li>
              <li>転職活動に関する各種サポート</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">第4条（個人情報の取り扱い）</h2>
            <p className="text-gray-700 leading-relaxed">
              当社は、本サービスの利用によって取得する個人情報については、当社「プライバシーポリシー」に従い適切に取り扱うものとします。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">第5条（禁止事項）</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。
            </p>
            <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
              <li>法令または公序良俗に違反する行為</li>
              <li>犯罪行為に関連する行為</li>
              <li>当社のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
              <li>当社のサービスの運営を妨害するおそれのある行為</li>
              <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
              <li>他のユーザーに成りすます行為</li>
              <li>当社のサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為</li>
              <li>虚偽の情報を登録する行為</li>
              <li>その他、当社が不適切と判断する行為</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">第6条（本サービスの提供の停止等）</h2>
            <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
              <li>当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
                <ol className="list-disc list-inside mt-2 ml-4 space-y-1">
                  <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
                  <li>地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</li>
                  <li>コンピュータまたは通信回線等が事故により停止した場合</li>
                  <li>その他、当社が本サービスの提供が困難と判断した場合</li>
                </ol>
              </li>
              <li>当社は、本サービスの提供の停止または中断により、ユーザーまたは第三者が被ったいかなる不利益または損害についても、一切の責任を負わないものとします。</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">第7条（免責事項）</h2>
            <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
              <li>当社は、本サービスに関して、ユーザーと他のユーザーまたは第三者との間において生じた取引、連絡または紛争等について一切責任を負いません。</li>
              <li>当社は、本サービスを通じて紹介した求人への応募結果について、採用を保証するものではありません。</li>
              <li>当社は、求人企業の提供する情報の正確性、最新性、有用性等について保証するものではありません。</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">第8条（サービス内容の変更等）</h2>
            <p className="text-gray-700 leading-relaxed">
              当社は、ユーザーに通知することなく、本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし、これによってユーザーに生じた損害について一切の責任を負いません。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">第9条（利用規約の変更）</h2>
            <p className="text-gray-700 leading-relaxed">
              当社は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。なお、本規約の変更後、本サービスの利用を開始した場合には、当該ユーザーは変更後の規約に同意したものとみなします。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">第10条（準拠法・裁判管轄）</h2>
            <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
              <li>本規約の解釈にあたっては、日本法を準拠法とします。</li>
              <li>本サービスに関して紛争が生じた場合には、当社の本店所在地を管轄する裁判所を専属的合意管轄とします。</li>
            </ol>
          </section>

          <section className="pt-6 border-t border-gray-200">
            <p className="text-gray-700">
              株式会社Apoial<br />
              大阪府大阪市阿倍野区阪南町1-18-7-203
            </p>
          </section>
        </div>

        <div className="text-center mt-8">
          <a 
            href="/" 
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary-dark transition-colors"
          >
            トップページに戻る
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}