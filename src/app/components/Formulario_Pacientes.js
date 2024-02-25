import ButtonDb from '@/app/components/Boton-Formularios-db';
import { Suspense } from 'react';
import ListaMedicos from './ListaMedicos';

function FormularioPacientes({ action, title, paciente, disabled=false }) {
    return (
        <form action={action} className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
            <input type='hidden' name='id' value={paciente?.id} />
            <fieldset disabled={disabled} className="space-y-8">
                <label htmlFor='nombre' className="block text-sm font-medium text-gray-700">Nombre</label>
                <input type='text' id='nombre' name='nombre'
                    placeholder='Nombre'
                    defaultValue={paciente?.nombre} autoFocus required
                    className="block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mb-2"
                />
                <label htmlFor='telefono' className="block text-sm font-medium text-gray-700">Telefono</label>
                <input type='text' id='telefono' name='telefono'
                    placeholder='Telefono'
                    defaultValue={paciente?.telefono} autoFocus required
                    className="block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mb-2"
                />
                <label htmlFor='fechaNacimiento'>Fecha de nacimiento</label>
                <input type='date' id='fechaNacimiento' name='fechaNacimiento'
                    placeholder='fechaNacimiento'
                    defaultValue={paciente?.fechaNacimiento.toISOString().split('T')[0]} 
                    className="block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mb-2"
                    />
                <label htmlFor='dni' className="block text-sm font-medium text-gray-700">Dni</label>
                <input type='text' id='dni' name='dni'
                    placeholder='Dni'
                    defaultValue={paciente?.dni} autoFocus required
                    className="block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mb-2"
                />
                <Suspense fallback={'Cargando ...'}>
                <ListaMedicos pacienteId={paciente?.id} disabled={disabled} />
                </Suspense>
            </fieldset>
            <ButtonDb title={title} />
        </form>
)
}

export default FormularioPacientes