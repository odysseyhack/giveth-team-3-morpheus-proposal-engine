import { useStore } from 'laco-react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import React, { useState } from 'react'
import { render } from 'react-dom'
import cross from './lib/assets/images/cross.svg'
import './lib/assets/styles/main.scss'
import PrimaryButton from './lib/components/PrimaryButton'
import Campaign from './lib/screens/Campaign'
import Commons from './lib/screens/Commons'
import Milestone from './lib/screens/Milestone'
import { NavStore, toggleWallet } from './lib/stores/navigation'

const App = () => {
  const [values, setValues] = useState({ sliderValue: 0, xdai: 261, rft: 1239 })
  const { state, showWallet } = useStore(NavStore)
  const convertedDai = values.sliderValue - (values.sliderValue / 100) * 2.5

  return (
    <div>
      <div className={showWallet ? 'wallet active' : 'wallet'}>
        <img
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            cursor: 'pointer',
            zIndex: 10,
          }}
          src={cross}
          onClick={() => toggleWallet()}
        />
        <div className="content">
          <h3 className="my-wallet">My wallet balance</h3>
          <p>${values.xdai} in xDAI</p>
          <p>${values.rft} in RFT</p>
          <p>${values.xdai + values.rft} total</p>
          <div className="convert-tokens">
            <h3>Convert from RFT to xDAI</h3>
            <Slider
              value={values.sliderValue}
              max={values.rft}
              onChange={value => {
                if (value) {
                  setValues({ ...values, sliderValue: value })
                }
              }}
            />
            <PrimaryButton
              name={`You'll get $${convertedDai} in xDAI`}
              onClick={() => {
                console.log(2, {
                  ...values,
                  xdai: values.xdai + convertedDai,
                  rft: values.rft - values.sliderValue,
                })

                setTimeout(() => {
                  setValues({
                    ...values,
                    xdai: values.xdai + convertedDai,
                    rft: values.rft - values.sliderValue,
                  })
                }, 100)
              }}
            />
          </div>
        </div>
      </div>
      {state === 'commons' && <Commons />}
      {state === 'campaign' && <Campaign />}
      {state === 'milestone' && <Milestone />}
    </div>
  )
}

render(<App />, document.getElementById('root'))
