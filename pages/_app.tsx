import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '@/contexts/auth'
import { CookiesProvider } from 'react-cookie'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <CookiesProvider>
        <Component {...pageProps} />
      </CookiesProvider>
    </AuthProvider>
  )
}
