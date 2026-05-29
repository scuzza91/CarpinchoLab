import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { members } from '../../data/members';
import './Sidebar.css';

const mainLinks = [
  { to: '/', label: 'Dashboard', icon: 'fa-solid fa-gauge-high', end: true },
  { to: '/explorador', label: 'Explorador JSON', icon: 'fa-solid fa-database' },
  { to: '/api', label: 'API externa', icon: 'fa-solid fa-cloud' },
  { to: '/galeria', label: 'Galería', icon: 'fa-solid fa-images' },
  { to: '/bitacora', label: 'Bitácora', icon: 'fa-solid fa-book' },
  { to: '/arbol-componentes', label: 'Árbol de componentes', icon: 'fa-solid fa-sitemap' },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <aside className="sidebar" aria-label="Navegación principal del dashboard">
      <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        <NavLink to="/" className="sidebar__brand" onClick={() => setOpen(false)}>
          <i className="fa-solid fa-layer-group" aria-hidden="true" />
          Carpincho<span>Lab</span>
        </NavLink>
        <button
          type="button"
          className="sidebar__toggle"
          aria-expanded={open}
          aria-controls="sidebar-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <i className={`fa-solid ${open ? 'fa-xmark' : 'fa-bars'}`} aria-hidden="true" />
          <span className="sr-only">Menú</span>
        </button>
      </div>

      <nav
        id="sidebar-nav"
        className={`sidebar__nav${open ? ' sidebar__nav--open' : ''}`}
      >
        <div className="sidebar__section">
          <p className="sidebar__section-title">Principal</p>
          {mainLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `sidebar__link${isActive ? ' sidebar__link--active' : ''}`
              }
              onClick={() => setOpen(false)}
            >
              <i className={link.icon} aria-hidden="true" />
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="sidebar__section">
          <p className="sidebar__section-title">Equipo</p>
          {members.map((member) => (
            <NavLink
              key={member.slug}
              to={`/perfil/${member.slug}`}
              className={({ isActive }) =>
                `sidebar__link sidebar__link--child${isActive ? ' sidebar__link--active' : ''}`
              }
              onClick={() => setOpen(false)}
            >
              <i className="fa-solid fa-user" aria-hidden="true" />
              {member.shortName}
            </NavLink>
          ))}
        </div>
      </nav>

      <div className="sidebar__footer">TP2 · React · CarpinchoLab</div>
    </aside>
  );
}
