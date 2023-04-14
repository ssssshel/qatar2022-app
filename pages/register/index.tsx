import Image from 'next/image'
import { fontInter } from '../../utils/fonts'
import main from '../../public/main.jpg'
import Link from 'next/link'
import { RegisterFormComponent } from '../../components'

export default function Register() {

  return (
    <>
      <header className={`${fontInter.className} h-screen w-full bg-primary`}>

        <div className='grid grid-cols-5'>
          <div className='flex flex-col justify-center h-full col-span-2 gap-6 px-20'>
            <h1 className='text-6xl font-bold text-primary'>Registrate</h1>
            <p className='text-lg text-secondary'>Ingresa tus credenciales</p>
            <Link href='/login' className='text-sm text-secondary'>Ya tengo una cuenta</Link>

            <RegisterFormComponent />

          </div>

          <div className='relative h-screen col-span-3'>

            <Image src={main} alt='wc' style={{ height: '100%', width: '100%', objectFit: "cover", objectPosition: 'fill' }} />
          </div>

        </div>

      </header>
    </>
  )
}
