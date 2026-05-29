import './ComponentTreePage.css';

const tree = `App (BrowserRouter en main.jsx)
└── Routes
    └── DashboardLayout
        ├── Sidebar
        │   ├── NavLink (logo / marca)
        │   ├── NavLink × secciones principales
        │   └── NavLink × integrantes (Equipo)
        └── Outlet → páginas
            ├── HomePage
            │   └── MemberCard × N
            ├── ProfilePage
            │   ├── SkillBar × N
            │   ├── ProjectCarousel
            │   ├── TechStack
            │   └── SocialLinks
            ├── DataExplorerPage (filtro + lista)
            ├── ApiPage (fetch + paginación)
            ├── GalleryPage
            │   └── Lightbox (modal)
            ├── BitacoraPage
            └── ComponentTreePage`;

export default function ComponentTreePage() {
  return (
    <>
      <header className="page-header animate-in">
        <p className="badge">
          <i className="fa-solid fa-sitemap" aria-hidden="true" /> Arquitectura
        </p>
        <h1>Árbol de renderizado</h1>
        <p>
          Esquema jerárquico de la SPA: componente raíz, layout con sidebar y desglose de páginas y
          componentes hijos reutilizables.
        </p>
      </header>

      <div className="tree-page">
        <section className="tree-diagram card animate-in" aria-label="Diagrama del árbol de componentes">
          <pre>{tree}</pre>
        </section>

        <section className="tree-legend animate-in stagger-1">
          <div>
            <strong>Raíz</strong>
            <br />
            <code>App.jsx</code> define rutas; <code>main.jsx</code> monta React + Router.
          </div>
          <div>
            <strong>Layout</strong>
            <br />
            <code>DashboardLayout</code> envuelve sidebar fija + <code>Outlet</code> para contenido.
          </div>
          <div>
            <strong>Navegación</strong>
            <br />
            <code>Sidebar</code> con menú jerárquico: secciones + perfiles del equipo.
          </div>
          <div>
            <strong>UI reutilizable</strong>
            <br />
            Cards, barras de progreso, carrusel, lightbox, botones sociales.
          </div>
        </section>
      </div>
    </>
  );
}
