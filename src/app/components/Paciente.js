function Paciente({ children, paciente }) {

    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };

    return (
        <ul role="list" className="divide-y divide-gray-100">
                <li className="flex justify-between gap-x-6 py-5">
                    <div className="flex min-w-0 gap-x-4">
                        <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-900">Nombre: {paciente.nombre}</p>
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">Telefono: {paciente.telefono}</p>
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">Fecha de Nacimiento: {paciente.fechaNacimiento.toLocaleDateString('es-ES', options)}</p>
                        </div>
                    </div>
                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                        <p className="text-sm leading-6 text-gray-900">DNI: {paciente.dni}</p>
                        <p>Medico de cabezera: {paciente.medicoId}</p>
                    </div>
                </li>
                {children}
            </ul>
    )
}

export default Paciente