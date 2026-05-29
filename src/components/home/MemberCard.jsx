import { Link } from 'react-router-dom';
import './MemberCard.css';

export default function MemberCard({ member, animationDelay = 0 }) {
  return (
    <article
      className="member-card card animate-in"
      style={{ animationDelay: `${animationDelay}s` }}
    >
      <Link to={`/perfil/${member.slug}`} className="member-card__link">
        <div className="member-card__photo-wrap">
          <img
            className="member-card__photo"
            src={member.avatar}
            alt={`Avatar de ${member.fullName}`}
            width={320}
            height={320}
            loading="lazy"
          />
        </div>
        <div className="member-card__body">
          <h3>{member.fullName}</h3>
          <p className="member-card__role">{member.role}</p>
          <span className="member-card__cta">
            Ver perfil <i className="fa-solid fa-arrow-right" aria-hidden="true" />
          </span>
        </div>
      </Link>
    </article>
  );
}
