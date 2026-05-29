import { useCallback, useEffect, useState } from 'react';
import './ApiPage.css';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';
const PAGE_SIZE = 5;

export default function ApiPage() {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPage = useCallback(async (currentPage, signal) => {
    setLoading(true);
    setError(null);
    try {
      const [postsRes, allRes] = await Promise.all([
        fetch(`${API_URL}?_page=${currentPage}&_limit=${PAGE_SIZE}`, { signal }),
        fetch(`${API_URL}?_limit=1`, { signal }),
      ]);

      if (!postsRes.ok) throw new Error(`Error HTTP ${postsRes.status}`);

      const total = Number(postsRes.headers.get('x-total-count') || 100);
      setTotalPages(Math.ceil(total / PAGE_SIZE));
      setPosts(await postsRes.json());
      await allRes.json();
    } catch (err) {
      if (err.name !== 'AbortError') {
        setError(err.message || 'No se pudo cargar la API');
        setPosts([]);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    fetchPage(page, controller.signal);
    return () => controller.abort();
  }, [page, fetchPage]);

  return (
    <>
      <header className="page-header animate-in">
        <p className="badge">
          <i className="fa-solid fa-cloud" aria-hidden="true" /> API externa
        </p>
        <h1>Posts desde JSONPlaceholder</h1>
        <p>Consumo asíncrono con estados de carga, error y paginación manual.</p>
      </header>

      {loading && (
        <div className="api-state card" role="status">
          <i className="fa-solid fa-spinner fa-spin" aria-hidden="true" /> Cargando página {page}...
        </div>
      )}

      {error && !loading && (
        <div className="api-state card api-state--error" role="alert">
          <i className="fa-solid fa-triangle-exclamation" aria-hidden="true" /> {error}
          <button type="button" className="btn btn-ghost" onClick={() => fetchPage(page, new AbortController().signal)}>
            Reintentar
          </button>
        </div>
      )}

      {!loading && !error && (
        <ul className="api-list">
          {posts.map((post) => (
            <li key={post.id} className="api-item card animate-in">
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <span className="api-item__id">#{post.id}</span>
            </li>
          ))}
        </ul>
      )}

      <nav className="api-pagination card" aria-label="Paginación de posts">
        <button type="button" className="btn btn-ghost" disabled={page <= 1 || loading} onClick={() => setPage((p) => p - 1)}>
          <i className="fa-solid fa-chevron-left" aria-hidden="true" /> Anterior
        </button>
        <span>
          Página <strong>{page}</strong> de <strong>{totalPages}</strong>
        </span>
        <button
          type="button"
          className="btn btn-ghost"
          disabled={page >= totalPages || loading}
          onClick={() => setPage((p) => p + 1)}
        >
          Siguiente <i className="fa-solid fa-chevron-right" aria-hidden="true" />
        </button>
      </nav>
    </>
  );
}
