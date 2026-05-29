import './ProfileExtras.css';

export function TechStack({ items }) {
  return (
    <div className="tech-stack" aria-label="Stack tecnológico">
      {items.map((item) => (
        <div key={item.label} className="tech-stack__item" title={item.label}>
          <i className={item.icon} aria-hidden="true" />
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
}

export function SocialLinks({ links }) {
  return (
    <div className="social-links">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.url}
          className="social-links__btn"
          target="_blank"
          rel="noreferrer noopener"
        >
          <i className={link.icon} aria-hidden="true" />
          {link.label}
        </a>
      ))}
    </div>
  );
}
