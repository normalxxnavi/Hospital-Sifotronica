import { logout } from "@/app/lib/actions"

function page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-80 mb-64">
      <h1 className="text-2xl font-bold mb-4">Cerrar sesión</h1>
      <form>
        <button formAction={logout} className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md flex items-center transition duration-300 ease-in-out">
          <img className="w-6 h-6 mr-2" src="/logout.svg" alt="Exit" /> Cerrar sesión
        </button>
      </form>
    </div>
  )
}

export default page