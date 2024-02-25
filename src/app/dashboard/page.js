import { auth } from '@/auth'
import { redirect } from 'next/navigation';
import Link from 'next/link';

async function page() {
    const session = await auth()

    if (!session) {
        redirect('/')
    }

    if (session.user.role === 'ADMIN') {
        redirect('/admin')
    }

    return (
        <main className="bg-gray-100 h-screen flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mb-8">Panel de Control</h1>
            <div className="bg-white p-6 rounded-lg shadow-md mb-10">
                <h2 className="text-lg font-semibold mb-4">Datos de sesión:</h2>
                <h1>&#x1f464; Nombre: {session?.user.name}</h1>
                <h1>&#x1f4e7; Correo Electronico: {session?.user.email}</h1>
                <h1>&#128172; Rol: {session?.user.role}</h1>
            </div>
            <Link href={"/"} className="text-blue-500 mb-4">Página principal &rarr;</Link>
        </main>
    )
}

export default page;