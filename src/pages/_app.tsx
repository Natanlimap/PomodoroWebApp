import { Sidebar } from '../components/Sidebar'
import { UserProvider } from '../contexts/UserContext'
import '../styles/global.css'

function MyApp({ Component, pageProps }) {

  return (
    <div className='wrapper'>
      <Sidebar/>
      <UserProvider>
        <Component {...pageProps}/>

      </UserProvider>
    </div>
 )
}

export default MyApp
