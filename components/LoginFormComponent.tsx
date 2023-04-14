import { handlePostExternal, handlerGetExternal } from "@/utils/handlers/fetch"
import { externalServices } from "@/utils/servicesRoutes"
import { useState } from "react"
import { useCookies } from "react-cookie"
import GenericModalComponent from "./GenericModalComponent"

export default function LoginFormComponent() {

  // estados del error y mensaje del modal
  const [isError, setIsError] = useState(false)
  const [responseMessage, setResponseMessage] = useState("")

  const [cookie, setCookie] = useCookies(['accessToken'])

  async function handleSubmit(e: any) {
    e.preventDefault()
    const payload = {
      email: e.target.email.value,
      password: e.target.password.value
    }

    console.log(payload)

    await handlePostExternal(externalServices.login, payload).then((res) => {
      console.log(res)
      setResponseMessage(res.message)

      // se guarda el token en el local storage y en las cookies
      localStorage.setItem('accessToken', res.data.token)
      setCookie('accessToken', JSON.stringify(res.data.token), { path: '/', sameSite: true, maxAge: 86400 })

      setIsError(false)
    }).catch((err) => {
      console.log(err)
      setResponseMessage(err.message)
      setIsError(true)
    }).finally(() => {
      document.getElementById("modal")!.style.display = "flex";
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='flex flex-col gap-6 text-primary'>
        <input required name="email" id="email" className='p-2 border rounded-md shadow-sm border-slate-300' type="text" placeholder='Correo' />
        <input required name="password" id="password" className='p-2 border rounded-md shadow-sm border-slate-300' type="password" placeholder=' Contraseña' />
        <button className='px-4 py-2 font-bold border rounded-lg hover:text-light bg-gradient-to-br from-orange-600 to-yellow-300 hover:to-blue-500'>Iniciar sesión</button>
      </form>

      <GenericModalComponent destinyAfterClose={isError ? '/login' : '/'} message={responseMessage} isError={isError} />

    </div>
  )
}