import '../lib/helipad/helipad.css'
import '../styles/channel.css'
import '../styles/globals.css'
import '../styles/layout.css'
import '../styles/signin.css'
import '../styles/controls/controls.css'
import '../styles/controls/crowd.css'
import '../styles/controls/logo.css'
import '../styles/controls/screen.css'
import '../styles/controls/start.css'
import '../styles/controls/time.css'
import '../styles/controls/upload.css'

function MyApp({ Component, pageProps }) {
  console.log(pageProps)
  return (
  	<Component {...pageProps} />
  )
}

export default MyApp
