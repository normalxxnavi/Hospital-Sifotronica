'use client'
import { useState } from 'react';
import { register } from '@/app/lib/actions'
import Button from '@/app/components/Boton-Formulario';
import { redirect } from 'next/navigation';

function RegisterForm() {
    const [resultado, setResultado] = useState("")
    const [tipo, setTipo] = useState("")

    async function wrapper(data) {
        const message = await register(data) // Server action
        if (message.success) {
            setTipo('success')
            // setResultado(message.success);
            redirect('/auth/signin')
        } else {
            setTipo('error')
            setResultado(message.error);
        }

    }
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mb-10">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img className="mx-auto h-10 w-auto" src="/images/logo.svg" alt="Hospital Clinical Sifotronica"/>
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Registro</h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action={wrapper}>
                    <div>
                        <label className="block text-sm font-medium leading-6 text-gray-900">Nombre</label>
                    <div className="mt-2">
                        <input name="name" type="text" autoComplete="name" required className="block w-full rounded-md border-0 py-1.5 pl-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                    </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium leading-6 text-gray-900">Correo Electronico</label>
                    <div className="mt-2">
                        <input name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 pl-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                    </div>
                    </div>
                    <div>
                    <div className="flex items-center justify-between">
                        <label className="block text-sm font-medium leading-6 text-gray-900">Contraseña</label>
                        <div className="text-sm">
                        </div>
                    </div>
                    <div className="mt-2">
                        <input name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 pl-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                    </div>
                    </div>
                    <p className={`info ${tipo}`}> {resultado} </p>
                    <div>
                    <Button title="Crear Cuenta"></Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RegisterForm