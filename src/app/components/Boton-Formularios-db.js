'use client'
import { useFormStatus } from 'react-dom'

function ButtonDb({title}) {
    const { pending } = useFormStatus()
    return (
        <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 mt-16 duration-300 ease-in-out text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" type='submit' disabled={pending}>
            {pending ? 'Realizando operación...' : title}
        </button>
    )
}

export default ButtonDb
