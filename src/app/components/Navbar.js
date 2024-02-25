import Link from "next/link"
import { auth } from "@/auth"

async function Navbar() {

    const session = await auth();
    // console.log(session);

    return (
        <>
            <div>
                <nav className="flex items-center justify-between px-4 py-3 bg-blue-400">
                    <Link href={"/"}><img src="/images/logo.svg" alt="Hospital" className="h-12"/></Link>
                    <h1 className="ml-4 text-white transition-colors duration-300 ease-in-out hover:text-black cursor-pointer">Hospital Clinical Sifotronica</h1>
                </nav>
                <nav className="secondary-nav flex justify-end px-4 py-2 bg-blue-200">
                {session
                    ? <Link className="text-white mr-4 transition-colors duration-300 ease-in-out hover:text-black cursor-pointer" href={"/auth/signout"}>Logout</Link>
                    :
                    (<>
                        <Link className="text-white mr-4 transition-colors duration-300 ease-in-out hover:text-black cursor-pointer" href="/auth/signup">Registro</Link>
                        <Link className="text-white mr-4 transition-colors duration-300 ease-in-out hover:text-black cursor-pointer" href={"/auth/signin"}>Login</Link>
                    </>)
                }
                {session?.user?.role === 'ADMIN'
                    ? (
                        // Si el rol del usuario es 'USER', muestra enlaces a Dashboard y Pacientes
                        <>
                            <Link className="text-white mr-4 transition-colors duration-300 ease-in-out hover:text-black cursor-pointer" href={"/admin"}>Admin panel</Link> 
                            <Link className="text-white mr-4 transition-colors duration-300 ease-in-out hover:text-black cursor-pointer" href={"/pacientes"}>Pacientes</Link>
                            <Link className="text-white mr-4 transition-colors duration-300 ease-in-out hover:text-black cursor-pointer" href={"/medicos"}>Medicos</Link>
                        </>
                        )
                        : ''
                }
                {session?.user?.role === 'USER' // Comprueba si el rol del usuario es 'USER'
                        ? (
                        // Si el rol del usuario es 'USER', muestra enlaces a Dashboard y Pacientes
                        <>
                            <Link className="text-white mr-4 transition-colors duration-300 ease-in-out hover:text-black cursor-pointer" href={"/dashboard"}>Dashboard</Link>
                            <Link className="text-white mr-4 transition-colors duration-300 ease-in-out hover:text-black cursor-pointer" href={"/medicos"}>Medicos</Link>
                        </>
                        )
                        : '' // Si el rol del usuario no es 'USER', no muestra ningún enlace
                }
                    <Link className="text-white mr-4 transition-colors duration-300 ease-in-out hover:text-black cursor-pointer" href={"/quienes"}>¿Quienes Somos?</Link>
                    <Link className="text-white mr-4 transition-colors duration-300 ease-in-out hover:text-black cursor-pointer" href={"/acercaDe"}>Acerca de...</Link>
                </nav>
            </div>
        </>
    )
}

export default Navbar