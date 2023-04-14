import Image from 'next/image'
import { fontInter } from '../../utils/fonts'
import Link from 'next/link'
import main from '../../public/main.jpg'
import { LoginFormComponent } from '@/components'

export default function Login() {
  return (
    <>

      <header className={`${fontInter.className} h-screen bg-primary`}>

        <div className='grid grid-cols-5'>
          <div className='flex flex-col justify-center h-full col-span-2 gap-6 px-20'>
            <h1 className='text-6xl font-bold text-primary'>Iniciar sesion</h1>
            <p className='text-lg text-secondary'>Ingresa tus credenciales</p>
            <Link href='/register' className='text-sm text-secondary'>Quiero crear mi cuenta</Link>

            <LoginFormComponent />
          </div>

          <div className='relative h-screen col-span-3'>

            <Image src={main} alt='wc' style={{ height: '100%', width: '100%', objectFit: "cover", objectPosition: 'fill' }} />
          </div>

        </div>
      </header>
    </>
  )
}
