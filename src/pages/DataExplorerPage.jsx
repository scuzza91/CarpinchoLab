import { useMemo, useState } from 'react';
import catalog from '../data/localCatalog.json';
import './DataExplorerPage.css';

export default function DataExplorerPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');

  const categories = useMemo(
    () => ['all', ...new Set(catalog.map((item) => item.category))],
    []
  );

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return catalog.filter((item) => {
      const matchesCategory = category === 'all' || item.category === category;
      if (!normalized) return matchesCategory;
      const haystack = `${item.title} ${item.category} ${item.tags.join(' ')} ${item.level}`.toLowerCase();
      return matchesCategory && haystack.includes(normalized);
    });
  }, [query, category]);

  return (
    <>
      <header className="page-header animate-in">
        <p className="badge">
          <i className="fa-solid fa-database" aria-hidden="true" /> Explorador local
        </p>
        <h1>Catálogo JSON ({catalog.length} recursos)</h1>
        <p>Filtrado en tiempo real por texto y categoría sobre un archivo JSON importado en React.</p>
      </header>

      <div className="explorer-toolbar card animate-in stagger-1">
        <label className="explorer-field">
          <span>Buscar</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Título, tag, nivel..."
            aria-label="Buscar en el catálogo"
          />
        </label>
        <label className="explorer-field">
          <span>Categoría</span>
          <select value={category} onChange={(e) => setCategory(e.target.value)} aria-label="Filtrar por categoría">
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat === 'all' ? 'Todas' : cat}
              </option>
            ))}
          </select>
        </label>
        <p className="explorer-count" aria-live="polite">
          {filtered.length} resultado{filtered.length !== 1 ? 's' : ''}
        </p>
      </div>

      <ul className="explorer-list">
        {filtered.map((item, i) => (
          <li key={item.id} className="explorer-item card animate-in" style={{ animationDelay: `${0.04 * i}s` }}>
            <div>
              <h3>{item.title}</h3>
              <p className="explorer-item__meta">
                {item.category} · {item.level}
              </p>
            </div>
            <div className="explorer-tags">
              {item.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </li>
        ))}
      </ul>

      {filtered.length === 0 && (
        <p className="explorer-empty">No hay coincidencias. Probá otro término o categoría.</p>
      )}
    </>
  );
}
