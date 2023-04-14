import Link from "next/link"

interface IGroupComponent {
  group: string,
  teams: Array<any>
}

export default function GroupComponent({ group, teams }: IGroupComponent) {

  // Se ordenan a los equipos por puntos, seguido de diferencia de goles y finalmente goles a favor
  const sortedTeams = [...teams].sort((a, b) => {
    if (a.pts !== b.pts) {
      return b.pts - a.pts
    } else {
      if (a.gd !== b.gd) {
        return b.gd - a.gd
      } else {
        return b.gf - a.gf
      }
    }
  })

  return (
    <div className="flex flex-col gap-5">
      <p className="text-2xl font-bold">Grupo {group}</p>
      <Link href={`/groups/${group}`}>
        <div className="border rounded-md shadow-md cursor-pointer hover:shadow-2xl border-slate-400">
          <table align="center" cellPadding={5} className="w-full col-span-1 text-lg border-collapse text-primary" >
            <thead className="bg-slate-300" >
              <tr >
                <th>Equipo</th>
                <th>PJ</th>
                <th>G</th>
                <th>E</th>
                <th>P</th>
                <th>GF</th>
                <th>GC</th>
                <th>DG</th>
                <th>Pts</th>
              </tr>
            </thead>
            <tbody>

              {
                sortedTeams.map(({ name_en, team_id, mp, g, d, l, gf, ga, gd, pts }) => (
                  <tr key={team_id} className="text-center border-t border-b border-slate-400">
                    <td className="font-bold">{name_en}</td>
                    <td className="font-bold">{mp}</td>
                    <td>{g}</td>
                    <td>{d}</td>
                    <td>{l}</td>
                    <td>{gf}</td>
                    <td>{ga}</td>
                    <td>{gd}</td>
                    <td className="font-bold">{pts}</td>
                  </tr>

                ))
              }
            </tbody>
          </table >

        </div>

      </Link>
    </div>
  )
}