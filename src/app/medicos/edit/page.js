import FormularioMedicos from "@/app/components/Formulario_Medicos"
import { prisma } from '@/app/lib/prisma'
import { editMedico } from "@/app/lib/actions"

export const dynamic = 'force-dynamic'

async function page({searchParams}) {
  const medico = await prisma.medico.findUnique({
    where: {
      id: Number(searchParams.id),
    },
  })

  return (
    <div>
        <h3 className="text-xl text-center mt-12 font-semibold text-gray-900">Eliminar Medico con Id: {searchParams.id}</h3>
        <FormularioMedicos action={editMedico} title='Editar Medico' medico={medico}  />
    </div>
  )
}


export default page