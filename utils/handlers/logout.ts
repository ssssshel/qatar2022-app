import cookie from 'cookie'

export default function handlerLogout() {
  localStorage.removeItem('accessToken')
  document.cookie = 'accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'

  window.location.reload()
}