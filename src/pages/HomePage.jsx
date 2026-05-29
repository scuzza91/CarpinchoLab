import { members } from '../data/members';
import MemberCard from '../components/home/MemberCard';

export default function HomePage() {
  return (
    <>
      <header className="page-header animate-in">
        <p className="badge">
          <i className="fa-solid fa-gauge-high" aria-hidden="true" /> Dashboard · TP2 React
        </p>
        <h1>
          Carpincho<span style={{ color: 'var(--color-accent)' }}>Lab</span>
        </h1>
        <p>
          Panel central del equipo: acceso rápido a perfiles, explorador de datos locales, integración
          con API pública, galería interactiva y documentación del proceso de migración desde el TP1.
        </p>
      </header>

      <section aria-labelledby="team-grid-heading">
        <h2 id="team-grid-heading" className="animate-in stagger-1">
          Integrantes
        </h2>
        <div className="home-grid">
          {members.map((member, i) => (
            <MemberCard key={member.slug} member={member} animationDelay={0.08 * (i + 2)} />
          ))}
        </div>
      </section>
    </>
  );
}
