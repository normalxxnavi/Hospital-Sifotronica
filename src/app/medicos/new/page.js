import FormularioMedicos from "@/app/components/Formulario_Medicos"
import { newMedico } from "@/app/lib/actions"

function page() {
  return (
    <div>
        <h3 className="text-xl text-center mt-12 font-semibold text-gray-900">Nuevo Medico</h3>
        <FormularioMedicos action={newMedico} title='Crear Medico' medico={null} />
    </div>
  )
}

export default page