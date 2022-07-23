import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import ErrorBoundary from '../components/ErrorBoundary'
import { ConstextProvider } from '../context/store'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (        
    <ConstextProvider data={pageProps}>
      <ErrorBoundary>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ErrorBoundary>
    </ConstextProvider>
    
  )
}
