import { externalServices } from "@/utils/servicesRoutes"
import useSWR from 'swr'
import { useAuthData } from "@/contexts/auth"
import { swrFetcher } from "@/utils/handlers/fetch"
import ErrorComponent from "./ErrorComponent"
import ChargeComponent from "./ChargeComponent"
import { useRouter } from "next/router"
import Image from "next/image"

export default function MatchesComponent() {

  const { token } = useAuthData()

  const router = useRouter()
  const { groupId } = router.query

  // Se consulta al endpoint de partidos

  const { data, error } = useSWR([`${externalServices.proxy}${externalServices.match}`, token], ([url, token]) => swrFetcher(url, token), { revalidateOnFocus: false })

  if (error) {
    return <ErrorComponent />
  }

  if (!data) {
    return <ChargeComponent />
  }

  // se filtran los resultados de la consulta de acuerdo a los que pertenecen al grupo actual
  const groupMatches = data.data.filter((match: any) => match.group === groupId)
  console.log(groupMatches)

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl font-bold text-center">Partidos</h1>
      <div className="flex flex-col gap-5">
        {
          groupMatches.map(({ _id, away_team_en, away_score, home_team_en, home_score, local_date, away_flag, home_flag }: any) => (
            <div key={_id} className="grid grid-cols-3 px-4 py-2 text-lg rounded-md shadow-md">
              <div className="flex flex-row col-span-1 gap-3">
                <Image src={home_flag} alt="w" width={30} height={10} />
                <p>{home_score}</p>
                <p>{home_team_en}</p>
              </div>
              <div className="flex flex-col items-center col-span-1">
                <p>{local_date}</p>
              </div>
              <div className="flex flex-row justify-end col-span-1 gap-3">
                <p>{away_team_en}</p>
                <p>{away_score}</p>
                <Image src={away_flag} alt="w" width={30} height={10} />
              </div>
            </div>

          ))
        }
      </div>
    </div>
  )
}