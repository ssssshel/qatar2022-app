const apiCup2022v1 = 'http://api.cup2022.ir/api/v1'

export const externalServices = {
  proxy: 'https://cors-anywhere.herokuapp.com/', // Activar temporalmente SOLO para desarrollo
  login: apiCup2022v1 + '/user/login', //POST
  register: apiCup2022v1 + '/user', //POST
  standings: apiCup2022v1 + '/standings' //GET
}