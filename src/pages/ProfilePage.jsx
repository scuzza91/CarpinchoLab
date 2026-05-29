import { Link, useParams } from 'react-router-dom';
import { getMemberBySlug } from '../data/members';
import SkillBar from '../components/profile/SkillBar';
import ProjectCarousel from '../components/profile/ProjectCarousel';
import { SocialLinks, TechStack } from '../components/profile/ProfileExtras';
import './ProfilePage.css';

export default function ProfilePage() {
  const { slug } = useParams();
  const member = getMemberBySlug(slug);

  if (!member) {
    return (
      <div className="card" style={{ padding: '2rem' }}>
        <h1>Perfil no encontrado</h1>
        <p>No existe un integrante con esa ruta.</p>
        <Link to="/" className="btn btn-primary">
          Volver al dashboard
        </Link>
      </div>
    );
  }

  return (
    <>
      <header className="page-header animate-in">
        <p className="badge">
          <i className="fa-solid fa-user" aria-hidden="true" /> Perfil profesional
        </p>
        <h1>{member.fullName}</h1>
        <p>{member.bio}</p>
      </header>

      <div className="profile-page">
        <div className="profile-page__avatar card">
          <img src={member.avatar} alt={`Foto de ${member.fullName}`} width={320} height={320} />
        </div>

        <article className="profile-page__sheet card">
          <p className="profile-page__meta">
            <i className="fa-solid fa-location-dot" aria-hidden="true" /> {member.city} · {member.age} años
          </p>

          <section className="profile-section" aria-labelledby="skills-heading">
            <h2 id="skills-heading">Habilidades</h2>
            {member.skills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </section>

          <section className="profile-section" aria-labelledby="projects-heading">
            <h2 id="projects-heading">Proyectos</h2>
            <ProjectCarousel projects={member.projects} />
          </section>

          <section className="profile-section" aria-labelledby="stack-heading">
            <h2 id="stack-heading">Tech stack</h2>
            <TechStack items={member.techStack} />
          </section>

          <section className="profile-section" aria-labelledby="social-heading">
            <h2 id="social-heading">Redes</h2>
            <SocialLinks links={member.social} />
          </section>

          <section className="profile-section" aria-labelledby="extra-heading">
            <h2 id="extra-heading">Intereses</h2>
            <p>{member.hobbies}</p>
            <h3>Películas favoritas</h3>
            <ul className="profile-tags">
              {member.movies.map((movie) => (
                <li key={movie}>{movie}</li>
              ))}
            </ul>
            <h3>Discos favoritos</h3>
            <ul className="profile-tags">
              {member.albums.map((album) => (
                <li key={album}>{album}</li>
              ))}
            </ul>
          </section>

          <a href={member.tp1Url} className="btn btn-primary" target="_blank" rel="noreferrer noopener">
            Ver TP1 individual
          </a>
        </article>
      </div>
    </>
  );
}
