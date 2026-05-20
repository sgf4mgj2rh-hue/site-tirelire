/* global React */
const { useState, useMemo } = React;

// ============ Icons ============
const Icon = {
  Arrow: (p) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" {...p}>
      <path d="M4 8h8m0 0L8.5 4.5M12 8l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Search: (p) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" {...p}>
      <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M10.5 10.5L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  Check: (p) => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" {...p}>
      <path d="M3 7.5l2.5 2.5L11 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Pig: (p) => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" {...p}>
      <path d="M21 13.5c0-4-3.4-7-7.5-7-3.3 0-6.1 1.9-7.1 4.5H4.5a1 1 0 00-1 1v2.5c0 .5.4 1 1 1h.7c.4 1 1 1.9 1.8 2.5V20a1 1 0 001 1h2a1 1 0 001-1v-.7c.5.1 1 .1 1.5.1.4 0 .9 0 1.3-.1V20a1 1 0 001 1h2a1 1 0 001-1v-2.1c1.4-1.1 2.2-2.6 2.2-4.4z" stroke="currentColor" strokeWidth="1.4" fill="none"/>
      <circle cx="16.5" cy="12" r="1" fill="currentColor"/>
      <path d="M9 9h3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  ),
  Chart: (p) => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" {...p}>
      <path d="M5 21V11M11 21V7M17 21v-8M23 21V5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  ),
  Tax: (p) => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" {...p}>
      <path d="M7 5h10l3 4v14a1 1 0 01-1 1H8a1 1 0 01-1-1V5z" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M10 12h8M10 16h8M10 20h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  ),
  Wallet: (p) => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" {...p}>
      <rect x="4" y="8" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M4 11h20M19 15h2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  ),
  Mountain: (p) => (
    <svg width="100%" height="100%" viewBox="0 0 1320 70" preserveAspectRatio="none" {...p}>
      <path d="M0 70 L120 25 L210 50 L340 10 L470 45 L580 20 L720 55 L850 15 L1000 40 L1120 22 L1320 50 L1320 70 Z" fill="currentColor"/>
    </svg>
  ),
};

// ============ Top Nav ============
function TopNav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#" className="logo">
          <img src="logo.png" alt="Tirelire.ch" style={{height:36, width:36, objectFit:'contain', borderRadius:8}} />
          <span>Tirelire<span className="logo-suffix">.ch</span></span>
        </a>
        <nav className="nav-links">
          <a href="#sommaire">Sommaire</a>
          <a href="#budget">Budget</a>
          <a href="#pilier">3<sup>e</sup> pilier</a>
          <a href="#etf">ETF</a>
          <a href="#actu">Newsletter</a>
        </nav>
        <div className="nav-right">
          <div className="search-pill">
            <Icon.Search />
            <span>Pilier 3a, ETF, AVS…</span>
            <span className="kbd" style={{marginLeft:'auto'}}>⌘ K</span>
          </div>
          <a className="btn btn-ghost" href="https://app-tirelire.netlify.app" target="_blank">Se connecter</a>
          <a className="btn btn-primary" href="https://app-tirelire.netlify.app" target="_blank">Essayer l'app <Icon.Arrow /></a>
        </div>
      </div>
    </header>
  );
}

// ============ Hero ============
const HEADLINES = {
  investir: { l1: "Trouve l'argent", l2: <>pour commencer à <em>investir.</em></> },
};

function Hero({ headlineKey = "investir" }) {
  const h = HEADLINES[headlineKey] || HEADLINES.investir;
  return (
    <section className="hero">
      <div className="container">
        <span className="hero-tag">
          <span className="swiss-cross"></span>
          Tirelire.ch · Suisse · Gratuit
        </span>

        <h1 className="hero-display">
          {h.l1}<br/>
          {h.l2}
        </h1>

        <div className="hero-bottom">
          <div>
            <p className="hero-lede">
              La vraie raison pour laquelle tu n'investis pas encore, c'est que
              tu ne sais pas combien tu peux mettre de côté. L'app calcule ta
              capacité d'investissement. Le site explique comment l'utiliser.
            </p>
            <div className="hero-ctas">
              <a className="btn btn-primary btn-lg" href="https://app-tirelire.netlify.app" target="_blank">Essayer l'app <Icon.Arrow /></a>
              <a className="btn btn-secondary btn-lg" href="#budget">Comment ça marche <Icon.Arrow /></a>
            </div>
          </div>

          <div className="hero-right">
            <div className="issue-card">
              <div className="issue-card-row">
                <span>Dossier du mois</span>
                <span>04 / 2026</span>
              </div>
              <div className="issue-card-num">7 056<sup>CHF</sup></div>
              <div className="issue-card-label">
                Plafond pilier 3a salarié — 2026. Cotise avant le 31 décembre pour déduire fiscalement.
              </div>
              <div className="issue-card-foot">
                <span>Économie d'impôt moyenne</span>
                <strong>~ 1 800 CHF</strong>
              </div>
            </div>

            <div className="stat-card">
              <div>
                <div className="chip is-green" style={{marginBottom:8}}>ETF · SPI</div>
                <div className="stat-card-label">Performance lissée d'un ETF Suisse sur 10 ans</div>
              </div>
              <div className="stat-card-value">6,4<span style={{fontSize:18, color:'var(--ink-3)'}}>%</span></div>
            </div>
          </div>
        </div>
      </div>

      <div className="alp-deco" style={{color:'var(--ink-3)'}}>
        <Icon.Mountain />
      </div>
    </section>
  );
}

// ============ Strip ============
function Strip() {
  return (
    <div className="strip">
      <div className="container">
        <div className="strip-inner">
          <div className="strip-item">Trois sujets, un magazine</div>
          <div className="strip-dot"></div>
          <div className="strip-item"><strong>01 ·</strong> Budget perso</div>
          <div className="strip-dot"></div>
          <div className="strip-item"><strong>02 ·</strong> 3<sup>e</sup> pilier</div>
          <div className="strip-dot"></div>
          <div className="strip-item"><strong>03 ·</strong> ETF & intérêts composés</div>
          <div className="strip-dot"></div>
          <div className="strip-item">Édition Suisse — sans cookies, sans pub déguisée</div>
        </div>
      </div>
    </div>
  );
}

// ============ Sommaire (3 piliers) ============
function Guides() {
  const guides = [
    {
      num: "§ 01",
      tag: "Budget perso",
      icon: <Icon.Wallet />,
      title: <>La méthode qui tient <em>vraiment</em> le mois.</>,
      desc: "Loyer genevois, LAMal, acomptes d'impôt, AVS — on adapte la règle 50/30/20 à ta réalité suisse.",
      kicker: "Disponible · Gratuit",
      anchor: "#budget",
    },
    {
      num: "§ 02",
      tag: "Prévoyance",
      icon: <Icon.Pig />,
      title: <>Pourquoi ouvrir un 3<sup>e</sup> pilier <em>aujourd'hui.</em></>,
      desc: "Une déduction fiscale qui te suit toute ta vie. Plus tu commences tôt, plus l'effet boule de neige t'avantage.",
      kicker: "Calculatrice incluse",
      anchor: "#pilier",
      accent: true,
    },
    {
      num: "§ 03",
      tag: "Investir",
      icon: <Icon.Chart />,
      title: <>Les ETF, et la <em>magie</em> des intérêts composés.</>,
      desc: "200 CHF par mois, pendant 30 ans, à 6 % par an. La calculatrice te dit ce que ça devient — avec et sans intérêts.",
      kicker: "Calcule en direct",
      anchor: "#etf",
    },
  ];
  return (
    <section className="section" id="sommaire">
      <div className="container">
        <div className="section-head">
          <span className="section-kicker">Le sommaire</span>
          <h2 className="section-title">Trois sujets, <em>une méthode.</em></h2>
          <a className="section-link">Tout lire <Icon.Arrow /></a>
        </div>
        <div className="guides guides-3">
          {guides.map((g, i) => (
            <a key={i} href={g.anchor} className={"guide" + (g.accent ? " is-accent" : "")}>
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <span className="guide-num">{g.num}</span>
                <span className="guide-tag">{g.tag}</span>
              </div>
              <div className="guide-icon">{g.icon}</div>
              <h3 className="guide-title">{g.title}</h3>
              <p className="guide-desc">{g.desc}</p>
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', fontSize:13, color:'var(--ink-3)'}}>
                <span>{g.kicker}</span>
                <Icon.Arrow />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ Modal liste d'attente expert ============
function ExpertModal({ open, onClose }) {
  const [sent, setSent] = React.useState(false);
  if (!open) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        {!sent ? (
          <>
            <span className="chip">30 min · gratuit</span>
            <h3>Rejoins la liste d'attente</h3>
            <p>Un conseiller indépendant suisse te contacte pour débroussailler ton budget. Remplis ce court formulaire pour réserver ta place.</p>
            <form onSubmit={e => { e.preventDefault(); setSent(true); }}>
              <label>Prénom</label>
              <input type="text" placeholder="Marie" required />
              <label>Email</label>
              <input type="email" placeholder="marie@email.ch" required />
              <label>Décris ta situation en 2 phrases</label>
              <textarea rows={3} placeholder="Ex : je gagne CHF 5 000/mois et je ne sais pas combien je peux mettre de côté pour investir." required />
              <button type="submit" className="btn btn-primary" style={{width:'100%', marginTop:12}}>
                M'inscrire sur la liste <Icon.Arrow />
              </button>
            </form>
          </>
        ) : (
          <div className="modal-confirm">
            <div className="modal-check"><Icon.Check /></div>
            <h3>Tu es sur la liste !</h3>
            <p>On te contacte dans les 48h pour fixer un créneau. Merci pour ta confiance.</p>
            <button className="btn btn-secondary" onClick={onClose} style={{marginTop:16}}>Fermer</button>
          </div>
        )}
      </div>
    </div>
  );
}

// ============ Section Budget — app + expert ============
function BudgetSection() {
  const [expertOpen, setExpertOpen] = React.useState(false);
  return (
    <>
    <section className="section" id="budget">
      <div className="container">
        <div className="section-head">
          <span className="section-kicker">§ 01 — Budget perso</span>
          <h2 className="section-title">Sache <em>où part</em> chaque franc.</h2>
          <span className="section-link" style={{color:'var(--ink-3)'}}>Avant tout le reste</span>
        </div>

        <div className="budget">
          <div className="budget-text">
            <p className="budget-lede">
              Pas d'investissement, pas de pilier 3a, pas de paix financière sans
              un budget qui tient le mois. La bonne nouvelle&nbsp;: en Suisse, ce
              n'est pas si compliqué — quand on a la bonne grille.
            </p>

            <ul className="budget-points">
              <li>
                <span className="bp-num">01</span>
                <div>
                  <strong>Renseigne ton revenu mensuel.</strong>
                  <span>Salaire net, rentes, revenus annexes — ce que tu reçois chaque mois.</span>
                </div>
              </li>
              <li>
                <span className="bp-num">02</span>
                <div>
                  <strong>Note toutes tes dépenses.</strong>
                  <span>Loyer, LAMal, courses, transports, loisirs — tout ce qui sort du compte.</span>
                </div>
              </li>
              <li>
                <span className="bp-num">03</span>
                <div>
                  <strong>Découvre ce que tu peux investir.</strong>
                  <span>L'app calcule ta capacité d'investissement réelle, mois après mois.</span>
                </div>
              </li>
            </ul>

            <div className="budget-actions">
              <div className="action-card is-primary">
                <div className="action-head">
                  <span className="chip is-green">Disponible · gratuit</span>
                  <h4>L'app Tirelire <em>est là.</em></h4>
                </div>
                <p>Découvre combien tu peux investir chaque mois. Saisis tes revenus et dépenses, l'app calcule ta capacité d'investissement en temps réel.</p>
                <a className="btn btn-primary" href="https://app-tirelire.netlify.app" target="_blank">Essayer l'app gratuitement <Icon.Arrow /></a>
              </div>
              <div className="action-card">
                <div className="action-head">
                  <span className="chip">30 min · gratuit</span>
                  <h4>Ou parle à un <em>expert.</em></h4>
                </div>
                <p>Rendez-vous visio avec un conseiller indépendant suisse. On débroussaille ton budget ensemble, sans vente déguisée.</p>
                <button className="btn btn-secondary" onClick={() => setExpertOpen(true)}>Rejoindre la liste d'attente <Icon.Arrow /></button>
              </div>
            </div>
          </div>

          <div className="budget-phone-wrap">
            <div className="phone-big">
              <div className="phone-big-screen">
                <div className="phone-status" style={{padding:'14px 22px 0', fontSize:12}}>
                  <span>9:41</span>
                  <span>● ● ●</span>
                </div>
                <div style={{padding:'18px 22px 14px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                  <div className="logo" style={{fontSize:14}}>
                    <span className="logo-mark" style={{width:26, height:26, borderRadius:8}}></span>
                    <span>Tirelire<span className="logo-suffix">.ch</span></span>
                  </div>
                  <span style={{fontSize:11, color:'var(--ink-3)'}}>Mai 2026</span>
                </div>

                <div style={{padding:'0 22px'}}>
                  <span style={{fontSize:11, color:'var(--ink-3)', letterSpacing:'0.06em', textTransform:'uppercase', fontWeight:600}}>Reste à dépenser</span>
                  <div style={{display:'flex', alignItems:'baseline', gap:8, marginTop:6}}>
                    <span style={{fontFamily:'var(--font-serif)', fontStyle:'italic', fontSize:54, lineHeight:1, color:'var(--ink)'}}>1 248</span>
                    <span style={{fontSize:14, color:'var(--ink-3)'}}>CHF</span>
                    <span className="chip is-green" style={{marginLeft:'auto', fontSize:10.5, padding:'3px 9px'}}>+ 86 CHF vs avr.</span>
                  </div>
                  <div style={{height:8, background:'var(--bg-2)', borderRadius:999, marginTop:14, overflow:'hidden', position:'relative'}}>
                    <div style={{position:'absolute', inset:'0 auto 0 0', width:'64%', background:'var(--primary)', borderRadius:999}}></div>
                  </div>
                  <div style={{display:'flex', justifyContent:'space-between', fontSize:10.5, color:'var(--ink-3)', marginTop:6}}>
                    <span>2 252 / 3 500 CHF</span>
                    <span>17 jours restants</span>
                  </div>
                </div>

                <div style={{padding:'24px 22px 16px'}}>
                  <span style={{fontSize:11, color:'var(--ink-3)', letterSpacing:'0.06em', textTransform:'uppercase', fontWeight:600}}>Cette semaine</span>
                </div>

                <div style={{padding:'0 12px', display:'flex', flexDirection:'column', gap:6}}>
                  {[
                    { name: "Coop Pronto", cat: "Courses", amt: "-42.30", icon: "🛒" },
                    { name: "CFF", cat: "Transports", amt: "-128.00", icon: "🚆" },
                    { name: "Migros", cat: "Courses", amt: "-87.15", icon: "🛒" },
                    { name: "Salaire", cat: "Revenu", amt: "+5 800.00", icon: "💼", positive: true },
                    { name: "LAMal", cat: "Fixe", amt: "-412.00", icon: "🏥" },
                  ].map((t, i) => (
                    <div key={i} style={{display:'flex', alignItems:'center', gap:10, padding:'9px 10px', borderRadius:10, background: i === 3 ? 'var(--primary-soft)' : 'transparent'}}>
                      <span style={{width:32, height:32, borderRadius:8, background:'var(--bg-2)', display:'grid', placeItems:'center', fontSize:14}}>{t.icon}</span>
                      <div style={{flex:1, display:'flex', flexDirection:'column'}}>
                        <span style={{fontSize:12.5, fontWeight:600, color:'var(--ink)'}}>{t.name}</span>
                        <span style={{fontSize:10.5, color:'var(--ink-3)'}}>{t.cat}</span>
                      </div>
                      <span style={{fontSize:13, fontWeight:600, fontVariantNumeric:'tabular-nums', color: t.positive ? 'var(--primary-deep)' : 'var(--ink)'}}>{t.amt}</span>
                    </div>
                  ))}
                </div>

                <div style={{position:'absolute', bottom:14, left:14, right:14, padding:'12px 16px', background:'var(--ink)', color:'var(--bg)', borderRadius:14, display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                  <div>
                    <div style={{fontSize:10.5, opacity:0.7, letterSpacing:'0.06em', textTransform:'uppercase'}}>Acompte impôt · 31 juill.</div>
                    <div style={{fontSize:14, fontWeight:600, marginTop:2}}>Prévoir 1 240 CHF</div>
                  </div>
                  <span style={{fontSize:11, color:'var(--accent)', fontWeight:600}}>78 j</span>
                </div>
              </div>
            </div>

            <div className="phone-badge">
              <span className="chip is-green">En ligne · v3</span>
              <p>Version disponible gratuitement sur app-tirelire.netlify.app</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ExpertModal open={expertOpen} onClose={() => setExpertOpen(false)} />
    </>
  );
}

// ============ Section 3e pilier — calc + parrainage ============
function PilierSection() {
  const [income, setIncome] = useState(82000);
  const [rate, setRate] = useState(26);
  const [age, setAge] = useState(28);
  const cotisation = 7056;
  const econ = Math.round(cotisation * rate / 100);
  const net = cotisation - econ;
  const yearsToRetire = Math.max(0, 65 - age);
  const totalEcon = econ * yearsToRetire;

  return (
    <section className="section" id="pilier">
      <div className="container">
        <div className="section-head">
          <span className="section-kicker">§ 02 — Prévoyance</span>
          <h2 className="section-title">Le 3<sup style={{fontSize:'0.55em', verticalAlign:'super'}}>e</sup> pilier&nbsp;: <em>le rendez-vous</em> annuel le plus rentable.</h2>
        </div>

        <p className="pilier-lede">
          Chaque année où tu cotises, c'est une déduction sur ton revenu
          imposable, une économie d'impôt immédiate, et un capital qui dort
          pour ta retraite. Plus tôt tu commences, plus la différence est massive.
        </p>

        <div className="calc">
          <div className="calc-card">
            <div className="calc-row">
              <label className="calc-label">Revenu imposable annuel</label>
              <div className="calc-input">
                <input
                  type="text"
                  value={income.toLocaleString('fr-CH').replace(/,/g,' ')}
                  onChange={e => {
                    const v = parseInt(e.target.value.replace(/\D/g,'')) || 0;
                    setIncome(v);
                  }}
                />
                <span>CHF</span>
              </div>
            </div>

            <div className="calc-row">
              <label className="calc-label">Taux marginal d'imposition estimé</label>
              <div className="calc-slider-row">
                <div className="calc-slider" onClick={(e) => {
                  const r = e.currentTarget.getBoundingClientRect();
                  const x = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width));
                  setRate(Math.round(10 + x * 40));
                }}>
                  <div className="calc-slider-fill" style={{width: ((rate-10)/40*100) + '%'}}></div>
                  <div className="calc-slider-thumb" style={{left: ((rate-10)/40*100) + '%'}}></div>
                </div>
                <span className="calc-slider-value">{rate}&nbsp;%</span>
              </div>
              <div style={{fontSize:12.5, color:'var(--ink-3)', display:'flex', justifyContent:'space-between'}}>
                <span>10 %</span><span>30 %</span><span>50 %</span>
              </div>
            </div>

            <div className="calc-row">
              <label className="calc-label">Ton âge aujourd'hui</label>
              <div className="calc-slider-row">
                <div className="calc-slider" onClick={(e) => {
                  const r = e.currentTarget.getBoundingClientRect();
                  const x = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width));
                  setAge(Math.round(20 + x * 45));
                }}>
                  <div className="calc-slider-fill" style={{width: ((age-20)/45*100) + '%'}}></div>
                  <div className="calc-slider-thumb" style={{left: ((age-20)/45*100) + '%'}}></div>
                </div>
                <span className="calc-slider-value">{age}&nbsp;ans</span>
              </div>
              <div style={{fontSize:12.5, color:'var(--ink-3)', display:'flex', justifyContent:'space-between'}}>
                <span>20</span><span>40</span><span>65</span>
              </div>
            </div>

            <div style={{display:'flex', gap:8, flexWrap:'wrap'}}>
              <span className="chip is-green">Plafond 2026 · 7 056 CHF</span>
              <span className="chip">Retrait dès 60 ans</span>
              <span className="chip is-warm">Étalable sur 5 comptes</span>
            </div>
          </div>

          <div className="calc-card is-result">
            <span className="calc-label">Économie d'impôt · cette année</span>
            <div className="calc-result-num">{econ.toLocaleString('fr-CH').replace(/,/g,' ')}<sup>CHF</sup></div>
            <p style={{fontSize:15, lineHeight:1.5, margin:0, opacity:0.85, maxWidth:'38ch'}}>
              Et si tu cotises chaque année jusqu'à 65 ans, c'est <strong style={{opacity:1}}>{totalEcon.toLocaleString('fr-CH').replace(/,/g,' ')}&nbsp;CHF</strong> d'impôt en moins, <em style={{fontFamily:'var(--font-serif)', fontStyle:'italic'}}>cumulé</em>.
            </p>

            <div className="calc-result-split">
              <div className="calc-split-row">
                <div className="num">{net.toLocaleString('fr-CH').replace(/,/g,' ')}</div>
                <div className="lbl">Coût net réel d'une cotisation</div>
              </div>
              <div className="calc-split-row">
                <div className="num">×&nbsp;{yearsToRetire}</div>
                <div className="lbl">Années de cotisation possibles</div>
              </div>
            </div>

            <a className="btn btn-accent btn-lg" href="https://viac.ch" target="_blank" rel="noopener noreferrer" style={{marginTop:12, alignSelf:'flex-start'}}>Ouvrir un 3a en 4 min <Icon.Arrow /></a>
          </div>
        </div>

      </div>
    </section>
  );
}

// ============ Section ETF — compound interest ============
function ETFSection() {
  const [monthly, setMonthly] = useState(300);
  const [years, setYears] = useState(30);
  const [returnRate, setReturnRate] = useState(6);

  const months = years * 12;
  const r = returnRate / 100 / 12;
  const fv = r === 0 ? monthly * months : monthly * (Math.pow(1 + r, months) - 1) / r;
  const principal = monthly * months;
  const interest = Math.max(0, fv - principal);

  // Build series for chart
  const points = useMemo(() => {
    const pts = [];
    for (let y = 0; y <= years; y++) {
      const m = y * 12;
      const v = r === 0 ? monthly * m : monthly * (Math.pow(1 + r, m) - 1) / r;
      pts.push({ y, principal: monthly * m, total: v });
    }
    return pts;
  }, [monthly, years, returnRate]);

  const maxV = points[points.length - 1].total || 1;
  const w = 700, h = 240, padL = 0, padR = 0, padT = 10, padB = 22;
  const ix = (i) => padL + (i / (points.length - 1)) * (w - padL - padR);
  const iy = (v) => padT + (1 - v / maxV) * (h - padT - padB);

  const totalArea = "M" + points.map((p, i) => `${ix(i)} ${iy(p.total)}`).join(" L ") + ` L ${ix(points.length-1)} ${h-padB} L ${ix(0)} ${h-padB} Z`;
  const principalArea = "M" + points.map((p, i) => `${ix(i)} ${iy(p.principal)}`).join(" L ") + ` L ${ix(points.length-1)} ${h-padB} L ${ix(0)} ${h-padB} Z`;
  const totalLine = "M" + points.map((p, i) => `${ix(i)} ${iy(p.total)}`).join(" L ");

  const fmt = (n) => Math.round(n).toLocaleString('fr-CH').replace(/,/g,' ');

  return (
    <section className="section" id="etf">
      <div className="container">
        <div className="section-head">
          <span className="section-kicker">§ 03 — Investir long terme</span>
          <h2 className="section-title">Les intérêts composés&nbsp;: <em>ton meilleur</em> collègue.</h2>
        </div>

        <p className="pilier-lede">
          Le temps fait 80&nbsp;% du travail. Un ETF mondial, des versements
          mensuels modestes, et la patience d'attendre 20 à 30 ans — c'est la
          formule la moins glamour, et de loin la plus efficace.
        </p>

        <div className="etf">
          <div className="etf-inputs">
            <div className="calc-row">
              <label className="calc-label">Versement mensuel</label>
              <div className="calc-slider-row">
                <div className="calc-slider" onClick={(e) => {
                  const r = e.currentTarget.getBoundingClientRect();
                  const x = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width));
                  setMonthly(Math.round(50 + x * 1450));
                }}>
                  <div className="calc-slider-fill" style={{width: ((monthly-50)/1450*100) + '%'}}></div>
                  <div className="calc-slider-thumb" style={{left: ((monthly-50)/1450*100) + '%'}}></div>
                </div>
                <span className="calc-slider-value">{fmt(monthly)}&nbsp;CHF</span>
              </div>
              <div style={{fontSize:12.5, color:'var(--ink-3)', display:'flex', justifyContent:'space-between'}}>
                <span>50</span><span>500</span><span>1 500</span>
              </div>
            </div>

            <div className="calc-row">
              <label className="calc-label">Durée</label>
              <div className="calc-slider-row">
                <div className="calc-slider" onClick={(e) => {
                  const r = e.currentTarget.getBoundingClientRect();
                  const x = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width));
                  setYears(Math.round(5 + x * 35));
                }}>
                  <div className="calc-slider-fill" style={{width: ((years-5)/35*100) + '%'}}></div>
                  <div className="calc-slider-thumb" style={{left: ((years-5)/35*100) + '%'}}></div>
                </div>
                <span className="calc-slider-value">{years}&nbsp;ans</span>
              </div>
              <div style={{fontSize:12.5, color:'var(--ink-3)', display:'flex', justifyContent:'space-between'}}>
                <span>5</span><span>20</span><span>40</span>
              </div>
            </div>

            <div className="calc-row">
              <label className="calc-label">Rendement annuel moyen attendu</label>
              <div className="calc-slider-row">
                <div className="calc-slider" onClick={(e) => {
                  const r = e.currentTarget.getBoundingClientRect();
                  const x = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width));
                  setReturnRate(Math.round((1 + x * 11) * 10) / 10);
                }}>
                  <div className="calc-slider-fill" style={{width: ((returnRate-1)/11*100) + '%'}}></div>
                  <div className="calc-slider-thumb" style={{left: ((returnRate-1)/11*100) + '%'}}></div>
                </div>
                <span className="calc-slider-value">{returnRate.toString().replace('.', ',')}&nbsp;%</span>
              </div>
              <div style={{fontSize:12.5, color:'var(--ink-3)', display:'flex', justifyContent:'space-between'}}>
                <span>1 %</span><span>6 %</span><span>12 %</span>
              </div>
            </div>

            <div style={{display:'flex', gap:8, flexWrap:'wrap', marginTop:4}}>
              <span className="chip is-green">Hypothèse MSCI World 30 ans</span>
              <span className="chip">Sans inflation</span>
              <span className="chip is-warm">Frais 0,2 % déjà déduits</span>
            </div>
          </div>

          <div className="etf-result">
            <div className="etf-result-head">
              <div>
                <span className="calc-label">Capital final estimé</span>
                <div className="etf-fv">{fmt(fv)}<sup>CHF</sup></div>
              </div>
              <div className="etf-split">
                <div>
                  <span className="etf-dot" style={{background:'var(--ink-2)'}}></span>
                  <div>
                    <div className="etf-split-num">{fmt(principal)}</div>
                    <div className="etf-split-lbl">Tes versements</div>
                  </div>
                </div>
                <div>
                  <span className="etf-dot" style={{background:'var(--primary)'}}></span>
                  <div>
                    <div className="etf-split-num">{fmt(interest)}</div>
                    <div className="etf-split-lbl">Intérêts composés</div>
                  </div>
                </div>
              </div>
            </div>

            <svg className="etf-chart" viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none">
              <defs>
                <linearGradient id="g-total" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.85"/>
                  <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.15"/>
                </linearGradient>
                <linearGradient id="g-principal" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--ink)" stopOpacity="0.5"/>
                  <stop offset="100%" stopColor="var(--ink)" stopOpacity="0.08"/>
                </linearGradient>
              </defs>
              {/* gridlines */}
              {[0.25, 0.5, 0.75].map((g, i) => (
                <line key={i} x1="0" x2={w} y1={padT + g*(h-padT-padB)} y2={padT + g*(h-padT-padB)} stroke="var(--line)" strokeDasharray="2 4" />
              ))}
              <path d={totalArea} fill="url(#g-total)" />
              <path d={principalArea} fill="url(#g-principal)" />
              <path d={totalLine} fill="none" stroke="var(--primary)" strokeWidth="2" />
              {/* x labels */}
              {[0, Math.floor(years/2), years].map((y, i) => (
                <text
                  key={i}
                  x={padL + (y/years) * (w - padL - padR)}
                  y={h - 4}
                  fill="var(--ink-3)"
                  fontSize="11"
                  fontFamily="var(--font-mono)"
                  textAnchor={i === 0 ? 'start' : i === 2 ? 'end' : 'middle'}
                >{y === 0 ? "aujourd'hui" : `+ ${y} ans`}</text>
              ))}
            </svg>

            <div className="etf-foot">
              <div>
                <strong>Effet boule de neige&nbsp;:</strong>
                <span> les intérêts représentent <strong style={{color:'var(--primary)'}}>{Math.round(interest/fv*100)}&nbsp;%</strong> du capital final.</span>
              </div>
              <a className="btn btn-primary" href="https://www.swissquote.ch" target="_blank" rel="noopener noreferrer">Ouvrir un plan ETF <Icon.Arrow /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// (Anciennes sections déplacées / remplacées ci-dessus)
// ============ Featured editorial ============
function Featured() {
  return (
    <section className="section" id="actu">
      <div className="container">
        <div className="section-head">
          <span className="section-kicker">§ 02 — Cette semaine</span>
          <h2 className="section-title">L'article <em>de la une.</em></h2>
          <a className="section-link">Numéro complet <Icon.Arrow /></a>
        </div>

        <div className="featured">
          <div className="featured-img is-tall">
            <div className="featured-img-placeholder"></div>
            <span className="featured-img-tag">Reportage</span>
            <span className="featured-img-label">photo · couverture · 1280×1600</span>
          </div>
          <div className="featured-text">
            <span className="featured-kicker">Dossier · 14 mai 2026 · 12 min</span>
            <h3 className="featured-title">
              Pilier 3a contre ETF&nbsp;: la question <em>qu'on se pose tous</em> à 28 ans.
            </h3>
            <p className="featured-lede">
              D'un côté, une déduction fiscale immédiate et confortable. De l'autre,
              la liquidité et l'exposition au monde entier. On a passé six semaines
              à faire le calcul sur trois profils suisses — étudiant, salarié,
              indépendante — pour voir lequel tient vraiment dans la durée.
            </p>
            <div className="featured-byline">
              <div className="featured-avatar">LM</div>
              <div className="featured-byline-text">
                <strong>Léa Marchand</strong>
                Rédactrice en chef · Lausanne
              </div>
              <a className="btn btn-secondary btn-sm" style={{marginLeft:'auto'}}>Lire <Icon.Arrow /></a>
            </div>

            <div className="featured-stats">
              <div>
                <div className="featured-stat-num">3<span>profils</span></div>
                <div className="featured-stat-label">comparés sur 30 ans, frais inclus</div>
              </div>
              <div>
                <div className="featured-stat-num">1 836<span>CHF</span></div>
                <div className="featured-stat-label">d'économie d'impôt annuelle moyenne, profil salarié ZH</div>
              </div>
              <div>
                <div className="featured-stat-num">+ 41<span>%</span></div>
                <div className="featured-stat-label">d'écart final entre pilier 3a en assurance et ETF tout-monde</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ Cantons table ============
function Cantons() {
  const rows = [
    { code: "Zg", name: "Zoug",      desc: "Capitale du faible impôt",      rate: 8.2,  pct: 30, band: "low" },
    { code: "Nw", name: "Nidwald",   desc: "Doux pour les revenus moyens",  rate: 9.6,  pct: 38, band: "low" },
    { code: "Sz", name: "Schwyz",    desc: "Forfait communal léger",        rate: 10.1, pct: 42, band: "low" },
    { code: "Zh", name: "Zurich",    desc: "Médiane suisse",                rate: 13.8, pct: 60, band: "mid" },
    { code: "Vd", name: "Vaud",      desc: "Progressif sur revenus hauts",  rate: 16.1, pct: 72, band: "mid" },
    { code: "Ge", name: "Genève",    desc: "Le plus progressif",            rate: 19.4, pct: 88, band: "high" },
    { code: "Ne", name: "Neuchâtel", desc: "Charges sociales élevées",      rate: 20.7, pct: 95, band: "high" },
  ];
  return (
    <section className="section" id="impots">
      <div className="container">
        <div className="section-head">
          <span className="section-kicker">§ 03 — Fiscalité</span>
          <h2 className="section-title">Vingt-six cantons, <em>vingt-six</em> additions.</h2>
          <a className="section-link">Notre simulateur <Icon.Arrow /></a>
        </div>

        <div className="cantons">
          <div className="cantons-intro">
            <p style={{fontSize:14, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--ink-3)', fontWeight:600, margin:0}}>Sur un revenu de 90 000 CHF</p>
            <h3 style={{fontSize:34, lineHeight:1.05, letterSpacing:'-0.02em', fontWeight:700, margin:'14px 0 0'}}>
              Le canton change la fin du mois. <em style={{fontFamily:'var(--font-serif)', fontStyle:'italic', fontWeight:400, color:'var(--primary)'}}>Beaucoup.</em>
            </h3>
            <p>
              Entre Zoug et Genève, l'écart d'impôt cantonal et communal pour un
              célibataire à 90 000 CHF avoisine les <strong style={{color:'var(--ink)'}}>10 000 CHF par an</strong>.
              On en parle sans nationalisme cantonal — promis.
            </p>
            <a className="btn btn-secondary btn-sm" style={{marginTop:18}}>Méthodologie <Icon.Arrow /></a>
          </div>

          <div className="cantons-table">
            <div className="cantons-row is-head">
              <span>CH</span>
              <span>Canton</span>
              <span>Charge fiscale</span>
              <span>Position</span>
              <span></span>
            </div>
            {rows.map((r) => (
              <div key={r.code} className="cantons-row">
                <span className="canton-flag">{r.code}</span>
                <span className="canton-name"><strong>{r.name}</strong><span>{r.desc}</span></span>
                <span className="canton-rate">{r.rate.toString().replace('.', ',')} %</span>
                <span className="canton-bar"><span style={{width: r.pct + '%'}}></span></span>
                <span className={"canton-badge is-" + r.band}>
                  {r.band === "low" ? "Doux" : r.band === "mid" ? "Moyen" : "Salé"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ Calculator ============
function Calculator() {
  const [income, setIncome] = useState(82000);
  const [rate, setRate] = useState(26);
  const cotisation = 7056;
  const econ = Math.round(cotisation * rate / 100);
  const net = cotisation - econ;

  return (
    <section className="section" id="calc">
      <div className="container">
        <div className="section-head">
          <span className="section-kicker">§ 04 — Calculatrice</span>
          <h2 className="section-title">Combien tu économises <em>vraiment</em> en cotisant au 3a&nbsp;?</h2>
          <a className="section-link">Toutes les calculatrices <Icon.Arrow /></a>
        </div>

        <div className="calc">
          <div className="calc-card">
            <div className="calc-row">
              <label className="calc-label">Revenu imposable annuel</label>
              <div className="calc-input">
                <input
                  type="text"
                  value={income.toLocaleString('fr-CH').replace(/,/g,' ')}
                  onChange={e => {
                    const v = parseInt(e.target.value.replace(/\D/g,'')) || 0;
                    setIncome(v);
                  }}
                />
                <span>CHF</span>
              </div>
            </div>

            <div className="calc-row">
              <label className="calc-label">Taux marginal d'imposition estimé</label>
              <div className="calc-slider-row">
                <div className="calc-slider" onClick={(e) => {
                  const r = e.currentTarget.getBoundingClientRect();
                  const x = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width));
                  setRate(Math.round(10 + x * 40));
                }}>
                  <div className="calc-slider-fill" style={{width: ((rate-10)/40*100) + '%'}}></div>
                  <div className="calc-slider-thumb" style={{left: ((rate-10)/40*100) + '%'}}></div>
                </div>
                <span className="calc-slider-value">{rate}&nbsp;%</span>
              </div>
              <div style={{fontSize:12.5, color:'var(--ink-3)', display:'flex', justifyContent:'space-between'}}>
                <span>10 %</span><span>30 %</span><span>50 %</span>
              </div>
            </div>

            <div className="calc-row">
              <label className="calc-label">Cotisation envisagée</label>
              <div className="calc-input">
                <input type="text" value="7 056" readOnly />
                <span>CHF · plafond salarié 2026</span>
              </div>
            </div>

            <div style={{display:'flex', gap:8, flexWrap:'wrap'}}>
              <span className="chip is-green">Imputable AVS · oui</span>
              <span className="chip">Retrait dès 60 ans</span>
              <span className="chip is-warm">Étalable sur 5 comptes</span>
            </div>
          </div>

          <div className="calc-card is-result">
            <span className="calc-label">Économie d'impôt estimée</span>
            <div className="calc-result-num">{econ.toLocaleString('fr-CH').replace(/,/g,' ')}<sup>CHF</sup></div>
            <p style={{fontSize:15, lineHeight:1.5, margin:0, opacity:0.85, maxWidth:'38ch'}}>
              C'est l'argent que tu récupères au moment de ta déclaration — pas demain, pas dans 30 ans. <em style={{fontFamily:'var(--font-serif)', fontStyle:'italic'}}>Maintenant.</em>
            </p>

            <div className="calc-result-split">
              <div className="calc-split-row">
                <div className="num">{net.toLocaleString('fr-CH').replace(/,/g,' ')}</div>
                <div className="lbl">Coût net réel de ta cotisation</div>
              </div>
              <div className="calc-split-row">
                <div className="num">×&nbsp;30</div>
                <div className="lbl">Si tu cotises chaque année jusqu'à 60 ans</div>
              </div>
            </div>

            <a className="btn btn-accent btn-lg" href="https://viac.ch" target="_blank" rel="noopener noreferrer" style={{marginTop:12, alignSelf:'flex-start'}}>Ouvrir un 3a en 4 min <Icon.Arrow /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ CTA ============
function CTA() {
  return (
    <section className="section" id="actu" style={{paddingTop:60}}>
      <div className="container">
        <div className="cta">
          <div>
            <span className="section-kicker" style={{color:'var(--primary)'}}>§ 04 — La newsletter</span>
            <span className="chip is-warm" style={{marginTop:12, display:'inline-block'}}>Bientôt disponible</span>
            <h2 className="cta-title" style={{marginTop:18}}>
              Un dimanche sur deux. Sept minutes. <em>Pas plus.</em>
            </h2>
            <p className="cta-lede">
              Un dossier suisse, une calculatrice, un graphique qui t'apprend
              quelque chose. Zéro promo, zéro affiliation déguisée, et on te
              désabonne en un clic.
            </p>
            <form className="cta-form" onSubmit={e => e.preventDefault()} style={{marginTop:28, maxWidth:520}}>
              <input type="email" placeholder="ton@email.ch" />
              <button className="btn btn-primary">Me notifier au lancement <Icon.Arrow /></button>
            </form>
            <div className="cta-bullets">
              <div className="cta-bullet"><Icon.Check /> Hébergement à Lausanne</div>
              <div className="cta-bullet"><Icon.Check /> En français · bientôt en DE</div>
            </div>
          </div>

          <div className="cta-deco">
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
              <span className="section-kicker" style={{margin:0}}>Vol. 04</span>
              <span className="chip is-green">À paraître</span>
            </div>
            <div>
              <div className="cta-deco-num">N°1</div>
              <div className="cta-deco-foot">
                <strong>Lancement prévu</strong>
                Automne 2026.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ Modal Confidentialité ============
function PrivacyModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" style={{maxWidth:560, maxHeight:'80vh', overflowY:'auto'}} onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <h3>Politique de confidentialité</h3>
        <p style={{fontSize:12, color:'var(--ink-3)', marginBottom:20}}>Dernière mise à jour : mai 2026</p>

        <p><strong>Responsable du traitement</strong><br/>
        Tirelire.ch — tirelire.ch@gmail.com — Suisse</p>

        <p><strong>Données collectées</strong><br/>
        Sur le site vitrine : adresse email si tu t'inscris à la newsletter ou remplis le formulaire de contact expert.<br/>
        Sur l'app (app-tirelire.netlify.app) : email, mot de passe (chiffré), données de budget saisies manuellement (revenus, dépenses, assurances).</p>

        <p><strong>Finalité</strong><br/>
        Les emails sont utilisés uniquement pour t'envoyer la newsletter ou te contacter suite à ta demande. Les données de l'app servent exclusivement à afficher ton tableau de bord personnel.</p>

        <p><strong>Hébergement et stockage</strong><br/>
        Site et app hébergés sur Netlify (USA — soumis aux clauses contractuelles types UE). Données de l'app stockées sur Supabase (EU). Aucune donnée n'est revendue à des tiers.</p>

        <p><strong>Cookies et tracking</strong><br/>
        Aucun cookie de tracking, aucune régie publicitaire, aucun outil d'analyse tiers.</p>

        <p><strong>Tes droits (nLPD suisse)</strong><br/>
        Tu peux à tout moment demander l'accès, la rectification ou la suppression de tes données en écrivant à tirelire.ch@gmail.com.</p>

        <button className="btn btn-secondary" onClick={onClose} style={{marginTop:8}}>Fermer</button>
      </div>
    </div>
  );
}

// ============ Modal Conditions ============
function ConditionsModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" style={{maxWidth:560, maxHeight:'80vh', overflowY:'auto'}} onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <h3>Conditions d'utilisation</h3>
        <p style={{fontSize:12, color:'var(--ink-3)', marginBottom:20}}>Dernière mise à jour : mai 2026</p>

        <p><strong>Service gratuit et sans garantie</strong><br/>
        Tirelire.ch est un service gratuit fourni sans garantie de disponibilité ou d'exactitude. Nous nous réservons le droit de modifier ou d'interrompre le service à tout moment.</p>

        <p><strong>Pas un conseil financier</strong><br/>
        Les contenus, calculatrices et simulations proposés sur ce site sont fournis à titre informatif et éducatif uniquement. Ils ne constituent pas des conseils financiers, fiscaux ou juridiques individuels. Avant toute décision d'investissement, consulte un conseiller agréé.</p>

        <p><strong>Précision des calculs</strong><br/>
        Les résultats des simulateurs (3e pilier, ETF, budget) sont des estimations basées sur des hypothèses simplifiées. Les rendements passés ne garantissent pas les rendements futurs.</p>

        <p><strong>Liens externes</strong><br/>
        Les liens vers des partenaires (VIAC, Swissquote, etc.) peuvent inclure des codes d'affiliation. Cela ne change pas le prix pour toi et nous permet de financer le service.</p>

        <p><strong>Droit applicable</strong><br/>
        Ces conditions sont soumises au droit suisse. Tout litige relève de la compétence des tribunaux du canton du Valais.</p>

        <button className="btn btn-secondary" onClick={onClose} style={{marginTop:8}}>Fermer</button>
      </div>
    </div>
  );
}

// ============ Footer ============
function Footer() {
  const [privacyOpen, setPrivacyOpen] = React.useState(false);
  const [conditionsOpen, setConditionsOpen] = React.useState(false);
  return (
    <>
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <a className="logo" style={{marginBottom:16}}>
              <img src="logo.png" alt="Tirelire.ch" style={{height:36, width:36, objectFit:'contain', borderRadius:8}} />
              <span>Tirelire<span className="logo-suffix">.ch</span></span>
            </a>
            <p style={{fontSize:14, color:'var(--ink-2)', lineHeight:1.5, maxWidth:'34ch', margin:'12px 0 0'}}>
              L'app qui trouve l'argent pour commencer à investir. Gratuit, sans pub, hébergé en Suisse.
            </p>
          </div>
          <div>
            <h4>Explorer</h4>
            <ul>
              <li><a href="#budget">Budget mensuel</a></li>
              <li><a href="#pilier">3e pilier</a></li>
              <li><a href="#etf">ETF & investissement</a></li>
              <li><a href="#actu">Newsletter</a></li>
              <li><a href="https://app-tirelire.netlify.app" target="_blank">Essayer l'app</a></li>
            </ul>
          </div>
          <div>
            <h4>Contact & légal</h4>
            <ul>
              <li><a href="mailto:tirelire.ch@gmail.com">tirelire.ch@gmail.com</a></li>
              <li><a style={{cursor:'pointer'}} onClick={() => setPrivacyOpen(true)}>Confidentialité</a></li>
              <li><a style={{cursor:'pointer'}} onClick={() => setConditionsOpen(true)}>Conditions</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-meta">
          <span>© 2026 Tirelire.ch — Lausanne, Suisse</span>
          <span>Pas un conseil financier individuel.</span>
        </div>
      </div>
    </footer>
    <PrivacyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    <ConditionsModal open={conditionsOpen} onClose={() => setConditionsOpen(false)} />
    </>
  );
}

Object.assign(window, { TopNav, Hero, Strip, Guides, Featured, Cantons, Calculator, CTA, Footer, Icon, BudgetSection, PilierSection, ETFSection });
