import FormularioPacientes from '@/app/components/Formulario_Pacientes'
import { newPaciente } from '@/app/lib/actions'


function page() {
    return (
        <div>
            <h3 className="text-xl text-center mt-12 font-semibold text-gray-900">Nuevo Paciente</h3>
            <FormularioPacientes action={newPaciente} title='Crear Paciente' paciente={null} />
        </div>
    )
}

export default page