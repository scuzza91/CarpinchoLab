import { useState } from 'react';
import { galleryImages } from '../data/galleryImages';
import Lightbox from '../components/gallery/Lightbox';
import './GalleryPage.css';

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const close = () => setLightboxIndex(null);

  const navigate = (delta) => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      const total = galleryImages.length;
      return (prev + delta + total) % total;
    });
  };

  return (
    <>
      <header className="page-header animate-in">
        <p className="badge">
          <i className="fa-solid fa-images" aria-hidden="true" /> Galería
        </p>
        <h1>Imágenes del proyecto</h1>
        <p>Grid interactivo con lightbox: zoom al pasar el mouse, navegación interna y cierre con ESC.</p>
      </header>

      <div className="gallery-grid">
        {galleryImages.map((image, index) => (
          <button
            key={image.id}
            type="button"
            className="gallery-item card animate-in"
            style={{ animationDelay: `${0.05 * index}s` }}
            onClick={() => setLightboxIndex(index)}
          >
            <img src={image.src} alt={image.alt} loading="lazy" />
            <span>{image.caption}</span>
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox images={galleryImages} index={lightboxIndex} onClose={close} onNavigate={navigate} />
      )}
    </>
  );
}
