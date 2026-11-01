import { useState, type ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Linkedin, Youtube, ArrowUpRight } from 'lucide-react';
import { galleryImages } from '../data/content';

const logo = '/images/plant-green-inertia-logo.png';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const ambassador = location.pathname.startsWith('/ambassador');

  return (
    <header className="coe-main-header">
      <Link to="/" className="coe-main-brand">
        <img src={logo} alt="Plant Green Inertia" className="coe-main-logo" />
        <span>Circle <b>of</b> Excellence</span>
      </Link>
      <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
        {open ? <X /> : <Menu />}
      </button>
      <nav className={open ? 'nav-links open' : 'nav-links'}>
        <Link to="/" onClick={() => setOpen(false)}>Switch Section</Link>
        {ambassador ? (
          <Link className="nav-cta" to="/ambassador/login" onClick={() => setOpen(false)}>Ambassador Login</Link>
        ) : (
          <>
            <Link to="/internship#programs" onClick={() => setOpen(false)}>Programs</Link>
            <Link to="/internship#faq" onClick={() => setOpen(false)}>FAQ</Link>
            <Link className="nav-cta" to="/internship" onClick={() => setOpen(false)}>Explore Internships</Link>
          </>
        )}
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <div className="brand footer-brand">
            <img src={logo} alt="Plant Green Inertia" className="footer-logo" />
            <span>Circle Of Excellence</span>
          </div>
          <p>Learn · Test · Intern · Grow</p>
          <div className="socials">
            <a href="https://linkedin.com" aria-label="LinkedIn"><Linkedin /></a>
            <a href="https://instagram.com" aria-label="Instagram"><Instagram /></a>
            <a href="https://youtube.com" aria-label="YouTube"><Youtube /></a>
          </div>
        </div>
        <div>
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/internship">Internships</Link>
          <Link to="/ambassador">Campus Ambassador</Link>
          <a href="#faq">FAQ</a>
        </div>
        <div>
          <h4>Support</h4>
          <a href="mailto:hello@plantgreeninertia.com">Contact Us</a>
          <a href="#terms">Terms & Conditions</a>
          <a href="#privacy">Privacy Policy</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Circle Of Excellence. All rights reserved.</span>
        <span>Made for students who want more than a certificate.</span>
      </div>
    </footer>
  );
}

export function Gallery() {
  return (
    <div className="gallery-wrap">
      <div className="gallery-track">
        {[...galleryImages, ...galleryImages].map((src, i) => (
          <img key={i} src={src} alt={`Student event ${i % galleryImages.length + 1}`} loading="lazy" />
        ))}
      </div>
    </div>
  );
}

export function BenefitRows({ items }: { items: { number: string; title: string; description: string; icon: string; tone: 'cream' | 'mint' | 'green' }[] }) {
  return (
    <div className="benefit-list">
      {items.map((item, i) => (
        <section className={`benefit-row ${item.tone} ${i % 2 === 1 ? 'reverse' : ''}`} key={item.number}>
          <div className="benefit-number">{item.number}<i>—</i></div>
          <div className="benefit-orb"><span>{item.icon}</span></div>
          <div className="benefit-copy"><h2>{item.title}</h2><p>{item.description}</p></div>
        </section>
      ))}
    </div>
  );
}

export function SectionHeading({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <div className="section-heading">
      {eyebrow && <span className="eyebrow">↗ {eyebrow}</span>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export function ScrollTop() {
  const location = useLocation();
  useState(() => { window.scrollTo(0, 0); return 0; });
  return <span key={location.pathname} className="sr-only" />;
}

export function ButtonLink({ to, children, secondary = false }: { to: string; children: ReactNode; secondary?: boolean }) {
  return <Link className={`button ${secondary ? 'button-outline' : ''}`} to={to}>{children}<ArrowUpRight size={17} /></Link>;
}
