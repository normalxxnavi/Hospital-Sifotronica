import FormularioPacientes from "@/app/components/Formulario_Pacientes"
import { prisma } from '@/app/lib/prisma'
import { deletePaciente } from "@/app/lib/actions"

export const dynamic = 'force-dynamic'

async function page({ searchParams }) {
    const paciente = await prisma.paciente.findUnique({
        where: {
        id: Number(searchParams.id),
        },
    })

    return (
        <div>
        <h3 className="text-xl text-center mt-12 font-semibold text-gray-900">Eliminar Paciente con Id: {searchParams.id}</h3>
        <FormularioPacientes action={deletePaciente} title='Eliminar Paciente' paciente={paciente} disabled={true} />
        </div>
    )
}

export default page