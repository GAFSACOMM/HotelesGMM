import React from "react";
import '../../styles/sidebar.css';
import Link from "next/link";

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  return (
    <div className={`w-64 bg-gray-800 text-white h-screen p-4 fixed ${className}`}>
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <ul>
        <li><Link href="#" className="block py-2 px-4 hover:bg-gray-700">Inicio</Link></li>
        <li><Link href="#" className="block py-2 px-4 hover:bg-gray-700">Perfil</Link></li>
        <li><Link href="#" className="block py-2 px-4 hover:bg-gray-700">Configuración</Link></li>
        <li><Link href="#" className="block py-2 px-4 hover:bg-gray-700">Cerrar sesión</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
