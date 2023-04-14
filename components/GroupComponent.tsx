import Link from "next/link"

interface IGroupComponent {
  group: string,
  teams: Array<any>
}

export default function GroupComponent({ group, teams }: IGroupComponent) {

  const sortedTeams = [...teams].sort((a, b) => {
    if (a.pts !== b.pts) {
      return b.pts - a.pts
    } else {
      return b.gd - a.gd
    }
  })

  return (
    <div className="flex flex-col gap-5">
      <p className="text-2xl font-bold">Grupo {group}</p>
      <Link href={`/groups/${3}`}>
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
                teams.map(({ name_en, team_id }) => (
                  <tr key={team_id} className="text-center border-t border-b border-slate-400">
                    <td className="font-bold">{name_en}</td>
                    <td className="font-bold">3</td>
                    <td>1</td>
                    <td>2</td>
                    <td>0</td>
                    <td>3</td>
                    <td>2</td>
                    <td>1</td>
                    <td className="font-bold">5</td>
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