import { useState } from 'react';
import './ProjectCarousel.css';

export default function ProjectCarousel({ projects }) {
  const [index, setIndex] = useState(0);
  const total = projects.length;

  const go = (next) => {
    setIndex((next + total) % total);
  };

  return (
    <div className="project-carousel">
      <div className="project-carousel__viewport">
        <div
          className="project-carousel__track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {projects.map((project) => (
            <article key={project.title} className="project-carousel__slide">
              <img src={project.image} alt="" loading="lazy" />
              <div>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="project-carousel__controls">
        <button type="button" className="btn btn-ghost" onClick={() => go(index - 1)} aria-label="Proyecto anterior">
          <i className="fa-solid fa-chevron-left" aria-hidden="true" />
        </button>
        <div className="project-carousel__dots" role="tablist" aria-label="Proyectos">
          {projects.map((project, i) => (
            <button
              key={project.title}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={project.title}
              className={`project-carousel__dot${i === index ? ' project-carousel__dot--active' : ''}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
        <button type="button" className="btn btn-ghost" onClick={() => go(index + 1)} aria-label="Proyecto siguiente">
          <i className="fa-solid fa-chevron-right" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
