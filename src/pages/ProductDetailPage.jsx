import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProduct } from "../api";
import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";

export default function ProductDetailPage() {
  useAuth();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getProduct(id)
     .then(product => {
        setTimeout(() => {
          setProduct(product);
          setIsLoading(false);
        }, 1000); // Mostrar loading durante 1 segundos
      })
     .catch(error => {
        toast.error("Error al cargar el producto");
        console.error("[getProduct]", error);
        setIsLoading(false);
      });
  }, [id]);

  return (
    <main className="max-w-md mx-auto p-4 pt-6 pb-8">
      {isLoading? (
        <p className="text-lg text-center">Loading...</p>
      ) : (
        product && (
          <div className="flex flex-col items-center">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full rounded-lg mb-4"
            />
            <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
            <p className="text-lg mb-4">{product.description}</p>
            <p className="text-2xl font-bold">${product.price}</p>
          </div>
        )
      )}
    </main>
  );
}