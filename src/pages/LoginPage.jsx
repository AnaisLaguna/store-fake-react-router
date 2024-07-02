// LoginPage.js
import { useForm } from 'react-hook-form';
import { login } from "../api";
import { toast } from 'react-toastify'; // Cambiado de 'onner' a 'react-toastify'
import { useNavigate } from 'react-router-dom'; // Cambiado de 'eact-router-dom' a 'react-router-dom'
import { clsx } from 'clsx';
import { useEffect, useState } from 'react'; // Cambiado de 'eact' a 'react'

export default function LoginPage() {
  const navigate = useNavigate();

  const { 
    handleSubmit, 
    register, 
    formState: { errors },
    setError,
  } = useForm();

  async function onSubmit(data) {
    try {
      const token = await login(data.username, data.password);

      if (token) {
        window.localStorage.setItem('token', token);
        toast.success('Bienvenido');
        navigate('/products');
      } else {
        toast.error('Usuario o contraseña incorrectos');
        setError("root.credentials", {
          type: "manual",
          message: "Credenciales inválidas"
        });
      }
    } catch (error) {
      toast.error("Error al iniciar sesión");
      console.error(error);
    }
  }

  useEffect(() => {
    document.title = "Login";
  }, []);

  const hasError = errors.root?.credentials;

  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="h-screen flex justify-center items-center bg-black">
      <div className="max-w-md w-full p-6 bg-gray-800 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-white text-center">Iniciar Sesión</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <label className="block mb-2">
            <span className="text-white">Nombre de usuario</span>
            <input
              type="text"
              className={clsx("w-full p-2 pl-10 text-sm text-white bg-gray-900 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400", {
                'border-red-500': errors.username,
              })}
              placeholder="Nombre de usuario"
              {...register('username', {
                required: { value: true, message: "Nombre de usuario requerido" },
              })}
            />
            {errors.username && (
              <p className="text-red-500 text-sm">{errors.username.message}</p>
            )}
          </label>
          <label className="block mb-2 relative">
            <span className="text-white">Contraseña</span>
            <input
              type={showPassword? 'text' : 'password'}
              className={clsx("w-full p-2 pl-10 text-sm text-white bg-gray-900 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400", {
                'border-red-500': errors.password,
              })}
              placeholder="Contraseña"
              {...register('password', {
                required: { value: true, message: "Contraseña requerida" },
              })}
            />
            <span
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white cursor-pointer text-lg"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword? '😒' : '👀'}
            </span>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </label>
          {hasError && (
            <p className="text-red-500 text-sm">Credenciales inválidas</p>
          )}
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Iniciar Sesión
          </button>
        </form>
      </div>
    </main>
  );
}