import '../assets/styles/reset.scss'
import '../assets/styles/designTokens.scss'
import '../assets/styles/globals.scss'

import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '../store/store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
