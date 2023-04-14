
import { NavbarComponent, GroupComponent } from "../../../components";
import { fontInter } from "../../../utils/fonts";
import { GetServerSidePropsContext } from "next";
import { ServerSideProps } from "@/utils/interfaces/global";
import { parseCookies } from "@/utils/server";
import { externalServices } from "@/utils/servicesRoutes";
import { handlerGetExternal, swrFetcher } from "@/utils/handlers/fetch";
import { useAuthData } from "@/contexts/auth";
import { useRouter } from "next/router";
import useSWR from 'swr'

export default function GroupDetail({ success, message }: ServerSideProps) {
  // console.log(data, error, success, message)

  const router = useRouter()
  const { groupId } = router.query

  const { token } = useAuthData()

  const { data, error } = useSWR([`${externalServices.proxy}${externalServices.standings}/${groupId}`, token], ([url, token]) => swrFetcher(url, token))

  if (error) {
    return <div>Error al cargar la data</div>
  }

  if (!data) {
    return <div>Cargando...</div>
  }

  console.log(data.data[0])

  return (
    <>
      <NavbarComponent />
      <section className={`${fontInter.className} text-primary gap-10 flex flex-col h-screen px-20 py-32 bg-primary`}>
        <h1 className="text-4xl font-bold text-center">Grupo {groupId}</h1>

        <GroupComponent group={data.data[0].group} teams={data.data[0].teams} />
      </section>
    </>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { groupId } = context.params!

  const cookies = parseCookies(context.req)

  if (!cookies || !cookies.accessToken) {
    return {
      props: {
        error: true,
        message: 'No tienes permisos para consumir este servicio'
      }
    }
  }

  const token: string = JSON.parse(cookies.accessToken)

  console.log(groupId)
  console.log(token.trim())

  let propsObject: ServerSideProps = {
    data: "",
    error: false,
    success: false,
    message: ""
  }

  await handlerGetExternal(externalServices.standings, token.trim()).then((res) => {
    propsObject = {
      data: {
        res: res.data,
        groupId
      },
      error: false,
      success: true,
      message: ""
    }
  }).catch((err) => {
    console.log(err)
    propsObject = {
      data: {
        groupId
      },
      error: true,
      success: false,
      message: err.message
    }
  })

  return {
    props: propsObject
  }


}