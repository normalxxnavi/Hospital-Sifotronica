import Link from 'next/link'
import Paciente from '@/app/components/Paciente'
import { getPacientes } from '@/app/lib/actions'

async function page() {

    const paciente = await getPacientes()
        console.log(paciente);

    return (
        <>
        {
            paciente.map((paciente) => (
            <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-lg" key={paciente.id}>
                <Paciente paciente={paciente}>
                <Link className='enlace block text-indigo-600 hover:text-indigo-900 mb-2' href={{ pathname: '/pacientes/edit', query: { id: paciente.id } }}>Editar paciente</Link>
                <Link className='enlace block text-indigo-600 hover:text-indigo-900 mb-2' href={{ pathname: '/pacientes/delete', query: { id: paciente.id } }}>Eliminar paciente</Link>
                </Paciente>
            </div>
            ))
        }
        <div className="flex justify-center mt-8">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
            <Link className='duration-300 ease-in-out block text-white hover:text-indigo-900' href={"/pacientes/new"}>Nuevo paciente</Link>
            </button>
        </div>
        </>
    )
}

export default page