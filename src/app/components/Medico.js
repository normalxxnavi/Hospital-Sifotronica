function Medico({ children, medico }) {
    return (
        <ul role="list" className="divide-y divide-gray-100">
            <li className="flex justify-between gap-x-6 py-5">
                <div className="flex min-w-0 gap-x-4">
                    <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-gray-900">Nombre: {medico.nombre}</p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">Edad: {medico.edad.toString()}</p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">Telefono: {medico.telefono}</p>
                    </div>
                </div>
                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                    <p className="text-sm leading-6 text-gray-900">Especialidad: {medico.especialidad}</p>
                </div>
            </li>
            {children}
        </ul>
    )
}

export default Medico;