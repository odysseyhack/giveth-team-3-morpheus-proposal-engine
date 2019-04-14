import React from 'react'
import EcosystemNavbar from '../EcosystemNavbar'
import PrimaryButton from '../PrimaryButton'
import './Milestone.scss'

export class Milestone extends React.Component {
  state = {
    name: 'Plant 100 trees',
    description: 'There\'s a patch of sparse forest near my village and I plan to organize a neighbour initiative to plant 100 trees over one weekend.',
    campaignName: 'Planting seeds in South Indonesia Forests',
    askedAmount: '2000',
    askedSymbol: 'xDAI',
    donatedAmount: '0',
    momentumAllocated: '0',
    momentumSymbol: 'VIC',
    isDone: false,
    isValidated: false
  }

  isFunded () {
    return (this.getMomentumRequired() - this.state.momentumAllocated) <= 0;
  }

  getMomentumRequired () {
    return this.getTotalMomentumRequired() - (this.state.donatedAmount * 10);
  }

  getTotalMomentumRequired () {
    return (this.state.askedAmount * 10);
  }

  doBelieve100 () {
    this.setState({momentumAllocated: this.state.momentumAllocated + 100})
  }

  doDonate10 () {
    this.setState({donatedAmount: this.state.donatedAmount + 10})
  }

  render() {
    return (
      <div className="milestone">
        <MilestoneHeader milestone={this} />
        <div className="milestone-body">
          <MilestoneInfo milestone={this} />
        </div>
      </div>
    )
  }
}

export class MilestoneHeader extends React.Component {
  constructor (props) {
    super(props)
    this.milestone = props.milestone
    this.state = {
      display: ''
    }
  }

  render() {
    const { state } = this.state
    return (
      <div>
        <EcosystemNavbar />
        <div className="milestone-header">
          <div>
            <div>
              Campaign: {this.milestone.state.campaignName}
            </div>
            <h1>{this.milestone.state.name}</h1>
            <p>{this.milestone.state.description}</p>
            <MilestoneActionButtons milestone={this.milestone}/>
            <div>Needs a total allocation of +{this.milestone.getTotalMomentumRequired()} {this.milestone.state.momentumSymbol} tokens</div>
          </div>
        </div>
      </div>
    )
  }
}

class MilestoneActionButtons extends React.Component {
  constructor (props) {
    super(props)
    this.milestone = props.milestone
    this.state = {
      display: ''
    }
  }

  renderNonFunded () {
    return (
      <div>
        {!this.milestone.isFunded() && this.state.display === '' && (
          <div class="milestone-header-buttons">
            {this.milestone.state.momentumAllocated == 0 && (
              <PrimaryButton
                name="Nominate for commons funding"
                onClick={() => this.milestone.doBelieve100()}
              />
            )}
            {this.milestone.state.momentumAllocated > 0 && (
              <PrimaryButton
                name={"Believe 100 " + this.milestone.state.momentumSymbol}
                onClick={() => this.milestone.doBelieve100()}
              />
            )}
            <PrimaryButton
              name={"Donate 10 " + this.milestone.state.askedSymbol}
              onClick={() => this.milestone.doDonate10()}
            />
          </div>
        )}
      </div>
    )
  }

  renderFunded () {
    return (
      <div className="milestone-header-buttons">
        {!this.milestone.state.isDone && (
          <PrimaryButton name="Mark complete"
            onClick={() => this.milestone.setState({ isDone: true })}/>
        )}
        {this.milestone.state.isDone && !this.milestone.state.isValidated && (
          <PrimaryButton name="Validate"
            onClick={() => this.milestone.setState({ isValidated: true })}/>
        )}
        {this.milestone.state.isDone && this.milestone.state.isValidated && (
          <PrimaryButton name="Redeem"
            onClick={() => alert("This would open the UI to collect donations and token.")}/>
        )}
      </div>
    )
  }

  render () {
    return this.milestone.isFunded()? this.renderFunded() : this.renderNonFunded()
  }
}

export class MilestoneInfo extends React.Component {
  constructor (props) {
    super(props)
    this.milestone = props.milestone
  }

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
            <div>{this.milestone.state.askedAmount} {this.milestone.state.askedSymbol}</div>
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
