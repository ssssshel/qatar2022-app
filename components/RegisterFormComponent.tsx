import { useState } from "react"
import { handlePostExternal } from "../utils/handlers/fetch"
import { externalServices } from "../utils/servicesRoutes"
import GenericModalComponent from "./GenericModalComponent"

export default function RegisterFormComponent() {

  // estado del error y mensaje del modal
  const [isError, setIsError] = useState(false)
  const [responseMessage, setResponseMessage] = useState("")

  async function handleSubmit(e: any) {
    e.preventDefault()
    const payload = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      passwordConfirmation: e.target.passwordConfirmation.value
    }

    // se cargan los estados del contenido del modal en base a respuesta del servidor
    await handlePostExternal(externalServices.register, payload).then((res) => {
      setResponseMessage(res.message)
      setIsError(false)
    }).catch((err) => {
      setResponseMessage(err.message)
      setIsError(true)
    }).finally(() => {
      // se visibiliza el modal
      document.getElementById("modal")!.style.display = "flex";
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='flex flex-col gap-6 text-primary'>
        <input required name="name" id="name" className='p-2 border rounded-md shadow-sm border-slate-300' type="text" placeholder='Nombre' />
        <input required name="email" id="email" className='p-2 border rounded-md shadow-sm border-slate-300' type="text" placeholder='Correo' />
        <input required name="password" id="password" className='p-2 border rounded-md shadow-sm border-slate-300' type="password" placeholder=' Contraseña' />
        <input required name="passwordConfirmation" id="passwordConfirmation" className='p-2 border rounded-md shadow-sm border-slate-300' type="password" placeholder=' Confirmar contraseña' />
        <button type="submit" className='px-4 py-2 font-bold border rounded-lg hover:text-light bg-gradient-to-br from-orange-600 to-yellow-300 hover:to-blue-500'>Registrarme</button>
      </form>


      <GenericModalComponent destinyAfterClose={isError ? '/register' : '/login'} message={responseMessage} isError={isError} />


    </div>
  )
}