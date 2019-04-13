import { useStore } from 'laco-react'
import React from 'react'
import { render } from 'react-dom'
import { EcosystemHeader } from './lib'
import './lib/assets/styles/main.scss'
import Commons from './lib/screens/Commons'
import { NavStore } from './lib/stores/navigation'

const App = () => {
  const { state } = useStore(NavStore)

  return (
    <div>
      <EcosystemHeader
        title="Scaling Wildlife Protection"
        subtitle="COMMONS"
        description="This is a description... Trying to make it long hello there!"
      />
      {state === 'commons' && <Commons />}
    </div>
  )
}

render(<App />, document.getElementById('root'))
