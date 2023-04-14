import cookie from 'cookie'

export function parseCookies(req: any) {
  // console.log(req.headers)
  return cookie.parse(req ? req.headers.cookie || "" : document.cookie)
}