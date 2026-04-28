// Polo Avenue — sections

const Nav = ({ scrolled, onMenuToggle, menuOpen }) => (
  <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
    <div className="left">
      <a href="#" className="logo">Polo Avenue<small>Lagos · since 2003</small></a>
    </div>
    <div className="links">
      <a href="#houses">Women</a>
      <a href="#houses">Men</a>
      <a href="#watches">Watches</a>
      <a href="#houses">Jewellery</a>
      <a href="#boutique">The Boutique</a>
      <a href="#gallery">Summer 2022</a>
      <a href="#contact">Contact</a>
    </div>
    <div className="right">
      <a href="#contact" className="btn btn-ghost-gold btn-nav">Book Appointment<Arrow /></a>
      <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={onMenuToggle}><span></span><span></span></div>
    </div>
  </nav>
);

const MobileMenu = ({ open, onClose }) => (
  <div className={`mobile-menu ${open ? 'open' : ''}`}>
    <a href="#houses" onClick={onClose}>Women</a>
    <a href="#houses" onClick={onClose}>Men</a>
    <a href="#watches" onClick={onClose}>Watches</a>
    <a href="#houses" onClick={onClose}>Jewellery</a>
    <a href="#boutique" onClick={onClose}>The Boutique</a>
    <a href="#gallery" onClick={onClose}>Gallery</a>
    <a href="#contact" onClick={onClose}>Contact</a>
    <div className="mm-foot">
      <span>166 Ozumba Mbadiwe</span>
      <span>Victoria Island, Lagos</span>
      <span>+234 908 826 8200</span>
    </div>
  </div>
);

const Hero = () => (
  <section className="hero" id="hero">
    <div className="hero-triptych">
      <div className="hero-pane"><video className="hero-video" src="videos/v1.mp4" autoPlay muted loop playsInline preload="auto" /></div>
      <div className="hero-pane"><video className="hero-video" src="videos/v2.mp4" autoPlay muted loop playsInline preload="auto" /></div>
      <div className="hero-pane"><video className="hero-video" src="videos/v3.mp4" autoPlay muted loop playsInline preload="auto" /></div>
    </div>
    <div className="hero-grad-mid"></div>
    <span className="hero-tag tl">N° 01 — Lagos</span>
    <span className="hero-tag tr">04 / 2026</span>

    <div className="hero-content">
      <h1 className="hero-wordmark">Polo Avenue</h1>
    </div>

    <div className="hero-bottom">
      <div className="eyebrow hero-eyebrow">Est. 2003 · Lagos · Authorized Luxury Retailer</div>
      <div className="hero-sub">Lagos's house of luxury, <em style={{ color: 'var(--gold)' }}>in residence</em> since 2003.</div>
      <p className="hero-body">Authorized retail for the world's most considered houses — at a single address on Ozumba Mbadiwe.</p>
      <div className="hero-ctas">
        <a className="btn btn-gold" href="#houses">Explore the Boutique<Arrow /></a>
        <a className="btn btn-ghost-light" href="#contact">Book a Private Appointment</a>
      </div>
    </div>

    <span className="hero-tag bl">Scroll</span>
    <span className="hero-tag br">Triptych — 9:16</span>
  </section>
);

const HOUSES = [
  { name: 'AMIRI',               cat: 'Maison · USA',       cls: 'col-7 tall', img: 'images/house-01-amiri.jpg' },
  { name: 'Bottega Veneta',      cat: 'Maison · Italy',     cls: 'col-5 tall', img: 'images/house-02-bottega.jpg' },
  { name: 'Saint Laurent',       cat: 'Maison · France',    cls: 'col-4 tall', img: 'images/house-03-saint-laurent.jpg' },
  { name: 'Dolce & Gabbana',     cat: 'Maison · Italy',     cls: 'col-4 tall', img: 'images/house-04-dolce-gabbana.jpg' },
  { name: 'Valentino',           cat: 'Maison · Italy',     cls: 'col-4 tall', img: 'images/house-05-valentino.jpg' },
  { name: 'Casablanca',          cat: 'Maison · France',    cls: 'col-6 wide', img: 'images/house-06-casablanca.jpg', objPos: 'center 18%' },
  { name: 'Camilla',             cat: 'Maison · Australia', cls: 'col-6 wide', img: 'images/house-07-camilla.jpg',    objPos: 'center 8%' },
  { name: 'Versace',             cat: 'Maison · Italy',     cls: 'col-4 tall', img: 'images/house-08-versace.jpg' },
  { name: 'Anna-Karin Karlsson', cat: 'Eyewear · Sweden',   cls: 'col-4 tall', img: 'images/house-09-akk.jpg' },
  { name: 'Aquazzura',           cat: 'Maison · Italy',     cls: 'col-4 tall', img: 'images/house-10-aquazzura.jpg' },
];

const HouseCard = ({ h, idx }) => (
  <Reveal delay={idx * 60} className={`house-card ${h.cls}`}>
    {h.img
      ? <img className="ph-cover house-img" src={h.img} alt={h.name} loading="lazy" style={h.objPos ? { objectPosition: h.objPos } : undefined} />
      : <Placeholder className="ph-cover" tag={h.tag} dim={h.name.toUpperCase()} />}
    <div className="house-thumbs">
      <Placeholder className="thumb" tag="01" />
      <Placeholder className="thumb" tag="02" />
      <Placeholder className="thumb" tag="03" />
    </div>
    <div className="meta">
      <span className="brand-mark">{h.cat}</span>
      <h3>{h.name}</h3>
      <span className="view">View pieces<Arrow /></span>
    </div>
  </Reveal>
);

const Houses = () => (
  <section id="houses">
    <SectionHead
      num="01"
      eyebrow="Featured Houses"
      title={`Houses we <em>carry</em>.`}
      body="Each brand stocked, served, and after-cared by Polo Avenue's certified team. Authorized — not parallel-import."
      ctaLabel="View all houses"
    />
    <div className="houses-grid">
      {HOUSES.map((h, i) => <HouseCard key={h.name} h={h} idx={i} />)}
    </div>
  </section>
);

const WATCHES = [
  { brand: 'Rolex',   piece: 'Datejust 41',       ref: 'Ref. 126334',           tag: 'OYSTERSTEEL'        },
  { brand: 'Cartier', piece: 'Pasha de Cartier',  ref: 'Diamonds · Rose Gold',  tag: 'PASHA',  img: 'images/watch-cartier.jpg' },
  { brand: 'Chopard', piece: 'L.U.C XPS',         ref: 'Ref. 161948',           tag: 'ROSE GOLD'          },
  { brand: 'Piaget',  piece: 'Polo Date',         ref: 'Ref. G0A41001',         tag: 'BLUE DIAL'          },
];

const Watches = () => (
  <section id="watches" className="watches-section">
    <SectionHead
      num="02"
      eyebrow="Watches"
      title={`Time, in the right <em>hands</em>.`}
      body="Authorized Rolex, Cartier, Chopard, Piaget, IWC, and Hublot. Service, sizing, and warranty handled in-house by Polo Avenue's certified watchmakers."
      ctaLabel="Book a watch appointment"
      ctaHref="#contact"
      dark
    />
    <div className="watches-grid">
      {WATCHES.map((w, i) => (
        <Reveal key={w.brand} delay={i * 80} className="watch-card">
          {w.img
            ? <img className="ph-cover watch-img" src={w.img} alt={`${w.brand} ${w.piece}`} loading="lazy" />
            : <Placeholder className="ph-cover" tag={w.tag} dim={w.brand.toUpperCase()} />}
          <div className="meta">
            <span className="num">0{i + 1} / Maison</span>
            <h4>{w.brand}</h4>
            <span className="ref">{w.piece} · {w.ref}</span>
          </div>
        </Reveal>
      ))}
    </div>
    <div className="watches-cta">
      <span className="mono" style={{ color: 'rgba(250,247,242,0.55)' }}>Also: IWC · Hublot · Tudor · Tag Heuer · Longines</span>
      <a className="btn btn-ghost-gold" href="#contact">Speak with our watch specialist<Arrow /></a>
    </div>
  </section>
);

const Boutique = () => (
  <section id="boutique" className="boutique">
    <div className="bg"><img className="bg-img" src="images/boutique.png" alt="Polo Avenue, 166 Ozumba Mbadiwe, Victoria Island" loading="eager" /></div>
    <div className="content">
      <Reveal>
        <div className="eyebrow eyebrow-light"><span style={{ color: 'var(--gold)' }}>03</span><span style={{ margin: '0 10px', opacity: 0.4 }}>—</span>The Boutique</div>
        <h2 style={{ marginTop: 18 }}>Three floors. Twenty years.<br/>One <em>address</em>.</h2>
      </Reveal>
      <Reveal delay={140}>
        <p style={{ color: 'rgba(250,247,242,0.78)', fontSize: 16, lineHeight: 1.7, maxWidth: 460 }}>Visit us at 166 Ozumba Mbadiwe, Victoria Island. Private appointments by request — we'll close the floor for you.</p>
        <div className="info-grid">
          <div><div className="label">Address</div><div className="val">166 Ozumba Mbadiwe<br/>Victoria Island, Lagos</div></div>
          <div><div className="label">Hours</div><div className="val">Mon–Sat · 10:00–20:00<br/>Sun · By appointment</div></div>
          <div><div className="label">Telephone</div><div className="val">+234 908 826 8200<br/>+234 1 270 0234</div></div>
          <div><div className="label">Parking</div><div className="val">Valet on-site<br/>Secure underground</div></div>
        </div>
        <div style={{ marginTop: 32 }}>
          <a className="btn btn-gold" href="#contact">Schedule a visit<Arrow /></a>
        </div>
      </Reveal>
    </div>
  </section>
);

const Founder = () => (
  <section className="founder" id="founder">
    <div className="founder-grid">
      <Reveal mode="clip">
        <img className="portrait" src="images/jennifer.jpg" alt="Jennifer Obayuwana, Executive Director of Polo Avenue" loading="lazy" />
      </Reveal>
      <div className="copy">
        <Reveal>
          <div className="eyebrow"><span style={{ color: 'var(--gold-deep)' }}>04</span><span style={{ margin: '0 10px', opacity: 0.4 }}>—</span>The House</div>
          <h2>Polo Avenue, <em>since</em> 2003.</h2>
          <p className="lede">Led today by <strong>Jennifer Obayuwana</strong>, Executive Director — recognised in 2025 as MIPAD's Most Influential Luxury Personality of the Year.</p>
          <p>Two decades ago, fine pieces in Lagos meant a suitcase from Dubai or a parallel import with a printed receipt. The Obayuwana family built the alternative — house by house, contract by contract — until each maison signed Polo Avenue as their authorised point of presence.</p>
          <p>Today we are stocked, serviced and warrantied directly by the houses we carry. Our watchmakers, tailors and after-care team are certified by them. The pieces in our boutique are the same pieces shown in Milan, in Paris, in Geneva — sourced through the front door, not the side.</p>
          <div className="stats">
            <div className="stat"><div className="num">2003</div><div className="lbl">Founded · Lagos</div></div>
            <div className="stat"><div className="num">15+</div><div className="lbl">Authorized house partners</div></div>
            <div className="stat"><div className="num">3</div><div className="lbl">Floors · Lagos's largest curated luxury floor</div></div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

const Marquee = () => {
  const phrase = (
    <>
      <span>Polo Avenue</span><span className="dot">·</span>
    </>
  );
  return (
    <div className="marquee-section">
      <div className="track marquee">
        {Array.from({ length: 12 }).map((_, i) => <React.Fragment key={i}>{phrase}</React.Fragment>)}
      </div>
    </div>
  );
};

const GALLERY = [
  { img: 'images/summer-1.jpg', tag: 'SS22', dim: '1963 × 2560', cap: 'Bottega tide, runway frame.',           cls: 'g-tall' },
  { img: 'images/summer-2.jpg', tag: 'SS22', dim: '1963 × 2560', cap: 'Polka dots, prints, and a motorbike.',  cls: 'g-tall' },
  { img: 'images/summer-3.jpg', tag: 'SS22', dim: '1963 × 2560', cap: 'D&G monogram, with company.',           cls: 'g-tall' },
  { img: 'images/summer-4.jpg', tag: 'SS22', dim: '1963 × 2560', cap: 'A study in restraint.',                  cls: 'g-tall' },
  { img: 'images/summer-5.jpg', tag: 'SS22', dim: '1963 × 2560', cap: 'Tailoring, ascending.',                  cls: 'g-tall' },
];

const Gallery = () => (
  <section className="gallery" id="gallery">
    <SectionHead
      num="05"
      eyebrow="The Summer Collection"
      title={`Summer 2022, captured by <em>Daniel Obasi</em>.`}
      body="A sequel to the SS21 campaign. A meditation on the evolution of personal style — refracted through the maisons we carry, on the bodies of the city we live in."
      ctaLabel="Plan a visit"
      ctaHref="#contact"
    />
    <div className="gallery-grid">
      {GALLERY.map((g, i) => (
        <Reveal key={g.cap} delay={i * 70} className={`gallery-tile ${g.cls}`}>
          {g.img
            ? <img className="ph-cover gallery-img" src={g.img} alt={g.cap} loading="lazy" />
            : <Placeholder className="ph-cover" tag={g.tag} dim={g.dim} light={i % 3 === 1} />}
          <span className="g-cap"><span className="num">N° {String(i + 1).padStart(2, '0')}</span>{g.cap}</span>
        </Reveal>
      ))}
    </div>
  </section>
);

const CtaBanner = () => (
  <section className="cta-banner" id="contact">
    <Reveal>
      <div className="eyebrow eyebrow-light"><span style={{ color: 'var(--gold)' }}>06</span><span style={{ margin: '0 10px', opacity: 0.4 }}>—</span>An Invitation</div>
      <h2>Come see them <em>in person</em>.</h2>
      <p className="sub">Pieces this important deserve more than a screen.</p>
      <a className="btn btn-gold" href="mailto:concierge@poloavenue.com?subject=Private%20Appointment%20Request&body=Hello%20Polo%20Avenue%20concierge%2C%0A%0AI%27d%20like%20to%20book%20a%20private%20appointment.%20Please%20share%20available%20times.%0A%0AThanks%2C" style={{ padding: '20px 36px', fontSize: 12 }}>Book a Private Appointment<Arrow /></a>
      <div className="contacts">
        <a href="tel:+2349088268200">+234 908 826 8200</a>
        <a href="https://wa.me/2349088268200">WhatsApp · Concierge</a>
        <a href="mailto:concierge@poloavenue.com">concierge@poloavenue.com</a>
      </div>
    </Reveal>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <div className="footer-grid">
      <div className="brand">
        <div className="mark">Polo Avenue</div>
        <span className="small">Authorized Luxury Retail · Est. 2003</span>
        <p>166 Ozumba Mbadiwe<br/>Victoria Island, Lagos<br/>Nigeria</p>
        <p>Mon–Sat · 10:00–20:00<br/>Sun · By appointment</p>
      </div>
      <div>
        <h5>Houses</h5>
        <ul>
          <li><a href="#">Gucci</a></li>
          <li><a href="#">Bottega Veneta</a></li>
          <li><a href="#">Saint Laurent</a></li>
          <li><a href="#">Cartier</a></li>
          <li><a href="#">Rolex</a></li>
          <li><a href="#">Loro Piana</a></li>
        </ul>
      </div>
      <div>
        <h5>Categories</h5>
        <ul>
          <li><a href="#">Women</a></li>
          <li><a href="#">Men</a></li>
          <li><a href="#">Watches</a></li>
          <li><a href="#">Jewellery</a></li>
          <li><a href="#">Accessories</a></li>
        </ul>
      </div>
      <div>
        <h5>The Boutique</h5>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Founder</a></li>
          <li><a href="#">Gallery</a></li>
          <li><a href="#">Press</a></li>
        </ul>
      </div>
      <div className="newsletter">
        <h5>New arrivals, before public release.</h5>
        <p>Receive considered notes from our buyers — never more than once a fortnight.</p>
        <form className="field" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="email@address.com" />
          <button type="submit">Subscribe<span style={{ marginLeft: 8 }}>→</span></button>
        </form>
      </div>
    </div>
    <div className="footer-bottom">
      <span>© 2026 Polo Avenue · Lagos</span>
      <div style={{ display: 'flex', gap: 28 }}>
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="https://www.instagram.com/poloavenue" target="_blank" rel="noopener">Instagram</a>
      </div>
    </div>
  </footer>
);

const FloatingCtas = ({ pastHero }) => (
  <>
    <a className={`float-book btn btn-gold ${pastHero ? 'show' : ''}`} href="#contact">Book Appointment<Arrow /></a>
    <a className="float-whatsapp" href="https://wa.me/2349088268200" aria-label="WhatsApp">
      <svg viewBox="0 0 32 32"><path d="M16.003 3C9.374 3 4 8.373 4 15.001c0 2.385.694 4.601 1.892 6.467L4 28l6.71-1.83A12.01 12.01 0 0016.004 27c6.628 0 12.001-5.373 12.001-12 0-6.628-5.374-12-12.002-12zm0 21.832a9.83 9.83 0 01-5.013-1.367l-.36-.214-3.984 1.087 1.063-3.886-.234-.4a9.83 9.83 0 01-1.51-5.05c0-5.434 4.42-9.853 9.86-9.853 5.435 0 9.855 4.42 9.855 9.853 0 5.435-4.42 9.83-9.677 9.83zm5.408-7.36c-.295-.148-1.748-.863-2.018-.962-.27-.099-.467-.148-.664.148-.197.295-.762.962-.935 1.16-.172.197-.344.222-.639.074-.295-.148-1.247-.46-2.376-1.466-.879-.783-1.472-1.75-1.645-2.045-.172-.295-.018-.455.13-.602.133-.132.295-.345.443-.517.148-.172.197-.295.295-.492.099-.197.05-.37-.025-.517-.074-.148-.664-1.601-.91-2.193-.24-.575-.483-.497-.664-.506l-.566-.01a1.09 1.09 0 00-.787.37c-.27.295-1.034 1.01-1.034 2.464 0 1.454 1.058 2.86 1.205 3.058.148.197 2.082 3.18 5.043 4.46.706.305 1.256.487 1.685.624.708.225 1.353.193 1.864.117.569-.085 1.748-.715 1.995-1.405.246-.69.246-1.282.172-1.405-.074-.123-.27-.197-.566-.345z"/></svg>
    </a>
  </>
);

Object.assign(window, { Nav, MobileMenu, Hero, Houses, Watches, Boutique, Founder, Marquee, Gallery, CtaBanner, Footer, FloatingCtas });
