'use client'
import { useEffect } from 'react';
import LoginForm from "@/app/components/Login";
import OAuthForm from '@/app/components/Autenticacion';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Errores disponibles
const errors = new Map();
errors.set('OAuthSignin', "Error al construir una URL de autorización.");
errors.set('OAuthCallback', "Error al manejar la respuesta de un proveedor de OAuth.");
errors.set('OAuthCreateAccount', "No se pudo crear un usuario proveedor de OAuth en la base de datos.");
errors.set('EmailCreateAccount', "No se pudo crear un usuario de proveedor de correo electrónico en la base de datos.");
errors.set('Callback', "Error en la ruta del controlador de devolución de llamada de OAuth.");
errors.set('OAuthAccountNotLinked', "Este email ya está registrado.");
errors.set('EmailSignin', "Comprueba tu dirección de correo electrónico.");
errors.set('CredentialsSignin', "Fallo al iniciar sesion. Verifique que los datos que proporcionó sean correctos.");
errors.set('SessionRequired', "Error al iniciar sesión. Verifique que los detalles que proporcionó sean correctos.");
errors.set('Default', "No se puede iniciar sesión.");

function Page({ searchParams }) {
  const { error, callbackUrl } = searchParams;

  globalThis.callbackUrl= decodeURIComponent(callbackUrl ?? '%2Fdashboard')
  // Mostrar el toast si hay un error
  useEffect(() => {
    // Mostrar el toast si hay un error
    if (error) {
      toast.error(errors.get(error), {
        toastId: error,
        position: 'top-right' // Mostrar en la esquina superior derecha
      });
    }
  }, [error]);

  return (
    <>
      <LoginForm />
      <OAuthForm error={error} /> 
    </>
  );
}

export default Page;
