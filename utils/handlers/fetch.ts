import { IGenericExternalServiceResponse } from "../interfaces/global";
import { externalServices } from "../servicesRoutes";


// Handler generico para fetching de data, permite definir el tipo de renderizado mediante la configuracion del cache
export async function handlerGetExternal(url: string, token?: string): Promise<IGenericExternalServiceResponse> {

  let res: IGenericExternalServiceResponse;

  try {
    const response = await fetch(externalServices.proxy + url, {
      // cache: mode == "SSG" ? 'force-cache' : 'no-store',
      headers: token
        ? {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        }
        : { "Content-Type": "application/json" }
    })

    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);

    }

    res = await response.json()

  } catch (error) {
    throw new Error(`${error}`)
  }

  return res

}

export async function handlePostExternal(url: string, payload: any, token?: string): Promise<IGenericExternalServiceResponse> {
  let res: IGenericExternalServiceResponse;

  try {
    const response = await fetch(externalServices.proxy + url, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: token
        ? {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
          // "Access-Control-Allow-Origin": "http://localhost:3000"
        }
        : {
          "Content-Type": "application/json",
          // "Access-Control-Allow-Origin": "http://localhost:3000"
        },
    })

    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);

    }

    res = await response.json()
  } catch (error) {
    throw new Error(`${error}`)

  }

  return res
}