import GenericModalComponent from "./GenericModalComponent";
import Link from "next/link";

export default function ChargeComponent() {
  return <div className="fixed z-50 flex flex-col items-center justify-center w-full h-screen gap-6 bg-primary">
    <p className="text-3xl font-bold text-primary">Lo sentimos.</p>
    <p className="text-lg font-bold text-secondary">Ha ocurrido un error al cargar tu contenido</p>
    <Link href={'/'}>
      <button className="px-4 py-2 border rounded-lg h-fit hover:text-light bg-gradient-to-br from-orange-600 to-yellow-300 hover:to-blue-500">Volver</button>
    </Link>
  </div>
}