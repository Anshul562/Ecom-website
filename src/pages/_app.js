import { Provider } from 'react-redux'
import { store } from '../app/store'
import '../styles/globals.css'
import "../components/Header.css"
import {Provider as AuthProvider} from "next-auth/client"
import Header from '../components/Header'


const MyApp = ({ Component, pageProps }) => {
  return (
    <div className="app-container">
    <AuthProvider session={pageProps.session}>
    <Provider store={store}>
      <div className='left-area'>
        <Header/>
      </div>
      
      <Component {...pageProps} />
    </Provider>
    </AuthProvider>
    </div>
  )
}

export default MyApp
