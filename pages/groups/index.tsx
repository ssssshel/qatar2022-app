import { GetServerSideProps, GetServerSidePropsContext, } from "next"
import { NavbarComponent, GroupComponent } from "../../components"
import { fontInter } from '../../utils/fonts'
import { parseCookies } from "@/utils/server"
import { handlerGetExternal } from "@/utils/handlers/fetch"
import { externalServices } from "@/utils/servicesRoutes"
import { FunctionComponent } from "react"
import { ServerSideProps } from "@/utils/interfaces/global"

const GroupsMenu: FunctionComponent<ServerSideProps> = ({ data, error, success, message }) => {

  console.log(data, error, success, message)
  return (
    <>
      <NavbarComponent />

      <section className={`${fontInter.className} text-primary gap-10 flex flex-col w-screen px-20 py-32 bg-primary`}>
        <h1 className="text-4xl font-bold text-center">Grupos</h1>
        <div className="grid grid-cols-2 gap-14">
          <GroupComponent />
          <GroupComponent />
          <GroupComponent />
          <GroupComponent />
          <GroupComponent />
          <GroupComponent />

        </div >
      </section >
    </>
  )
}

export default GroupsMenu

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const cookies = parseCookies(context.req)


  if (!cookies || !cookies.accessToken) {
    return {
      props: {
        error: true,
        message: 'No tienes permisos para acceder a esta página'
      }
    }
  }

  const token = JSON.parse(cookies.accessToken)


  console.log(token)

  let propsObject: ServerSideProps = {
    data: "",
    error: false,
    success: false,
    message: ""

  }

  await handlerGetExternal(externalServices.standings, token).then((res) => {

    propsObject = {
      data: res.data,
      error: false,
      success: true,
      message: ""
    }
  }).catch((err) => {

    propsObject = {
      data: "",
      error: true,
      success: false,
      message: err.message
    }
  })

  return {
    props: propsObject
  }
}