// ProductsPage.js
import { useState, useEffect } from "react";
import { getProducts } from "../api";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useAuth();

  useEffect(() => {
    getProducts()
      .then(products => setProducts(products))
      .catch(error => {
        toast.error("Error al obtener los productos")
        console.error("[getProducts error]", error);
      });
  }, []);

  return (
    <main className="w-full h-screen p-4 bg-gray-900">
      <section className="flex flex-col items-center">
        <h1 className="text-4xl font-bold animate-pulse text-center text-white">Productos</h1>
        <section className="m-5 pt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            {products.map(product => (
              <div
                key={product.id}
                className="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700 cursor-pointer"
              >
                <img className="rounded-t-lg p-8" src={product.thumbnail} alt={product.title} />
                <div className="px-5 pb-5">
                  <h3
                    className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white truncate"
                  >
                    {product.title}
                  </h3>
                  <div className="flex flex-wrap justify-between mb-5">
                    <span className="text-lg font-bold text-gray-900 dark:text-white">
                      <span className="text-2xl">${product.price}</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">/unidad</span>
                    </span>
                    <Link
                      to={`/products/${product.id}`}
                      className="w-full h-full px-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Ver detalles
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}