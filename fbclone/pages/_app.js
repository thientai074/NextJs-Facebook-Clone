import '../styles/globals.css'
import {Provider} from 'next-auth/client'
import {Provider as ProviderRedux} from 'react-redux'
import store from '../redux/index'

function MyApp({ Component, pageProps }) {
  return (
    <ProviderRedux store={store}>
    <Provider session={pageProps.session}>
     
        <Component {...pageProps} />
      
    </Provider>
    </ProviderRedux>
  )
  
}

export default MyApp
