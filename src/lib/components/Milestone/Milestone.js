import React from 'react'
import EcosystemNavbar from '../EcosystemNavbar'
import PrimaryButton from '../PrimaryButton'
import './Milestone.scss'

export class Milestone extends React.Component {
  render() {
    return (
      <div className="milestone">
        <MilestoneHeader />
        <div className="milestone-body">
          <MilestoneInfo />
          <div>donations</div>
        </div>
      </div>
    )
  }
}

export class MilestoneHeader extends React.Component {
  state = {
    state: '',
    fieldValue: '',
  }
  render() {
    const { state } = this.state
    return (
      <div>
        <EcosystemNavbar />
        <div className="milestone-header">
          <div>
            <div>Campaign: Planting seeds in South Indonesia Forests</div>
            <h1>Plant 100 trees</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            {state === '' && (
              <div class="milestone-header-buttons">
                <PrimaryButton
                  name="Nominate for commons funding"
                  onClick={() => this.setState({ state: 'nominate' })}
                />
                <PrimaryButton
                  name="Donate"
                  onClick={() => this.setState({ state: 'donate' })}
                />
              </div>
            )}
            {state === 'nominate' && (
              <div className="nominate-field">
                <input
                  placeholder="Enter staking amount in VIC"
                  onChange={e => this.setState({ fieldValue: e.target.value })}
                />
                <PrimaryButton name="Nominate milestone" />
                <PrimaryButton
                  name="Cancel"
                  onClick={() => this.setState({ state: '' })}
                />
              </div>
            )}
            {state === 'donate' && (
              <div className="nominate-field">
                <input
                  placeholder="Enter amount in xDAI"
                  onChange={e => this.setState({ fieldValue: e.target.value })}
                />
                <PrimaryButton name="Donate to milestone" />
                <PrimaryButton
                  name="Cancel"
                  onClick={() => this.setState({ state: '' })}
                />
              </div>
            )}
            <div>Needs staking 100+ VIC tokens</div>
          </div>
        </div>
      </div>
    )
  }
}

export class MilestoneInfo extends React.Component {
  render() {
    return (
      <div className="milestone-info">
        <div className="column">
          <h2>Description & Updates</h2>
          <div>
            <h3>Creator</h3>
            <div className="user-container">
              <div className="pic"></div>
              <div>Anonymous user</div>
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lobortis lorem sapien, at rutrum orci viverra non. Donec vitae odio suscipit, suscipit eros at, auctor justo. Sed sit amet magna non elit hendrerit pharetra. Nullam imperdiet ultrices hendrerit. Nullam tempor, est sed rhoncus feugiat, augue lacus sodales tortor, suscipit
            </div>
          </div>
          <div>
            <h3>Milestone proposed</h3>
            <div>20 days ago</div>
          </div>
          <div>
            <h3>Milestone nomination initiated</h3>
            <div>10 min ago</div>
          </div>
          <div>
            <h3>Milestone nomination success</h3>
            <div>Waiting...</div>
          </div>
        </div>

        <div className="column column-right">
          <h2>Details</h2>
          <div>
            <h3>Reviewer</h3>
            <div className="user-container">
              <div className="pic"></div>
              <div>Griff Green</div>
            </div>
            <div className="little-info">
              Person reviewing the actual completion of the Milestone
            </div>
          </div>
          <div>
            <h3>Fund Requested</h3>
            <div>2000 xDAI</div>
            <div className="little-info">
              The maximum amount of DAI that can be donated to this Milestone. Based on the requested amount in fiat.
            </div>
          </div>
          <div>
            <h3>Progress</h3>
          </div>
          <div>
            <h3>Date of milestone</h3>
            <div>
              16th March 2019
            </div>
            <div className="little-info">
              This date defines DAI-fiat converstoin rate
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export class MilestoneDonations extends React.Component {
  render () {
    return (
      <div className="milestone-donations">
        <h2>Donations</h2>
        <div className="table">
          <div className="row">
            <div className="cell">Date</div>
            <div className="cell">Status</div>
            <div className="cell">Amount</div>
            <div className="cell">Name</div>
            <div className="cell">Address</div>
          </div>
          <div className="row">
            <div className="cell">08/07/2018</div>
            <div className="cell">Ready for delegation</div>
            <div className="cell">700.000</div>
            <div className="cell">María Gomez</div>
            <div className="cell">0xabc</div>
          </div>
          <div className="row">
            <div className="cell">08/07/2018</div>
            <div className="cell">Ready for delegation</div>
            <div className="cell">700.000</div>
            <div className="cell">María Gomez</div>
            <div className="cell">0xabc</div>
          </div>
          <div className="row">
            <div className="cell">08/07/2018</div>
            <div className="cell">Ready for delegation</div>
            <div className="cell">700.000</div>
            <div className="cell">María Gomez</div>
            <div className="cell">0xabc</div>
          </div>
        </div>
      </div>
    )
  }
}
