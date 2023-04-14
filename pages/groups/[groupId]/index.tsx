

import { NavbarComponent, GroupComponent } from "../../../components";
import { fontInter } from "../../../utils/fonts";

export default function GroupDetail({ params }: { params: { groupId: string } }) {
  const id = params.groupId
  console.log(id)
  return (
    <>
      <NavbarComponent />
      <section className={`${fontInter.className} text-primary gap-10 flex flex-col h-screen px-20 py-32 bg-primary`}>
        <h1 className="text-4xl font-bold text-center">{id}</h1>

        <GroupComponent />
      </section>
    </>
  )
}