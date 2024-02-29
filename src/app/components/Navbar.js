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
                <nav className="flex justify-end flex-wrap px-4 py-2 bg-blue-200 sm:flex sm:justify-end">
                    {session
                        ? <Link className="text-white mr-4 mb-2 sm:mb-0" href={"/auth/signout"}>Logout</Link>
                        :
                        (<>
                            <Link className="text-white mr-4 mb-2 sm:mb-0" href="/auth/signup">Registro</Link>
                            <Link className="text-white mr-4 mb-2 sm:mb-0" href={"/auth/signin"}>Login</Link>
                        </>)
                    }
                    {session?.user?.role === 'ADMIN' && (
                        <>
                            <Link className="text-white mr-4 mb-2 sm:mb-0" href={"/admin"}>Admin panel</Link> 
                            <Link className="text-white mr-4 mb-2 sm:mb-0" href={"/pacientes"}>Pacientes</Link>
                            <Link className="text-white mr-4 mb-2 sm:mb-0" href={"/medicos"}>Medicos</Link>
                        </>
                    )}
                    {session?.user?.role === 'USER' && (
                        <>
                            <Link className="text-white mr-4 mb-2 sm:mb-0" href={"/dashboard"}>Dashboard</Link>
                            <Link className="text-white mr-4 mb-2 sm:mb-0" href={"/medicos"}>Medicos</Link>
                        </>
                    )}
                    <Link className="text-white mr-4 mb-2 sm:mb-0" href={"/quienes"}>¿Quienes Somos?</Link>
                    <Link className="text-white mr-4 mb-2 sm:mb-0" href={"/acercaDe"}>Acerca de...</Link>
                </nav>
            </div>
        </>
    )
}

export default Navbar