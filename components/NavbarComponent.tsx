import Link from "next/link";
import { useAuthData } from "@/contexts/auth";
import handlerLogout from "@/utils/handlers/logout";

export default function NavbarComponent() {

  const { auth } = useAuthData()

  return (
    <nav className='fixed top-0 z-10 flex flex-row items-center justify-between w-full h-20 px-20 border-b shadow-md text-primary border-slate-300 bg-primary'>
      <Link href={'/'} className='text-2xl font-bold'>Q2022App</Link>

      <div className='flex flex-row items-center gap-6 font-bold'>
        <Link className='text-lg hover:text-secondary' href="/">Inicio</Link>

        {
          auth ? <>
            <Link className='text-lg hover:text-secondary' href="/groups">Grupos</Link>
            <button onClick={handlerLogout} className='px-4 py-2 border rounded-lg h-fit hover:bg-dark hover:text-light border-slate-900 '>Cerrar sesión</button>
          </>

            :

            <>
              <Link href="/register">
                <button className='px-4 py-2 border rounded-lg h-fit hover:text-light bg-gradient-to-br from-orange-600 to-yellow-300 hover:to-blue-500'>Registrarme</button>
              </Link>

              <Link href="/login">
                <button className='px-4 py-2 border rounded-lg h-fit hover:bg-dark hover:text-light border-slate-900 '>Iniciar sesión</button>
              </Link>

            </>
        }


      </div>
    </nav>
  )
}