import { Sidebar } from '../components/Sidebar'
import '../styles/global.css'

function MyApp({ Component, pageProps }) {

  return (
    <div className='wrapper'>
      <Sidebar/>
      <Component {...pageProps}/>
    </div>
 )
}

export default MyApp
