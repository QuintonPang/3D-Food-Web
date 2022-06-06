import { createRoot } from 'react-dom/client'
// import { Logo } from '@pmndrs/branding'
import './styles.css'
import App from './App'

const visibleComponents = [
  'apple',
  'rice',
  'burger'
]

function Dots() {
  
  return (
    <>
      <div id='dotPanel'>
        {visibleComponents.map((comp,i) => {
          return <a id="dot" key={i} href={`/${comp}`} style={{ background:window.location.href.split('/')[window.location.href.split('/').length-1]=== comp ? 'red' : '#fff' }} />
        })}
      </div>
      <span style={{ color: 'white' }}>{window.location.href.split('/')[-1]}</span>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <>
    <App/>
    <Dots/>
    <div style={{ position: 'absolute', top: 40, left: 40 }}>
      <a id="more-projects"href="https://www.youtube.com/channel/UCOHCT_mu2kSbeM1Pn3O7pAA">More Projects</a>
    </div>
    <div style={{ pointerEvents: 'none', position: 'absolute', bottom: 0, left: 0, right: 0, display: 'flex', gap: 35, alignItems: 'center', padding: 40 }}>
      {/* <Logo style={{ width: 30 }} /> */}
      <div style={{ position: 'relative', flex: 1, marginLeft: 35, display: 'flex', alignItems: 'flex-end', gap: 35, justifyContent: 'space-between' }}>
        <div>
          Made By
          <br />
          Quinton Pang
        </div>
        <div>06/06/2022</div>
      </div>
    </div>
    </>

)