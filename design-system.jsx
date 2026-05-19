/* global React */
const { useState: useStateDS } = React;

function DesignSystem() {
  const colors = [
    { name: "Vert frais", hex: "#1E8E5C", role: "Primary · CTA, accents éditoriaux", color: "var(--primary)", light: false },
    { name: "Vert profond", hex: "#0F4A30", role: "Hover, titres en green-on-white", color: "var(--primary-deep)", light: false },
    { name: "Vert tendre", hex: "#E1F2E8", role: "Surfaces douces, badges", color: "var(--primary-soft)", light: true },
    { name: "Jaune Édito", hex: "#F2C035", role: "Accent chaud, étiquettes", color: "var(--accent)", light: false },
    { name: "Encre", hex: "#15181A", role: "Texte principal, boutons sombres", color: "var(--ink)", light: false },
    { name: "Encre douce", hex: "#4C524E", role: "Texte secondaire, lede", color: "var(--ink-2)", light: false },
    { name: "Papier", hex: "#FAFAF6", role: "Fond principal, tiède", color: "var(--bg)", light: true },
    { name: "Papier teinté", hex: "#F1EFE7", role: "Sections alternées", color: "var(--bg-2)", light: true },
  ];

  const cantonRows = [
    { code: "Vd", name: "Vaud", rate: "16,1 %" },
    { code: "Ge", name: "Genève", rate: "19,4 %" },
  ];

  return (
    <section className="ds">
      <div className="container">
        <div className="ds-head">
          <span className="ds-eyebrow">Le kit · système de design</span>
          <h2 className="ds-title">Tout l'<em>équipement</em> du magazine.</h2>
        </div>

        <div className="ds-grid">
          {/* Logo */}
          <div className="ds-card" style={{gridColumn:'span 6'}}>
            <h3>Identité</h3>
            <div className="logo-showcase">
              <div className="logo-tile is-light">
                <div className="logo">
                  <span className="logo-mark"></span>
                  <span>Tirelire<span className="logo-suffix">.ch</span></span>
                </div>
                <small>Logo / fond clair</small>
              </div>
              <div className="logo-tile is-dark">
                <div className="logo" style={{color:'#F3F1E8'}}>
                  <span className="logo-mark"></span>
                  <span>Tirelire<span className="logo-suffix" style={{color:'#777C76'}}>.ch</span></span>
                </div>
                <small>Logo / fond sombre</small>
              </div>
              <div className="logo-tile is-green">
                <div className="logo" style={{color:'#fff'}}>
                  <span className="logo-mark" style={{background:'white'}}>
                  </span>
                  <span>Tirelire<span className="logo-suffix" style={{color:'#A8D9BD'}}>.ch</span></span>
                </div>
                <small style={{color:'#C9EBD9'}}>Logo / fond vert</small>
              </div>
              <div className="logo-tile is-light is-mark" style={{alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
                <div style={{display:'flex', alignItems:'baseline', gap:8}}>
                  <span className="logo-mark" style={{width:56, height:56, borderRadius:14}}></span>
                </div>
                <small>Le mark seul · 56 px</small>
              </div>
            </div>
            <p style={{fontSize:13.5, color:'var(--ink-2)', lineHeight:1.5, marginTop:18}}>
              La tirelire est dessinée comme une croix suisse simplifiée : deux
              segments perpendiculaires dans un carré arrondi. Économique en
              pixels, reconnaissable à 16 px.
            </p>
          </div>

          {/* Colors */}
          <div className="ds-card" style={{gridColumn:'span 6'}}>
            <h3>Palette</h3>
            <div className="swatch-row">
              {colors.map(c => (
                <div key={c.name} className="swatch">
                  <div className={"swatch-block" + (c.light ? " is-light" : "")} style={{background:c.color, color: c.light ? 'var(--ink)' : 'rgba(255,255,255,0.85)'}}>
                  </div>
                  <div className="swatch-name">{c.name}</div>
                  <div className="swatch-hex">{c.hex}</div>
                  <div style={{fontSize:11.5, color:'var(--ink-3)', lineHeight:1.35, marginTop:2}}>{c.role}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Typography */}
          <div className="ds-card" style={{gridColumn:'span 8'}}>
            <h3>Typographie</h3>
            <div className="type-spec">
              <div className="type-row">
                <div className="type-meta">
                  <strong>Display</strong>
                  Plus Jakarta 700<br/>+ Instrument italic
                  <span style={{fontSize:10.5}}>96 / 100 · -0.04em</span>
                </div>
                <div className="type-sample t-display">Sans <em>jargon.</em></div>
              </div>
              <div className="type-row">
                <div className="type-meta">
                  <strong>Title</strong>
                  Plus Jakarta 600
                  <span style={{fontSize:10.5}}>28 / 32 · -0.02em</span>
                </div>
                <div className="type-sample t-title">Le 3<sup style={{fontSize:'0.6em'}}>e</sup> pilier, sans détour</div>
              </div>
              <div className="type-row">
                <div className="type-meta">
                  <strong>Lede</strong>
                  Plus Jakarta 400
                  <span style={{fontSize:10.5}}>18 / 25 · -0.01em</span>
                </div>
                <div className="type-sample t-lede">
                  On t'explique pourquoi cotiser change tout — sans te faire la leçon.
                </div>
              </div>
              <div className="type-row">
                <div className="type-meta">
                  <strong>Body</strong>
                  Plus Jakarta 400
                  <span style={{fontSize:10.5}}>15 / 24</span>
                </div>
                <div className="type-sample t-body">
                  En Suisse, le pilier 3a te permet de déduire jusqu'à 7 056 CHF de ton revenu imposable chaque année si tu es salarié·e. C'est l'un des rares avantages fiscaux qui te suit toute ta vie.
                </div>
              </div>
              <div className="type-row">
                <div className="type-meta">
                  <strong>Caption</strong>
                  Plus Jakarta 600
                  <span style={{fontSize:10.5}}>12 · 0.08em · uppercase</span>
                </div>
                <div className="type-sample t-caption">§ 03 — Fiscalité cantonale</div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="ds-card" style={{gridColumn:'span 4'}}>
            <h3>Boutons</h3>
            <div className="btn-stack">
              <a className="btn btn-primary btn-lg">Commencer <Icon.Arrow /></a>
              <a className="btn btn-primary">Lire l'article <Icon.Arrow /></a>
              <a className="btn btn-secondary">Méthodologie</a>
              <a className="btn btn-accent">Ouvrir un 3a</a>
              <a className="btn btn-ghost">Voir plus</a>
              <a className="btn btn-primary btn-sm">Lire <Icon.Arrow /></a>
            </div>
            <h3 style={{marginTop:28}}>Chips</h3>
            <div style={{display:'flex', flexWrap:'wrap', gap:8}}>
              <span className="chip is-green">Doux</span>
              <span className="chip is-warm">Moyen</span>
              <span className="chip">Default</span>
              <span className="chip is-green">ETF · SPI</span>
            </div>
          </div>

          {/* Card patterns */}
          <div className="ds-card" style={{gridColumn:'span 5'}}>
            <h3>Card éditoriale</h3>
            <div className="guide" style={{borderRadius:14, border:'1px solid var(--line)', minHeight:'auto'}}>
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <span className="guide-num">N° 02</span>
                <span className="guide-tag">Investir</span>
              </div>
              <div className="guide-icon"><Icon.Chart /></div>
              <h3 className="guide-title" style={{margin:0}}>Premier ETF en CHF, sans paniquer</h3>
              <p className="guide-desc">Le portefeuille tout-monde, le biais de change, et les frais.</p>
              <div style={{display:'flex', justifyContent:'space-between', fontSize:13, color:'var(--ink-3)'}}>
                <span>Lecture · 8 min</span>
                <Icon.Arrow />
              </div>
            </div>
          </div>

          {/* Stat card */}
          <div className="ds-card" style={{gridColumn:'span 7'}}>
            <h3>Card chiffre · éditorial data</h3>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:18}}>
              <div className="issue-card" style={{margin:0}}>
                <div className="issue-card-row">
                  <span>Plafond 2026</span>
                  <span>3<sup>e</sup> pilier A</span>
                </div>
                <div className="issue-card-num" style={{fontSize:72}}>7 056<sup style={{fontSize:16, top:14}}>CHF</sup></div>
                <div className="issue-card-foot">
                  <span>Économie d'impôt</span>
                  <strong>~ 1 800 CHF</strong>
                </div>
              </div>
              <div className="stat-card" style={{flexDirection:'column', alignItems:'flex-start', gap:16}}>
                <div className="chip is-green">SPI · 10 ans</div>
                <div className="stat-card-value" style={{fontSize:54}}>+ 6,4<span style={{fontSize:18, color:'var(--ink-3)'}}>%</span></div>
                <div className="stat-card-label">Performance annualisée d'un ETF Suisse, dividendes réinvestis.</div>
                <div className="minichart" style={{width:'100%'}}>
                  {[10,16,12,22,18,28,24,34,30,42,38,48].map((h, i) => (
                    <span key={i} className={i > 7 ? "is-on" : ""} style={{height: h + 'px'}}></span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile preview */}
          <div className="ds-card" style={{gridColumn:'span 7'}}>
            <h3>Navigation mobile</h3>
            <div className="mobile-row">
              {/* Phone 1: Home */}
              <div className="phone">
                <div className="phone-screen">
                  <div className="phone-status">
                    <span>9:41</span>
                    <span>● ● ●</span>
                  </div>
                  <div className="phone-nav-top">
                    <div className="logo" style={{fontSize:14}}>
                      <span className="logo-mark" style={{width:22, height:22, borderRadius:6}}></span>
                      <span>Tirelire<span className="logo-suffix">.ch</span></span>
                    </div>
                    <span className="icon-btn" style={{width:28, height:28}}>
                      <svg width="14" height="14" viewBox="0 0 16 16"><path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                    </span>
                  </div>
                  <div className="phone-content">
                    <div className="hero-tag" style={{fontSize:9, padding:'4px 8px', gap:6}}>
                      <span className="swiss-cross" style={{width:8, height:8}}></span>
                      Vol. 04 · Mai
                    </div>
                    <h4 style={{fontSize:24, lineHeight:0.95, letterSpacing:'-0.03em', margin:'14px 0 10px', fontWeight:700}}>
                      Tes finances,<br/>sans <em style={{fontFamily:'var(--font-serif)', fontStyle:'italic', fontWeight:400, color:'var(--primary)'}}>le jargon.</em>
                    </h4>
                    <p style={{fontSize:10.5, color:'var(--ink-2)', lineHeight:1.45, margin:'0 0 14px'}}>Le magazine qui décrypte le 3a, les ETF, et tes impôts.</p>
                    <div style={{display:'flex', flexDirection:'column', gap:6}}>
                      <span className="btn btn-primary btn-sm" style={{justifyContent:'center', fontSize:11, padding:'8px 10px'}}>Lire l'édition</span>
                      <span className="btn btn-secondary btn-sm" style={{justifyContent:'center', fontSize:11, padding:'8px 10px'}}>Calculatrices</span>
                    </div>

                    <div className="issue-card" style={{marginTop:12, padding:'12px 14px', borderRadius:12}}>
                      <div className="issue-card-row" style={{fontSize:9}}>
                        <span>Dossier</span><span>04/26</span>
                      </div>
                      <div className="issue-card-num" style={{fontSize:32, margin:'4px 0 0'}}>7 056<sup style={{fontSize:9, top:6}}>CHF</sup></div>
                      <div style={{fontSize:9.5, color:'var(--ink-2)', marginTop:4}}>Plafond 3a salarié 2026</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone 2: Menu */}
              <div className="phone">
                <div className="phone-screen" style={{background:'var(--ink)', color:'var(--bg)'}}>
                  <div className="phone-status" style={{color:'var(--bg)'}}>
                    <span>9:41</span><span>● ● ●</span>
                  </div>
                  <div className="phone-nav-top">
                    <div className="logo" style={{fontSize:14, color:'var(--bg)'}}>
                      <span className="logo-mark" style={{width:22, height:22, borderRadius:6, background:'var(--primary)'}}></span>
                      <span>Tirelire<span className="logo-suffix" style={{color:'#777C76'}}>.ch</span></span>
                    </div>
                    <span style={{fontSize:11, color:'var(--bg)'}}>Fermer ✕</span>
                  </div>
                  <div style={{padding:'16px 14px'}}>
                    <div style={{fontSize:10, letterSpacing:'0.1em', textTransform:'uppercase', color:'#9CA199', marginBottom:14}}>§ Menu</div>
                    {[
                      ["Guides", "12 dossiers"],
                      ["Impôts", "26 cantons"],
                      ["Calculatrices", "8 outils"],
                      ["Investir", "ETF & 3a"],
                      ["Actualités", "Cette semaine"],
                    ].map(([k, v], i) => (
                      <div key={i} style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'10px 0', borderBottom:'1px solid #ffffff14'}}>
                        <span style={{fontSize:18, fontWeight:600, letterSpacing:'-0.02em'}}>{k}</span>
                        <span style={{fontSize:10, color:'#9CA199'}}>{v}</span>
                      </div>
                    ))}
                    <div style={{marginTop:16, display:'flex', flexDirection:'column', gap:8}}>
                      <span style={{background:'var(--primary)', color:'#0B1410', borderRadius:999, padding:'10px 12px', fontSize:11, fontWeight:600, textAlign:'center'}}>Commencer</span>
                      <span style={{fontSize:11, color:'#9CA199', textAlign:'center'}}>Déjà membre&nbsp;? Se connecter</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone 3: Article */}
              <div className="phone">
                <div className="phone-screen">
                  <div className="phone-status">
                    <span>9:41</span><span>● ● ●</span>
                  </div>
                  <div style={{padding:'8px 14px', fontSize:10, color:'var(--ink-3)', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                    <span>← Retour</span>
                    <span>12 min</span>
                  </div>
                  <div style={{aspectRatio:'4/3', background:'var(--bg-2)', position:'relative', margin:'8px 14px', borderRadius:10, border:'1px solid var(--line)', overflow:'hidden'}}>
                    <div className="featured-img-placeholder"></div>
                    <span style={{position:'absolute', top:8, left:8, background:'var(--accent)', color:'#2A2200', fontSize:8, letterSpacing:'0.06em', textTransform:'uppercase', fontWeight:700, padding:'3px 6px', borderRadius:999}}>Dossier</span>
                  </div>
                  <div className="phone-content" style={{padding:'4px 14px'}}>
                    <span style={{fontSize:9.5, color:'var(--primary)', fontWeight:600, letterSpacing:'0.08em', textTransform:'uppercase'}}>14 Mai · Léa Marchand</span>
                    <h4 style={{fontSize:18, lineHeight:1.05, letterSpacing:'-0.02em', margin:'8px 0', fontWeight:700}}>
                      Pilier 3a <em style={{fontFamily:'var(--font-serif)', fontStyle:'italic', fontWeight:400, color:'var(--primary)'}}>contre</em> ETF&nbsp;: la question des 28 ans.
                    </h4>
                    <p style={{fontSize:10, color:'var(--ink-2)', lineHeight:1.5, margin:0}}>
                      D'un côté, une déduction fiscale immédiate. De l'autre, la
                      liquidité et le monde entier. On a fait le calcul.
                    </p>
                    <div style={{display:'flex', gap:6, marginTop:10}}>
                      <span className="chip is-green" style={{fontSize:8.5, padding:'2px 7px'}}>3 profils</span>
                      <span className="chip is-warm" style={{fontSize:8.5, padding:'2px 7px'}}>30 ans</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form + inputs */}
          <div className="ds-card" style={{gridColumn:'span 5'}}>
            <h3>Inputs & Formulaire</h3>
            <div style={{display:'flex', flexDirection:'column', gap:14}}>
              <div className="calc-row">
                <label className="calc-label">Email</label>
                <div className="calc-input" style={{fontSize:14}}>
                  <input type="email" defaultValue="lea@tirelire.ch" />
                </div>
              </div>
              <div className="calc-row">
                <label className="calc-label">Revenu</label>
                <div className="calc-input" style={{fontSize:14}}>
                  <input type="text" defaultValue="82 000" />
                  <span>CHF</span>
                </div>
              </div>
              <div className="calc-row">
                <label className="calc-label">Taux marginal</label>
                <div className="calc-slider-row">
                  <div className="calc-slider">
                    <div className="calc-slider-fill" style={{width:'42%'}}></div>
                    <div className="calc-slider-thumb" style={{left:'42%'}}></div>
                  </div>
                  <span className="calc-slider-value">26&nbsp;%</span>
                </div>
              </div>
              <form className="cta-form" style={{margin:0}} onSubmit={e => e.preventDefault()}>
                <input placeholder="ton@email.ch" />
                <button className="btn btn-primary btn-sm">S'abonner</button>
              </form>
            </div>
          </div>

          {/* Iconography & motifs */}
          <div className="ds-card" style={{gridColumn:'span 12'}}>
            <h3>Motifs & touches suisses</h3>
            <div style={{display:'grid', gridTemplateColumns:'repeat(6, 1fr)', gap:18, alignItems:'stretch'}}>
              <div style={{padding:24, background:'var(--bg-2)', borderRadius:14, display:'flex', flexDirection:'column', alignItems:'flex-start', gap:14}}>
                <div className="hero-tag" style={{background:'var(--surface)'}}>
                  <span className="swiss-cross"></span>
                  Édition Suisse
                </div>
                <small style={{fontFamily:'var(--font-mono)', fontSize:11, color:'var(--ink-3)'}}>Tag d'édition</small>
              </div>
              <div style={{padding:24, background:'var(--bg-2)', borderRadius:14, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-between', gap:14}}>
                <div style={{width:60, height:60, background:'#D52B1E', borderRadius:8, position:'relative', flexShrink:0}}>
                  <div style={{position:'absolute', left:'45%', top:'18%', width:'10%', height:'64%', background:'white', borderRadius:1}}></div>
                  <div style={{position:'absolute', top:'45%', left:'18%', height:'10%', width:'64%', background:'white', borderRadius:1}}></div>
                </div>
                <small style={{fontFamily:'var(--font-mono)', fontSize:11, color:'var(--ink-3)'}}>Croix CH</small>
              </div>
              <div style={{padding:24, background:'var(--bg-2)', borderRadius:14, display:'flex', flexDirection:'column', justifyContent:'center', gap:8}}>
                <div style={{fontFamily:'var(--font-serif)', fontStyle:'italic', fontSize:42, lineHeight:1, color:'var(--primary)'}}>§ 04</div>
                <small style={{fontFamily:'var(--font-mono)', fontSize:11, color:'var(--ink-3)'}}>Section · paragraphe</small>
              </div>
              <div style={{padding:24, background:'var(--bg-2)', borderRadius:14, display:'flex', flexDirection:'column', justifyContent:'center', gap:8}}>
                <div style={{fontFamily:'var(--font-serif)', fontStyle:'italic', fontSize:42, lineHeight:1}}>2 056<sup style={{fontFamily:'var(--font-sans)', fontStyle:'normal', fontSize:13, fontWeight:600, color:'var(--primary)', top:'-1.4em', position:'relative'}}>CHF</sup></div>
                <small style={{fontFamily:'var(--font-mono)', fontSize:11, color:'var(--ink-3)'}}>Chiffre + unité</small>
              </div>
              <div style={{padding:24, background:'var(--bg-2)', borderRadius:14, display:'flex', flexDirection:'column', justifyContent:'space-between', gap:8, minHeight:120, position:'relative', overflow:'hidden'}}>
                <small style={{fontFamily:'var(--font-mono)', fontSize:11, color:'var(--ink-3)'}}>Silhouette alpine</small>
                <div style={{position:'absolute', bottom:0, left:0, right:0, height:60, color:'var(--ink-3)', opacity:0.4}}>
                  <Icon.Mountain />
                </div>
              </div>
              <div style={{padding:24, background:'var(--bg-2)', borderRadius:14, display:'flex', flexDirection:'column', justifyContent:'center', gap:8}}>
                <div style={{display:'flex', alignItems:'center', gap:8}}>
                  <span style={{width:6, height:6, borderRadius:999, background:'var(--primary)'}}></span>
                  <span style={{fontSize:13, color:'var(--ink-2)'}}><strong style={{color:'var(--ink)'}}>34 218</strong> lecteurs</span>
                </div>
                <small style={{fontFamily:'var(--font-mono)', fontSize:11, color:'var(--ink-3)'}}>Live indicator</small>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

window.DesignSystem = DesignSystem;
