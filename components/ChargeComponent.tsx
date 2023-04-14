import GenericModalComponent from "./GenericModalComponent";

export default function ChargeComponent() {
  return <div className="fixed z-50 flex flex-col items-center justify-center w-full h-screen bg-primary">
    <p className="text-3xl font-bold text-primary">Estamos cargando los resultados...</p>
    <GenericModalComponent isError={true} destinyAfterClose="/" message="Ha ocurrido un error" />
  </div>
}