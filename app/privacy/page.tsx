import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8 text-center">プライバシーポリシー</h1>
        
        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 space-y-6">
          <section>
            <p className="text-gray-700 leading-relaxed mb-4">
              株式会社Apoial（以下、「当社」といいます。）は、「下剋上キャリア」（以下、「本サービス」といいます。）における、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます。）を定めます。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">第1条（個人情報）</h2>
            <p className="text-gray-700 leading-relaxed">
              「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報及び容貌、指紋、声紋にかかるデータ、及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">第2条（個人情報の収集方法）</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              当社は、ユーザーが利用登録をする際に以下の情報をお尋ねすることがあります。
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>氏名</li>
              <li>電話番号</li>
              <li>メールアドレス</li>
              <li>年齢</li>
              <li>性別</li>
              <li>現在の就業状況</li>
              <li>職歴・経歴</li>
              <li>希望職種・勤務地</li>
              <li>その他転職支援に必要な情報</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">第3条（個人情報を収集・利用する目的）</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              当社が個人情報を収集・利用する目的は、以下のとおりです。
            </p>
            <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
              <li>転職支援サービスの提供・運営のため</li>
              <li>求人企業への情報提供のため（ユーザーの同意を得た場合）</li>
              <li>ユーザーからのお問い合わせに対応するため</li>
              <li>ユーザーに対するキャリアカウンセリング、面接対策の実施のため</li>
              <li>求人情報、転職に関する情報の提供のため</li>
              <li>当社サービスの改善、新サービスの開発のため</li>
              <li>メンテナンス、重要なお知らせなど必要に応じたご連絡のため</li>
              <li>利用規約に違反したユーザーや、不正・不当な目的でサービスを利用しようとするユーザーの特定をし、ご利用をお断りするため</li>
              <li>上記の利用目的に付随する目的</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">第4条（利用目的の変更）</h2>
            <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
              <li>当社は、利用目的が変更前と関連性を有すると合理的に認められる場合に限り、個人情報の利用目的を変更するものとします。</li>
              <li>利用目的の変更を行った場合には、変更後の目的について、当社所定の方法により、ユーザーに通知し、または本ウェブサイト上に公表するものとします。</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">第5条（個人情報の第三者提供）</h2>
            <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
              <li>当社は、次に掲げる場合を除いて、あらかじめユーザーの同意を得ることなく、第三者に個人情報を提供することはありません。ただし、個人情報保護法その他の法令で認められる場合を除きます。
                <ol className="list-disc list-inside mt-2 ml-4 space-y-1">
                  <li>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                  <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                  <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</li>
                  <li>予め次の事項を告知あるいは公表し、かつ当社が個人情報保護委員会に届出をしたとき</li>
                </ol>
              </li>
              <li>前項の定めにかかわらず、次に掲げる場合には、当該情報の提供先は第三者に該当しないものとします。
                <ol className="list-disc list-inside mt-2 ml-4 space-y-1">
                  <li>当社が利用目的の達成に必要な範囲内において個人情報の取扱いの全部または一部を委託する場合</li>
                  <li>合併その他の事由による事業の承継に伴って個人情報が提供される場合</li>
                  <li>求人企業への応募に際して、ユーザーの同意を得て情報を提供する場合</li>
                </ol>
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">第6条（個人情報の開示）</h2>
            <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
              <li>当社は、本人から個人情報の開示を求められたときは、本人に対し、遅滞なくこれを開示します。ただし、開示することにより次のいずれかに該当する場合は、その全部または一部を開示しないこともあり、開示しない決定をした場合には、その旨を遅滞なく通知します。
                <ol className="list-disc list-inside mt-2 ml-4 space-y-1">
                  <li>本人または第三者の生命、身体、財産その他の権利利益を害するおそれがある場合</li>
                  <li>当社の業務の適正な実施に著しい支障を及ぼすおそれがある場合</li>
                  <li>その他法令に違反することとなる場合</li>
                </ol>
              </li>
              <li>前項の定めにかかわらず、履歴情報および特性情報などの個人情報以外の情報については、原則として開示いたしません。</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">第7条（個人情報の訂正および削除）</h2>
            <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
              <li>ユーザーは、当社の保有する自己の個人情報が誤った情報である場合には、当社が定める手続きにより、当社に対して個人情報の訂正、追加または削除（以下、「訂正等」といいます。）を請求することができます。</li>
              <li>当社は、ユーザーから前項の請求を受けてその請求に応じる必要があると判断した場合には、遅滞なく、当該個人情報の訂正等を行うものとします。</li>
              <li>当社は、前項の規定に基づき訂正等を行った場合、または訂正等を行わない旨の決定をしたときは遅滞なく、これをユーザーに通知します。</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">第8条（個人情報の利用停止等）</h2>
            <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
              <li>当社は、本人から、個人情報が、利用目的の範囲を超えて取り扱われているという理由、または不正の手段により取得されたものであるという理由により、その利用の停止または消去（以下、「利用停止等」といいます。）を求められた場合には、遅滞なく必要な調査を行います。</li>
              <li>前項の調査結果に基づき、その請求に応じる必要があると判断した場合には、遅滞なく、当該個人情報の利用停止等を行います。</li>
              <li>当社は、前項の規定に基づき利用停止等を行った場合、または利用停止等を行わない旨の決定をしたときは、遅滞なく、これをユーザーに通知します。</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">第9条（Cookie等の使用）</h2>
            <p className="text-gray-700 leading-relaxed">
              当社のウェブサイトは、サービス向上のためCookieを使用することがあります。Cookieは、ウェブサイトの利用状況を分析し、より良いサービスを提供するために使用されます。ユーザーはブラウザの設定によりCookieの使用を拒否することができますが、その場合、本サービスの一部の機能が利用できなくなる可能性があります。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">第10条（セキュリティ対策）</h2>
            <p className="text-gray-700 leading-relaxed">
              当社は、個人情報の漏洩・紛失・毀損の防止その他の個人情報の安全管理のために、必要かつ適切な措置を講じます。個人情報の取扱いに関する社内規程を定め、従業員に対する教育・研修を実施し、個人情報の適切な管理に努めます。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">第11条（プライバシーポリシーの変更）</h2>
            <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
              <li>本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、ユーザーに通知することなく、変更することができるものとします。</li>
              <li>当社が別途定める場合を除いて、変更後のプライバシーポリシーは、本ウェブサイトに掲載したときから効力を生じるものとします。</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">第12条（お問い合わせ窓口）</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-700 mb-3">
                <strong>LINE公式アカウント</strong><br />
                <a href="https://lin.ee/NnxXPKx" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark">
                  https://lin.ee/NnxXPKx
                </a>
              </p>
              <p className="text-gray-700">
                <strong>運営会社</strong><br />
                株式会社Apoial<br />
                大阪府大阪市阿倍野区阪南町1-18-7-203
              </p>
            </div>
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