import { GetServerSideProps, GetServerSidePropsContext, } from "next"
import { NavbarComponent, GroupComponent } from "../../components"
import { fontInter } from '../../utils/fonts'
import { parseCookies } from "@/utils/server"
import { handlerGetExternal } from "@/utils/handlers/fetch"
import { externalServices } from "@/utils/servicesRoutes"
import { FunctionComponent, useState } from "react"
import { ServerSideProps } from "@/utils/interfaces/global"
import { useAuthData } from "@/contexts/auth"
import useSwr from 'swr'

const fetcher = (url: string, token: string) =>
  fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json())

const GroupsMenu: FunctionComponent<ServerSideProps> = ({ success, message }) => {
  // console.log(data, error, success, message)

  const { token } = useAuthData()

  const { data, error } = useSwr([externalServices.proxy + externalServices.standings, token], ([url, token]) => fetcher(url, token))

  if (error) {
    return <div>Error al cargar la data</div>
  }

  if (!data) {
    return <div>Cargando...</div>
  }

  console.log(data.data)
  // async function fetch() {
  //   await handlerGetExternal(externalServices.standings, token).then((res) => {
  //     console.log(res)
  //     groups = res.data
  //   }).catch((err) => {
  //     console.log(err)

  //   })
  // }

  return (
    <>
      <NavbarComponent />

      <section className={`${fontInter.className} text-primary gap-10 flex flex-col w-screen min-h-screen px-20 py-32 bg-primary`}>
        <h1 className="text-4xl font-bold text-center">Grupos</h1>
        <div className="grid grid-cols-2 gap-14">
          {
            data.data.map((group: any) => (
              <GroupComponent key={group._id} {...group} />
            ))
          }

        </div >
      </section >
    </>
  )
}

export default GroupsMenu

// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   const cookies = parseCookies(context.req)


//   if (!cookies || !cookies.accessToken) {
//     return {
//       props: {
//         error: true,
//         message: 'No tienes permisos para consumir este servicio'
//       }
//     }
//   }

//   const token: string = JSON.parse(cookies.accessToken)


//   console.log(token.trim())

//   let propsObject: ServerSideProps = {
//     data: "",
//     error: false,
//     success: false,
//     message: ""

//   }

//   await handlerGetExternal(externalServices.standings, token.trim()).then((res) => {

//     propsObject = {
//       data: res.data,
//       error: false,
//       success: true,
//       message: ""
//     }
//   }).catch((err) => {
//     console.log(err)
//     propsObject = {
//       data: "",
//       error: true,
//       success: false,
//       message: err.message
//     }
//   })

//   return {
//     props: propsObject
//   }
// }