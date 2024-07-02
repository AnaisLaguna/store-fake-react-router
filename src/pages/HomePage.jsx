import { Link, useLocation } from "react-router-dom";
import PageSection from "../components/PageSection";

export default function HomePage() {
  const location = useLocation();

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-900">
      <header className="w-full h-20 bg-gray-800 flex justify-center items-center">
        <h1 className="text-4xl font-bold text-white">Bienvenido</h1>
      </header>
      <main className="w-full h-full flex flex-col justify-center items-center p-4">
        <PageSection className="bg-gray-800 shadow-md rounded-lg p-4">
          <h2 className="text-2xl font-bold text-white text-center">Nuestros Productos</h2>
          <p className="text-gray-400 text-center">Explora nuestros productos y encuentra lo que necesitas</p>
        </PageSection>
        <PageSection className="bg-gray-800 shadow-md rounded-lg p-4 mt-4">
          <div className="flex flex-col items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNE19VHnAEoQdvi2VuTYW4KlFGvqw5CtsEOQ&s"
              alt="Imagen de ejemplo"
              className="w-64 h-64 object-cover rounded-full"
            />
            <p className="text-gray-400 text-center mt-2">Imagen de ejemplo</p>
          </div>
        </PageSection>
        <nav className="flex justify-center gap-4 mt-4">
          <Link
            to="/login"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Iniciar Sesión
          </Link>
          <Link
            to="/products"
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          >
            Ver Productos
          </Link>
          <Link
            to="/products/123"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Ver Detalles del Producto
          </Link>
        </nav>
      </main>
      <footer className="w-full h-20 bg-gray-800 flex justify-center items-center">
        <p className="text-sm text-gray-400">Copyright 2023 Home Page</p>
      </footer>
    </div>
  );
}