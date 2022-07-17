import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import ErrorBoundary from '../components/ErrorBoundary'
import { persistor,store } from '../redux/store/store'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (        
    <Provider store={store()}>
      <PersistGate loading={null} persistor={persistor}>
        <ErrorBoundary>
        <Layout>
              <Component {...pageProps} />
        </Layout>
        </ErrorBoundary>
      </PersistGate>
    </Provider>
  )
}
