import { loginGoogle, loginGithub, loginSpotify, loginGitLab } from "@/app/lib/actions"

function OAuthForm() {

  return (
    <>
      <form className="flex flex-col items-center justify-center mb-20">
        <button formAction={loginGoogle} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md mb-4 flex items-center transition duration-300 ease-in-out">
          <img className="w-6 h-6 mr-2" src="/google.svg" alt="Google" />  Iniciar sesión con Google
        </button>
    
        <button formAction={loginGithub} className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded-lg shadow-md flex items-center mb-4 transition duration-300 ease-in-out">
          <img className="w-6 h-6 mr-2" src="/github.svg" alt="Github" /> Iniciar sesión con Github
        </button>

        <button formAction={loginSpotify} className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md flex items-center mb-4 transition duration-300 ease-in-out">
          <img className="w-6 h-6 mr-2" src="/spotify.svg" alt="Spotify" /> Iniciar sesión con Spotify
        </button>

        <button formAction={loginGitLab} className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md flex items-center transition duration-300 ease-in-out">
          <img className="w-6 h-6 mr-2" src="/gitlab.svg" alt="GitLab" /> Iniciar sesión con GitLab
        </button>
      </form>
    </>
  )
}

export default OAuthForm;