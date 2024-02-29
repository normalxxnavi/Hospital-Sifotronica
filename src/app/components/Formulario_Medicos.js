import ButtonDb from '@/app/components/Boton-Formularios-db';

function FormularioMedicos({ action, title, medico, disabled=false }) {
  return (
    <form action={action} className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <input type='hidden' name='id' value={medico?.id} />
      <fieldset disabled={disabled} className="space-y-8">
        <label htmlFor='nombre' className="block text-sm font-medium text-gray-700">Nombre</label>
        <input type='text' id='nombre' name='nombre'
            placeholder='Nombre'
            defaultValue={medico?.nombre} autoFocus required
            className="block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mb-2"
        />
        <label htmlFor='edad' className="block text-sm font-medium text-gray-700">Edad</label>
        <input type='number' id='edad' name='edad' placeholder='Edad' min='0' max='150'
            defaultValue={Number(medico?.edad)} autoFocus required
            className="block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mb-2"
        />
        <label htmlFor='telefono' className="block text-sm font-medium text-gray-700">Telefono</label>
        <input type='text' id='telefono' name='telefono'
            placeholder='Telefono'
            defaultValue={medico?.telefono} autoFocus required
            className="block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mb-2"
        />
        <label htmlFor='Especialidad' className="block text-sm font-medium text-gray-700">Especialidad</label>
        <input type='text' id='especialidad' name='especialidad'
            placeholder='Especialidad'
            defaultValue={medico?.especialidad} autoFocus required
            className="block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mb-2"
        />
      </fieldset>
      <ButtonDb title={title} />
    </form>
  );
}

export default FormularioMedicos;