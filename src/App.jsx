import { Routes, Route } from 'react-router-dom';
import DashboardLayout from './components/layout/DashboardLayout';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import DataExplorerPage from './pages/DataExplorerPage';
import ApiPage from './pages/ApiPage';
import GalleryPage from './pages/GalleryPage';
import BitacoraPage from './pages/BitacoraPage';
import ComponentTreePage from './pages/ComponentTreePage';

export default function App() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route index element={<HomePage />} />
        <Route path="perfil/:slug" element={<ProfilePage />} />
        <Route path="explorador" element={<DataExplorerPage />} />
        <Route path="api" element={<ApiPage />} />
        <Route path="galeria" element={<GalleryPage />} />
        <Route path="bitacora" element={<BitacoraPage />} />
        <Route path="arbol-componentes" element={<ComponentTreePage />} />
      </Route>
    </Routes>
  );
}
