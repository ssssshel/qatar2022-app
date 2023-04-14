import Image from 'next/image'
import Link from 'next/link'
import { fontInter } from '../utils/fonts'
import { NavbarComponent } from '../components'
import login from '../public/login.jpg'
import { useAuthData } from '@/contexts/auth'


export default function Home() {
  const { auth } = useAuthData()

  return (
    <>
      <NavbarComponent />

      <header className={`${fontInter.className} h-screen bg-primary`}>

        <div className='grid grid-cols-5'>
          <div className='flex flex-col justify-center h-full col-span-2 gap-6 px-20'>
            <h1 className='text-6xl font-bold text-primary'>Qatar 2022 App</h1>
            <p className='text-lg text-secondary'>Enterate de la informacion mas relevante sobre la competición deportiva más importante del mundo</p>

            {
              auth ? <Link href={'/groups'}>
                <button className='px-4 py-2 border rounded-lg hover:text-light bg-gradient-to-br from-orange-600 to-yellow-300 hover:to-blue-500'>Ver grupos</button>
              </Link> : (
                <div className='flex flex-row gap-6 font-bold text-primary '>
                  <Link href={'/register'}>
                    <button className='px-4 py-2 border rounded-lg hover:text-light bg-gradient-to-br from-orange-600 to-yellow-300 hover:to-blue-500'>Registrarme</button>
                  </Link>
                  <Link href={'login'}>
                    <button className='px-4 py-2 border rounded-lg border-slate-900 hover:bg-dark hover:text-light '>Iniciar sesión</button>
                  </Link>
                </div>
              )
            }

          </div>

          <div className='relative h-screen col-span-3'>

            <Image src={login} alt='wc' style={{ height: '100%', objectFit: "cover", objectPosition: 'fill' }} />
          </div>

        </div>
      </header>
    </>
  )
}
