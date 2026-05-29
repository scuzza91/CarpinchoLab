import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import './DashboardLayout.css';

export default function DashboardLayout() {
  return (
    <div className="dashboard">
      <Sidebar />
      <main className="dashboard__main" id="contenido-principal">
        <Outlet />
      </main>
    </div>
  );
}
