import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import ErrorBoundary from '../components/ErrorBoundary'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <ErrorBoundary>
          <Component {...pageProps} />
      </ErrorBoundary>
    </Layout>
  )
}

export default MyApp
