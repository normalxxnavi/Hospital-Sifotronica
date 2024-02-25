import Link from 'next/link'
import Medico from '@/app/components/Medico'
import { getMedicos } from '@/app/lib/actions'
import { auth } from '@/auth';

async function page() {
  const medico = await getMedicos();
  const session = await auth();

  // Verifica si el usuario es ADMIN
  const isAdmin = session?.user?.role === 'ADMIN';

  return (
    <>
      {medico.map((medico) => (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-lg" key={medico.id}>
          <Medico medico={medico}>
            {isAdmin && (
              <>
                <Link className='enlace block text-indigo-600 hover:text-indigo-900 mb-2' href={{ pathname: '/medicos/edit', query: { id: medico.id } }}>Editar Medico</Link>
                <Link className='enlace block text-indigo-600 hover:text-indigo-900 mb-2' href={{ pathname: '/medicos/delete', query: { id: medico.id } }}>Eliminar Medico</Link>
              </>
            )}
          </Medico>
        </div>
      ))}
      {isAdmin && (
        <div className="flex justify-center mt-8">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded duration-300 ease-in-out">
            <Link className='enlace block text-white hover:text-indigo-900' href={"/medicos/new"}>Nuevo Medico</Link>
          </button>
        </div>
      )}
    </>
  );
}

export default page