import './BitacoraPage.css';

export default function BitacoraPage() {
  return (
    <>
      <header className="page-header animate-in">
        <p className="badge">
          <i className="fa-solid fa-book" aria-hidden="true" /> Bitácora de proyecto
        </p>
        <h1>Proceso, roles y migración a React</h1>
        <p>
          Documentación del flujo de trabajo del equipo CarpinchoLab y análisis de la evolución desde
          el TP1 estático hacia la arquitectura de componentes del TP2.
        </p>
      </header>

      <div className="bitacora-grid">
        <article className="bitacora-card card animate-in">
          <h2>Roles del equipo</h2>
          <ul>
            <li>
              <strong>Roji:</strong> documentación, README, accesibilidad y revisión de entregables.
            </li>
            <li>
              <strong>Fran:</strong> estructura React, routing, consumo de API, CSS del dashboard y deploy en Vercel.
            </li>
            <li>
              <strong>Cin:</strong> guía visual, assets, galería, pruebas responsive en móvil real.
            </li>
          </ul>
        </article>

        <article className="bitacora-card card animate-in stagger-1">
          <h2>Flujo de trabajo (GitFlow + Trello)</h2>
          <ul>
            <li>
              <strong>GitFlow simplificado:</strong> rama <code>main</code> estable, ramas <code>feature/*</code>{' '}
              por consigna (sidebar, perfiles, API, galería) e integración vía Pull Request.
            </li>
            <li>
              <strong>Trello:</strong> columnas <em>Backlog → En progreso → Revisión → Hecho</em>. Cada tarjeta
              referencia issue o rama y captura de pantalla cuando aplica.
            </li>
            <li>
              <strong>Revisiones:</strong> al menos un par revisa CSS/UX y otro revisa lógica React antes de merge.
            </li>
          </ul>
        </article>

        <article className="bitacora-card card animate-in stagger-2">
          <h2>Justificación de la migración TP1 → TP2</h2>
          <p>
            El TP1 usaba HTML multipágina con scripts aislados (<code>nav.js</code>, <code>perfil-*.js</code>).
            Duplicábamos header, menú y estilos en cada archivo. Al sumar secciones (explorador JSON, API, galería)
            el mantenimiento se volvía frágil.
          </p>
          <div className="evolution-compare">
            <article>
              <h3>TP1 — Estático</h3>
              <ul>
                <li>Varios <code>.html</code> en raíz</li>
                <li>Navegación con recarga completa</li>
                <li>Estado en DOM + scripts sueltos</li>
                <li>Menú sticky superior</li>
              </ul>
            </article>
            <article>
              <h3>TP2 — React SPA</h3>
              <ul>
                <li>Componentes reutilizables (<code>Sidebar</code>, <code>MemberCard</code>)</li>
                <li>React Router sin recargar</li>
                <li>Estado con hooks (<code>useState</code>, <code>useEffect</code>)</li>
                <li>Sidebar fija tipo dashboard</li>
              </ul>
            </article>
          </div>
          <p>
            Los archivos originales del TP1 se conservan en <code>legacy/</code> como referencia histórica.
            Vite compila la SPA desde <code>src/</code> y Vercel redirige todas las rutas a <code>index.html</code>.
          </p>
        </article>

        <article className="bitacora-card card animate-in stagger-3">
          <h2>Decisiones técnicas del TP2</h2>
          <ul>
            <li>React 19 + Vite para desarrollo rápido y build optimizado.</li>
            <li>React Router para rutas anidadas bajo <code>DashboardLayout</code>.</li>
            <li>JSON local importado para el explorador; JSONPlaceholder para la API paginada.</li>
            <li>Lightbox propio con listeners de teclado (ESC, flechas).</li>
            <li>Misma paleta y tipografías del TP1 para continuidad visual.</li>
          </ul>
        </article>
      </div>
    </>
  );
}
