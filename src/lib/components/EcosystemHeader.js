import React from 'react'
import griff from '../assets/images/griff.jpg'
import EcosystemNavbar from './EcosystemNavbar'
import Givethers from './Givethers'
import PrimaryButton from './PrimaryButton'

const EcosystemHeader = ({
  title,
  subtitle,
  description,
  image,
  state,
  amountDonated,
}) => {
  return (
    <div>
      <EcosystemNavbar />
      <div
        className="eco-header"
        style={{ background: `url(${image})`, backgroundSize: 'cover' }}
      >
        <div className="eco-header-content">
          <h3>{subtitle}</h3>
          <h1>{title}</h1>
          <div className="description">
            <p>{description}</p>
          </div>
          <div className="donate-field">
            <div>
              <PrimaryButton name="Donate xDAI" showDai />
              <Givethers count={488} />
            </div>
            {state === 'campaign' && (
              <div>
                Griff Green is the reviewer
                <img src={griff} style={{ marginLeft: '1rem' }} />
              </div>
            )}
          </div>
          <p className="how-much">{amountDonated} xDAI donated</p>
        </div>
        {/* <div className="eco-nav-bar">
          <button selected={true}>ABOUT CAMPAIGN</button>
          <button>MILESTONES</button>
          <button>COMMUNITY</button>
          <button>VOTING</button>
        </div> */}
      </div>
    </div>
  )
}

export default EcosystemHeader
