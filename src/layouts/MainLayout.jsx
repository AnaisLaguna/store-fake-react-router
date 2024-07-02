// MainLayout.js
import React from 'react';
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";

const links = [
  { to: '/', label: "Home", authRequire: false },
  { to: '/products', label: "Productos", authRequire: true },
  { to: '/login', label: "Login", authRequire: false },
];

export default function MainLayout() {
    const navigate = useNavigate()
    const isAuth =!!localStorage.getItem("token");

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <main className="h-screen flex flex-col">
      <nav className="bg-indigo-100/50 flex flex-row justify-around text-lg p-1 font-semibold">
        {links.map(link => {
          if (link.authRequire &&!isAuth) return null;
          if (isAuth && link.to === "/login") return null;

          return (
            <Link key={`link-${link.to}`} to={link.to} 
              className="transition duration-300 ease-in-out text-indigo-900 hover:text-white" 
            >
              {link.label}
            </Link>
          );
        })}
        {isAuth && (
            <button 
            onClick={handleLogout}
            className='transition duration-300 ease-in-out text-indigo-900 hover:text-white '
            >
            Salir💨
            </button>
        )}
      </nav>
      <Outlet />
      <footer className='w-full bg-teal-950 text-center text-black'>
        Este es el footer
      </footer>
    </main>
  );
}