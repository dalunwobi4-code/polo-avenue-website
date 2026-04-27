// Polo Avenue — shared atoms

const Placeholder = ({ tag, dim, light, style, className }) => (
  <div className={`placeholder ${light ? 'light' : ''} ${className || ''}`} style={style}>
    {tag && <span className="ph-tag">{tag}</span>}
    {dim && <span className="ph-dim">{dim}</span>}
  </div>
);

const Arrow = ({ size = 14 }) => (
  <svg className="arrow" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const ArrowDown = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 5v14M6 13l6 6 6-6" />
  </svg>
);

const Reveal = ({ children, delay = 0, mode = 'fade', className = '', as: Tag = 'div' }) => {
  const ref = React.useRef(null);
  const [seen, setSeen] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { setTimeout(() => setSeen(true), delay); io.unobserve(el); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -10% 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  const cls = mode === 'clip' ? 'reveal-clip' : 'reveal';
  return <Tag ref={ref} className={`${cls} ${seen ? 'in' : ''} ${className}`}>{children}</Tag>;
};

const SectionHead = ({ num, eyebrow, title, body, ctaLabel, ctaHref = '#', dark, accent }) => (
  <Reveal>
    <div className="section-head">
      <div className="lhs">
        <div className={`eyebrow ${dark ? 'eyebrow-light' : ''} ${accent ? 'eyebrow-gold' : ''}`}>
          {num && <span style={{ color: 'var(--gold)' }}>{num}</span>}{num && <span style={{ margin: '0 10px', opacity: 0.4 }}>—</span>}{eyebrow}
        </div>
        <h2 dangerouslySetInnerHTML={{ __html: title }} />
      </div>
      <div className="rhs">
        <p>{body}</p>
        {ctaLabel && (
          <div className="meta">
            <a className={`btn ${dark ? 'btn-ghost-light' : 'btn-ghost-dark'}`} href={ctaHref}>{ctaLabel}<Arrow /></a>
          </div>
        )}
      </div>
    </div>
  </Reveal>
);

Object.assign(window, { Placeholder, Arrow, ArrowDown, Reveal, SectionHead });
