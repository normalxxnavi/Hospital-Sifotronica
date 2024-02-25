export default function Home() {
  return (
    <>
      <div className="relative">
        <img src="/images/banner.jpg" alt="banner" className="w-full block h-56"/>
        <h1 className="absolute inset-0 flex items-center justify-center text-5xl text-center text-white font-bold my-4 mb-24 transition-colors duration-300 ease-in-out hover:text-black">Hospital Clinical Sifotronica</h1>
      </div>
      <div className="bg-white text-gray-800 pt-11 pb-24 border border-gray-300 shadow-md transition duration-300 ease-in-out hover:bg-gray-100 hover:border-gray-400">
        <h1 className="text-3xl font-bold mb-4 text-center transition duration-300 ease-in-out hover:text-blue-400">Bienvenidos al Panel de Control del Hospital Clinical Sifotronica</h1>
        <p className="mb-4 text-center hover:text-blue-400 transition duration-300 ease-in-out">Aquí encontrarán todas las herramientas necesarias para gestionar su salud de manera fácil y conveniente. Nuestro equipo está comprometido a brindarles una experiencia excepcional, con acceso rápido a sus datos médicos y opciones de atención.</p>
        <p className="mb-8 text-center hover:text-blue-400 transition duration-300 ease-in-out">Gracias por confiar en nosotros. Estamos aquí para cuidar de su salud con dedicación y profesionalismo. ¡Bienvenidos a nuestra plataforma!</p>
        
        <div className="flex justify-center space-x-4">
            <a href="/pacientes" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">Pacientes</a>
            <a href="/medicos" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">Médicos</a>
        </div>
      </div>
    </>
  );
}
