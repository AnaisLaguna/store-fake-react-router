import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Toaster } from 'sonner';
import './index.css';

// Importa las páginas necesarias
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage'; // Asumiendo que tienes una página para los detalles del producto
import MainLayout from './layouts/MainLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/products/:id",
        element: <ProductDetailPage />,
      },

    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Toaster />
    <RouterProvider router={router} />
  </>
);
