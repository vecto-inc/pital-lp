const capabilities = [
  ["案件をまとめる", "案件・取引先管理", "取引先、就業場所、募集人数、日程を案件単位で管理します。"],
  ["人材情報を残す", "スタッフ台帳・評価", "資格、対応エリア、勤務実績、評価を会社の情報として共有します。"],
  ["候補を探す", "AIスタッフ検索", "勤務実績、評価、住所、経験などの情報から、案件条件に合う候補スタッフを検索します。"],
  ["募集を受け付ける", "案件公開・応募管理", "スタッフアプリへの案件公開から応募状況の確認まで管理します。"],
  ["配置を決める", "アサイン管理", "採用、仮アサイン、指名、承諾、辞退を案件ごとに記録します。"],
  ["連絡を届ける", "メッセージ配信", "メール、LINE、SMSなどを利用し、スタッフへの案内や確認を配信します。"],
  ["出勤を確かめる", "出勤確認", "出勤可否をスタッフが回答し、未回答者を一覧で確認できます。"],
  ["勤務を確定する", "勤怠・評価管理", "勤怠申請、承認、差し戻し、勤務後の評価までつなぎます。"],
];

const comparisonRows = [
  ["候補者探し", "担当者の記憶から探す", "勤務実績、評価、スタッフ属性（住所・経験など）から探す"],
  ["欠員対応", "担当者へ確認してから動く", "同じ案件画面から動く"],
  ["引き継ぎ", "状況説明から始める", "対応中の状態から続ける"],
  ["スタッフ連絡", "電話やチャットを追いかける", "アプリで回答を集める"],
];

const faqItems = [
  ["どのような会社・業種で利用できますか？", "案件ごとに必要な人数や条件に合わせて、スタッフや講師などを割り当てる事業者で利用できます。人材派遣、業務請負、イベント、販売、軽作業、試験監督、引っ越し、警備、清掃、物流、会場設営、研修・セミナー運営など、案件と人材を紐づけて手配するさまざまな業務に対応します。研修事業者では、研修内容、日時、場所、経験などの条件に合う講師の検索・アサインに活用できます。"],
  ["今のExcelを、すべて一度に変える必要がありますか？", "いいえ。まず案件登録と手配状況の共有から始め、スタッフアプリ、出勤確認、勤怠へ段階的に広げられます。"],
  ["AIが自動でスタッフを配置しますか？", "いいえ。AIスタッフ検索は、案件条件に合う候補スタッフを提示する機能です。最終的な配置判断は担当者が行います。"],
  ["すでに使用している基幹システムを置き換える必要がありますか？", "いいえ。スタッフ検索や人選ノウハウの蓄積など、必要な機能だけをご利用いただけます。既存システムとの併用や連携方法もご相談ください。"],
  ["営業以外でも利用できますか？", "案件条件、対応状況、次に必要な作業を共有できるため、営業事務やコーディネーターへ業務を分けやすくなります。"],
];

function Arrow() { return <span aria-hidden="true">→</span>; }

function OfficialLogo({ className = "" }: { className?: string }) {
  return <span className={`pital-official-logo ${className}`.trim()} aria-hidden="true" />;
}

function HeroIllustration() {
  return <svg className="pital-vector hero-vector" viewBox="0 0 640 560" preserveAspectRatio="xMidYMid meet" role="img" aria-labelledby="hero-vector-title hero-vector-desc">
    <title id="hero-vector-title">PITALで人材手配情報を共有するイメージ</title>
    <desc id="hero-vector-desc">案件、人材、勤務実績、対応状況をPITALに集約し、チームで候補スタッフを探せる状態を表しています。</desc>
    <circle cx="320" cy="280" r="238" fill="#e5eefb" />
    <circle cx="320" cy="280" r="195" fill="none" stroke="#a9c6ef" strokeWidth="2" strokeDasharray="8 10" />
    <path d="M203 154L264 218M438 154L376 218M194 402L265 340M448 402L375 340" stroke="#7eacd7" strokeWidth="3" strokeLinecap="round" />
    <g className="vector-node">
      <rect x="40" y="94" width="200" height="96" rx="12" fill="#fff" stroke="#d8e5f2" strokeWidth="2" />
      <rect x="58" y="115" width="42" height="42" rx="9" fill="#e7f5fc" />
      <path d="M69 128h20M69 137h20M69 146h13" stroke="#2389ca" strokeWidth="3" strokeLinecap="round" />
      <text x="114" y="132" className="svg-title">案件</text><text x="114" y="158" className="svg-copy">条件・人数</text>
    </g>
    <g className="vector-node">
      <rect x="400" y="94" width="200" height="96" rx="12" fill="#fff" stroke="#d8e5f2" strokeWidth="2" />
      <rect x="418" y="115" width="42" height="42" rx="9" fill="#eef0ff" />
      <circle cx="439" cy="129" r="7" fill="none" stroke="#3257cd" strokeWidth="3" /><path d="M427 148c4-11 20-11 24 0" fill="none" stroke="#3257cd" strokeWidth="3" strokeLinecap="round" />
      <text x="474" y="132" className="svg-title">人材</text><text x="474" y="158" className="svg-copy">経験・評価</text>
    </g>
    <g className="vector-node">
      <rect x="40" y="370" width="200" height="96" rx="12" fill="#fff" stroke="#d8e5f2" strokeWidth="2" />
      <rect x="58" y="391" width="42" height="42" rx="9" fill="#e7f5fc" />
      <path d="M70 421v-12M79 421v-22M88 421v-17" stroke="#2389ca" strokeWidth="4" strokeLinecap="round" />
      <text x="114" y="408" className="svg-title">実績</text><text x="114" y="434" className="svg-copy">勤務履歴</text>
    </g>
    <g className="vector-node">
      <rect x="400" y="370" width="200" height="96" rx="12" fill="#fff" stroke="#d8e5f2" strokeWidth="2" />
      <rect x="418" y="391" width="42" height="42" rx="9" fill="#eef0ff" />
      <path d="M428 413l8 8 15-18" fill="none" stroke="#3257cd" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <text x="474" y="408" className="svg-title">進捗</text><text x="474" y="434" className="svg-copy">対応状況</text>
    </g>
    <rect x="220" y="205" width="200" height="154" rx="28" fill="#3257cd" />
    <rect x="252" y="224" width="136" height="88" rx="8" fill="#fff" />
    <image href="/pital-logo.svg" x="252" y="224" width="136" height="88" preserveAspectRatio="xMidYMid meet" />
    <text x="320" y="340" textAnchor="middle" className="svg-white-copy">人材手配を共有</text>
    <rect x="102" y="482" width="436" height="58" rx="10" fill="#fff" stroke="#cbdced" strokeWidth="2" />
    <circle cx="138" cy="511" r="13" fill="#e73333" /><path d="M134 511l3 3 6-7" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <text x="342" y="518" textAnchor="middle" className="svg-callout">チームで候補スタッフを探せる</text>
  </svg>;
}

function SiloIllustration() {
  return <svg className="pital-vector silo-vector" viewBox="0 0 600 440" preserveAspectRatio="xMidYMid meet" role="img" aria-labelledby="silo-title silo-desc">
    <title id="silo-title">人材手配の判断が一人に集中している状態</title>
    <desc id="silo-desc">記憶、個人メモ、チャットの情報が一人の担当者だけに集まり、他のメンバーが利用できない状態です。</desc>
    <rect x="1" y="1" width="598" height="438" rx="14" fill="#f8fbff" stroke="#e2ebf4" strokeWidth="2" />
    <g><rect x="42" y="62" width="158" height="70" rx="10" fill="#fff" stroke="#dbe7f2" strokeWidth="2" /><circle cx="72" cy="97" r="15" fill="#e7f5fc" /><path d="M67 97h10M72 92v10" stroke="#2389ca" strokeWidth="2.5" strokeLinecap="round" /><text x="98" y="104" className="svg-title">記憶</text></g>
    <g><rect x="42" y="166" width="158" height="70" rx="10" fill="#fff" stroke="#dbe7f2" strokeWidth="2" /><circle cx="72" cy="201" r="15" fill="#eef0ff" /><path d="M65 194h14v15H65zM68 198h8M68 202h8" fill="none" stroke="#3257cd" strokeWidth="2" /><text x="98" y="208" className="svg-title">個人メモ</text></g>
    <g><rect x="42" y="270" width="158" height="70" rx="10" fill="#fff" stroke="#dbe7f2" strokeWidth="2" /><circle cx="72" cy="305" r="15" fill="#e7f5fc" /><path d="M64 298h16v11H70l-5 4v-4h-1z" fill="none" stroke="#2389ca" strokeWidth="2" strokeLinejoin="round" /><text x="98" y="312" className="svg-title">チャット</text></g>
    <path d="M210 97C265 97 252 176 292 190M210 201H286M210 305C265 305 252 226 292 212" fill="none" stroke="#91b8db" strokeWidth="3" strokeLinecap="round" />
    <circle cx="350" cy="202" r="82" fill="#3257cd" />
    <circle cx="350" cy="178" r="25" fill="#fff" /><path d="M309 237c7-39 75-39 82 0" fill="#fff" />
    <rect x="248" y="264" width="204" height="48" rx="24" fill="#fff" stroke="#cbdced" strokeWidth="2" />
    <text x="350" y="295" textAnchor="middle" className="svg-callout">担当者だけが把握</text>
    <path d="M437 202h64" stroke="#d6e1ed" strokeWidth="3" strokeDasharray="7 8" />
    <circle cx="530" cy="202" r="42" fill="#fff" stroke="#d6e1ed" strokeWidth="2" /><circle cx="530" cy="189" r="12" fill="#aab8c7" /><path d="M510 223c4-21 36-21 40 0" fill="#aab8c7" />
    <circle cx="486" cy="158" r="17" fill="#e73333" /><text x="486" y="165" textAnchor="middle" className="svg-warning">!</text>
    <rect x="134" y="372" width="332" height="46" rx="8" fill="#fff" stroke="#f0c4c4" strokeWidth="2" /><text x="300" y="402" textAnchor="middle" className="svg-danger">判断材料をほかの人が使えない</text>
  </svg>;
}

function PitalIllustration() {
  return <svg className="pital-vector solution-vector" viewBox="0 0 600 440" preserveAspectRatio="xMidYMid meet" role="img" aria-labelledby="solution-title solution-desc">
    <title id="solution-title">PITALが情報を会社の資産に変えるイメージ</title>
    <desc id="solution-desc">案件、スタッフ、勤務実績、対応状況をPITALに集約し、複数のメンバーが共有しています。</desc>
    <rect x="1" y="1" width="598" height="438" rx="14" fill="#f8fbff" stroke="#d9e6f3" strokeWidth="2" />
    <path d="M150 100L248 182M150 218H238M150 336L248 258M450 218H505" fill="none" stroke="#91b8db" strokeWidth="3" strokeLinecap="round" />
    <g><rect x="36" y="62" width="132" height="72" rx="10" fill="#fff" stroke="#d8e5f2" strokeWidth="2" /><text x="102" y="92" textAnchor="middle" className="svg-title">案件</text><text x="102" y="117" textAnchor="middle" className="svg-copy">条件・人数</text></g>
    <g><rect x="36" y="182" width="132" height="72" rx="10" fill="#fff" stroke="#d8e5f2" strokeWidth="2" /><text x="102" y="212" textAnchor="middle" className="svg-title">スタッフ</text><text x="102" y="237" textAnchor="middle" className="svg-copy">経験・評価</text></g>
    <g><rect x="36" y="302" width="132" height="72" rx="10" fill="#fff" stroke="#d8e5f2" strokeWidth="2" /><text x="102" y="332" textAnchor="middle" className="svg-title">勤務実績</text><text x="102" y="357" textAnchor="middle" className="svg-copy">履歴・勤怠</text></g>
    <rect x="236" y="140" width="210" height="156" rx="24" fill="#3257cd" />
    <rect x="273" y="154" width="136" height="88" rx="8" fill="#fff" />
    <image href="/pital-logo.svg" x="273" y="154" width="136" height="88" preserveAspectRatio="xMidYMid meet" />
    <text x="341" y="274" textAnchor="middle" className="svg-white-copy">情報を一元管理</text>
    <g><circle cx="528" cy="175" r="31" fill="#fff" stroke="#cbdced" strokeWidth="2" /><circle cx="528" cy="166" r="9" fill="#2389ca" /><path d="M513 193c3-16 27-16 30 0" fill="#2389ca" /></g>
    <g><circle cx="528" cy="252" r="31" fill="#fff" stroke="#cbdced" strokeWidth="2" /><circle cx="528" cy="243" r="9" fill="#3257cd" /><path d="M513 270c3-16 27-16 30 0" fill="#3257cd" /></g>
    <circle cx="480" cy="218" r="17" fill="#2389ca" /><path d="M472 218l6 6 11-13" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="159" y="363" width="310" height="48" rx="8" fill="#fff" stroke="#cbdced" strokeWidth="2" /><text x="314" y="394" textAnchor="middle" className="svg-callout">会社の情報としてチームで共有</text>
  </svg>;
}

export default function Home() {
  return <main className="linear-page">
    <header className="linear-header">
      <a className="brand" href="#top" aria-label="PITAL トップへ"><OfficialLogo className="header-logo" /></a>
      <nav aria-label="メインナビゲーション"><a href="#risk">課題</a><a href="#about">PITALとは</a><a href="#features">できること</a><a href="#faq">よくある質問</a></nav>
      <a className="linear-header-cta" href="#contact">無料で相談する</a>
    </header>

    <section className="linear-hero" id="top">
      <div className="linear-hero-copy">
        <p className="linear-breadcrumb">案件ごとにスタッフを手配する事業者向け <span>人材手配の属人化対策</span></p>
        <h1>欠員より怖いのは、<br />代わりを探せる人が<br />いないこと。</h1>
        <i className="linear-rule" />
        <p>急な欠勤、学生スタッフの卒業、担当者の休職・退職。<br />次に誰へ連絡するかが特定の人しか分からなければ、人材手配は簡単に止まります。</p>
        <p><strong>PITALは、案件・スタッフ・勤務実績・対応状況を会社に残し、</strong><br />誰でも次の候補スタッフを探せる状態をつくります。</p>
        <div className="linear-hero-actions"><a className="linear-button primary" href="#contact">自社の属人化リスクを確認する <Arrow /></a><a className="linear-text-link" href="#about">PITALについて見る ↓</a></div>
      </div>
      <div className="linear-hero-visual"><HeroIllustration /></div>
    </section>

    <section className="linear-proof" aria-label="PITALがつなぐ範囲">
      <div><b>6</b><span>つの業務工程<br />募集から評価まで</span></div>
      <div><b>2</b><span>つの利用画面<br />管理者・スタッフ</span></div>
      <div><b>1</b><span>つの案件情報<br />誰でも続きから対応</span></div>
    </section>

    <section className="message-section message-white" id="risk">
      <div className="message-number">01</div>
      <div className="message-copy"><p>まず起きていること</p><h2>次に誰へ連絡するか。<br />知っているのは、いつも同じ人。</h2><div className="message-body"><p>案件の条件、スタッフの経験、現場との相性。判断に必要な情報が、担当者の記憶、個人メモ、過去のチャットに散らばっています。</p><p>スタッフ名簿があっても、「なぜこの人なのか」「次の候補は誰なのか」が共有されていなければ、別の人は動けません。</p></div></div>
      <div className="message-figure"><SiloIllustration /></div>
    </section>

    <section className="message-section message-navy">
      <div className="message-number">02</div>
      <div className="message-copy"><p>本当に怖いこと</p><h2>その一人が休むと、<br />案件が止まる。</h2><div className="message-body"><p>急な欠勤、卒業、休職、退職は防ぎきれません。問題は、人が抜けた瞬間に、候補者探しと状況確認まで最初からやり直しになることです。</p></div></div>
      <div className="stop-events"><div><span>急な欠勤</span><b>代替候補が分からない</b></div><div><span>卒業・退職</span><b>人選ノウハウが消える</b></div><div><span>担当者不在</span><b>対応状況を確認できない</b></div></div>
    </section>

    <section className="message-section message-pale">
      <div className="message-number">03</div>
      <div className="message-copy"><p>経営への影響</p><h2>止まるのは、<br />人材手配だけではありません。</h2><div className="message-body"><p>欠員対応が遅れれば、顧客への説明と謝罪が増えます。営業が人選と確認に追われれば、提案と受注の時間が減ります。</p></div></div>
      <div className="impact-line"><div><b>顧客</b><span>信用低下</span></div><i>＋</i><div><b>営業</b><span>提案時間の減少</span></div><i>＋</i><div><b>会社</b><span>成長の停滞</span></div></div>
    </section>

    <section className="message-section message-blue" id="about">
      <div className="message-number">04</div>
      <div className="message-copy"><p>解決</p><h2>だから、PITAL。</h2><div className="message-body"><p>PITALは、案件・スタッフ・応募・配置・出勤・勤怠を一つにつなぐ、案件ごとにスタッフを手配する事業者向けの業務管理SaaSです。</p><p>担当者の判断を機械へ置き換えるのではなく、判断に必要な情報と現在の進捗を、チーム全員が確認できる状態にします。</p></div></div>
      <div className="message-figure"><PitalIllustration /></div>
    </section>

    <section className="flow-section-linear">
      <div className="linear-section-heading"><span>05 情報をつなぐ</span><h2>判断材料と進捗を、<br />一つの案件につなぐ。</h2><p>別々の資料と連絡手段を探し回らず、同じ案件情報から次の対応へ進めます。</p></div>
      <div className="linear-flow"><div><b>案件登録</b><span>条件・人数・日程</span></div><i>→</i><div><b>募集・応募</b><span>応募者を確認</span></div><i>→</i><div><b>配置</b><span>採用・承諾</span></div><i>→</i><div><b>出勤確認</b><span>未回答を把握</span></div><i>→</i><div><b>勤怠・評価</b><span>次の人選へ残す</span></div></div>
    </section>

    <section className="message-section message-white">
      <div className="message-number">06</div>
      <div className="message-copy"><p>変わること</p><h2>誰でも、<br />続きから対応できる。</h2><div className="message-body"><p>人選の最終判断は人が行います。しかし、候補を探すための情報と現在の進捗は、特定の人だけが持つ必要はありません。</p></div></div>
      <div className="before-after-simple"><div><span>これまで</span><b>「担当者に聞かないと分からない」</b></div><i>→</i><div><span>PITAL導入後</span><b>「同じ画面を見て続きから動ける」</b></div></div>
    </section>

    <section className="features-linear" id="features">
      <div className="linear-section-heading"><span>07 PITALでできること</span><h2>募集から勤怠まで、<br />一つの流れで管理する。</h2><p>現在提供中の機能です。</p></div>
      <div className="features-linear-grid">{capabilities.map(([eyebrow,title,description],index)=><article key={title}><small>{String(index+1).padStart(2,"0")}</small><span>{eyebrow}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
    </section>

    <section className="comparison-linear">
      <div className="linear-section-heading"><span>08 導入前後</span><h2>作業を増やすのではなく、<br />探す・聞く・待つを減らす。</h2></div>
      <div className="comparison-linear-table"><div className="comparison-linear-head"><b>業務</b><b>これまで</b><b>PITAL導入後</b></div>{comparisonRows.map(([label,before,after])=><div className="comparison-linear-row" key={label}><strong>{label}</strong><span>{before}</span><span>{after}</span></div>)}</div>
    </section>

    <section className="roadmap-linear">
      <div className="linear-section-heading light"><span>09 ご利用範囲</span><h2>必要な機能から、<br />無理なく始められます。</h2><p>標準機能の一部利用や既存システムとの併用など、現在の運用に合わせてご相談いただけます。</p></div>
      <div className="roadmap-linear-grid"><article><span>現在提供中</span><h3>人材手配に必要な標準機能</h3><p>案件・スタッフ管理、AIスタッフ検索、応募・アサイン、メッセージ配信、出勤確認、勤怠、評価、管理画面、スタッフアプリ。</p></article><article><span>ご相談ください</span><h3>既存システムとの併用・カスタマイズ</h3><p>必要な機能だけの利用、既存システムとの連携、運用に合わせたカスタマイズ開発は、内容を確認のうえ個別にご提案します。</p></article></div>
    </section>

    <section className="faq-linear" id="faq">
      <div className="linear-section-heading"><span>10 よくある質問</span><h2>導入前の疑問に、<br />先にお答えします。</h2></div>
      <div className="faq-linear-list">{faqItems.map(([question,answer],index)=><details key={question}><summary><b>Q{String(index+1).padStart(2,"0")}</b><span>{question}</span><i>＋</i></summary><p>{answer}</p></details>)}</div>
    </section>

    <section className="linear-contact" id="contact">
      <div className="linear-contact-copy"><OfficialLogo className="contact-logo" /><p>まずは、現在の手配業務を確認</p><h2>人材手配を、<br />一人の仕事にしない。</h2><p>どの情報が分散し、どの業務が特定の人へ集中しているかを整理します。</p><ul><li>✓ PITALの機能と画面イメージ</li><li>✓ 段階的な導入方法</li><li>✓ AIスタッフ検索と既存システム併用のご相談</li></ul></div>
      <form className="linear-form" action="mailto:contact@example.com" method="post" encType="text/plain"><div><span>無料</span><h3>資料請求・導入相談</h3></div><label>会社名 <b>必須</b><input name="company" required placeholder="株式会社〇〇" /></label><label>メールアドレス <b>必須</b><input name="email" type="email" required placeholder="name@example.jp" /></label><label>ご相談内容 <span>任意</span><select name="purpose" defaultValue=""><option value="" disabled>選択してください</option><option>資料を見たい</option><option>オンラインデモを希望</option><option>属人化リスクを相談したい</option></select></label><label className="linear-consent"><input type="checkbox" required /> プライバシーポリシーに同意する</label><button type="submit">無料で相談する <Arrow /></button><small>送信時にメールソフトが開きます。公開時はお問い合わせシステムへ接続します。</small></form>
    </section>

    <footer className="linear-footer"><a className="brand" href="#top" aria-label="PITAL トップへ"><OfficialLogo className="footer-logo" /></a><p>案件・スタッフ・配置・出勤・勤怠をつなぐ業務管理SaaS。</p><small>© 2026 Vecto Inc.</small></footer>
    <a className="linear-mobile-cta" href="#contact">無料で相談する <Arrow /></a>
  </main>;
}
