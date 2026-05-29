import { useCallback, useEffect } from 'react';
import './Lightbox.css';

export default function Lightbox({ images, index, onClose, onNavigate }) {
  const current = images[index];

  const handleKey = useCallback(
    (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') onNavigate(1);
      if (event.key === 'ArrowLeft') onNavigate(-1);
    },
    [onClose, onNavigate]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [handleKey]);

  if (!current) return null;

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={current.caption}>
      <button type="button" className="lightbox__backdrop" aria-label="Cerrar" onClick={onClose} />
      <div className="lightbox__panel">
        <button type="button" className="lightbox__close btn btn-ghost" onClick={onClose} aria-label="Cerrar lightbox">
          <i className="fa-solid fa-xmark" aria-hidden="true" />
        </button>
        <button type="button" className="lightbox__nav lightbox__nav--prev btn btn-ghost" onClick={() => onNavigate(-1)} aria-label="Imagen anterior">
          <i className="fa-solid fa-chevron-left" aria-hidden="true" />
        </button>
        <figure className="lightbox__figure">
          <img className="lightbox__img" src={current.src} alt={current.alt} />
          <figcaption>{current.caption}</figcaption>
        </figure>
        <button type="button" className="lightbox__nav lightbox__nav--next btn btn-ghost" onClick={() => onNavigate(1)} aria-label="Imagen siguiente">
          <i className="fa-solid fa-chevron-right" aria-hidden="true" />
        </button>
        <p className="lightbox__hint">ESC para cerrar · Flechas para navegar</p>
      </div>
    </div>
  );
}
