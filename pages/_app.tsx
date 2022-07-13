import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import ErrorBoundary from '../components/ErrorBoundary'
import { persistor,store } from '../redux/store/Store'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

export default function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Layout>
      <ErrorBoundary> 
        <Provider store={store()}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
        </Provider>
      </ErrorBoundary>
    </Layout>
  )
}
