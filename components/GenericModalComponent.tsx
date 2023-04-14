import { FunctionComponent, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

interface IGenericModalProps {
  isError: boolean,
  destinyAfterClose: string
  message: string
}

const GenericModalComponent: FunctionComponent<IGenericModalProps> = ({ isError, destinyAfterClose, message }) => {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  console.log('isOpen: ', isOpen)

  useEffect(() => {
    if (isOpen) {
      document.getElementById('modal')!.style.display = 'flex'
    } else {
      document.getElementById('modal')!.style.display = 'none'
    }
  }, [isOpen])

  function closeModal() {

    setIsOpen(false)
    document.getElementById('modal')!.style.display = 'none'
    router.push(destinyAfterClose)
  }

  return (
    <div id='modal' className='absolute top-0 right-0 z-10 flex flex-col items-center justify-center w-screen h-screen none bg-slate-600/50 backdrop-blur-sm '>
      <div className='flex flex-col items-center justify-center gap-4 rounded-lg w-96 h-1/3 text-primary bg-primary'>
        <p className='text-3xl font-bold'>{isError ? 'Oh no, vuelve a intentarlo' : 'Listo'}</p>
        <p className='text-secondary'>{message}</p>
        {
          isError ? <button className='px-4 py-2 border rounded-lg h-fit hover:text-light bg-gradient-to-br from-orange-600 to-yellow-300 hover:to-blue-500' onClick={() => closeModal()}>Cerrar</button> :
            <button className='px-4 py-2 border rounded-lg h-fit hover:text-light bg-gradient-to-br from-orange-600 to-yellow-300 hover:to-blue-500' onClick={() => closeModal()}>Continuar</button>
        }


      </div>
    </div>
  )
}

export default GenericModalComponent