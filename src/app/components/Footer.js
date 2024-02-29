function Footer() {
  return (
    <div className="flex flex-col">
      <footer className="bg-gray-800 text-white pt-16 pb-16 opacity-90 hover:opacity-100 transition duration-300 ease-in-out w-full">
        <div className="container mx-auto">
          <div className="text-center">
            <p className="text-sm hover:text-blue-400">&copy; 2024 Hospital Clinical Sifotronica. Todos los derechos reservados.</p>
            <p className="text-sm mt-2 hover:text-blue-400 transition duration-300 ease-in-out">Dirección: Calle Principal #123, Ciudad, País</p>
            <p className="text-sm mt-2 hover:text-blue-400 transition duration-300 ease-in-out">Teléfono: <a href="tel:+123456789">+123 456 789</a> | Email: <a href="mailto:info@hospital.com">info@hospital.com</a></p>
            <div className="mt-4">
              <a href="https://github.com/normalxxnavi" className="text-blue-400 no-underline hover:text-white transition duration-300 ease-in-out mr-4">GitHub Desarrollador</a>
              <a href="https://github.com/normalxxnavi/Hospital-Sifotronica/" className="text-blue-400 no-underline hover:text-white transition duration-300 ease-in-out">GitHub del Proyecto</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;