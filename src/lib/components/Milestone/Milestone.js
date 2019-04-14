import Slider, { Range } from 'rc-slider'
import 'rc-slider/assets/index.css'
import React from 'react'
import daiLarge from '../../assets/images/dai-large.png'
import griff from '../../assets/images/griff.png'
import heroImage from '../../assets/images/milestone.png'
import profile from '../../assets/images/profile.png'
import { toggleWallet } from '../../stores/navigation'
import EcosystemNavbar from '../EcosystemNavbar'
import PrimaryButton from '../PrimaryButton'
import './Milestone.scss'

export class Milestone extends React.Component {
  state = {
    name: 'Plant 100 trees',
    description:
      "There's a patch of sparse forest near my village and I plan to organize a neighbour initiative to plant 100 trees over one weekend.",
    campaignName: 'Planting seeds in South Indonesia Forests',
    amountRequested: '1500',
    amountSymbol: 'xDAI',
    amountDonated: 0,
    momentumAvailable: 7,
    momentumAllocated: 0,
    momentumSymbol: '💪',
    isDone: false,
    isValidated: false,
  }

  isFunded() {
    return (
      this.state.amountDonated + this.getAmountPledged() >=
      this.state.amountRequested
    )
  }

  getAmountPledged() {
    return this.momentumToAmount(this.state.momentumAllocated)
  }

  getMomentumRequired() {
    return this.getTotalMomentumRequired() - this.state.amountDonated * 10
  }

  getTotalMomentumRequired() {
    return this.state.amountRequested * 10
  }

  momentumToAmount(momentum) {
    return momentum * 177
  }

  doBond() {
    this.setState({ momentumAllocated: this.state.momentumAllocated + 1 })
    this.setState({ momentumAvailable: this.state.momentumAvailable - 1 })
  }

  doDonate10() {
    this.setState({ amountDonated: 261 })
  }

  render() {
    const { milestone, campaign } = this.props

    if (milestone.title !== this.state.name) {
      this.state.name = milestone.title
      this.state.description = milestone.description
      // this.state.amountRequested = milestone.maxValue + ''
      this.state.campaignName = campaign.title
    }

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
  constructor(props) {
    super(props)
    this.milestone = props.milestone
    this.state = {
      display: '',
    }
  }

  render() {
    const { state } = this.state
    return (
      <div>
        <EcosystemNavbar />
        <div
          className="milestone-header"
          style={{
            background: `rgba(0, 0, 0, 0) url(${heroImage}) repeat scroll 0% 0% / cover`,
          }}
        >
          <div>
            <div>Campaign: {this.milestone.state.campaignName}</div>
            <h1>{this.milestone.state.name}</h1>
            <p>{this.milestone.state.description}</p>
            <a
              target="_blank"
              href="https://commons.oceanprotocol.com/asset/did:op:1677c01166e3408a915a4340e4251e8a3adcf96296a4414eb55baee112ae8899 "
            >
              https://commons.oceanprotocol.com/asset/did:op:1677c01166e3408a915a4340e4251e8a3adcf96296a4414eb55baee112ae8899{' '}
            </a>
            <MilestoneActionButtons milestone={this.milestone} />
          </div>
        </div>
      </div>
    )
  }
}

class MilestoneActionButtons extends React.Component {
  constructor(props) {
    super(props)
    this.milestone = props.milestone
    this.state = {
      display: '',
    }
  }

  renderNonFunded() {
    return (
      <div>
        {!this.milestone.isFunded() && this.state.display === '' && (
          <div class="milestone-header-buttons">
            <PrimaryButton
              name="Donate to completion"
              onClick={() => this.milestone.doDonate10()}
            />
            {this.milestone.state.momentumAllocated == 0 && (
              <PrimaryButton
                name="Nominate for commons funding"
                onClick={() => this.milestone.doBond()}
              />
            )}
            {this.milestone.state.momentumAllocated > 0 &&
              this.milestone.state.momentumAvailable > 0 && (
                <PrimaryButton
                  name={'Support ' + this.milestone.state.momentumSymbol}
                  onClick={() => this.milestone.doBond()}
                />
              )}
            {this.milestone.state.momentumAllocated > 0 &&
              this.milestone.state.momentumAvailable <= 0 && (
                <PrimaryButton
                  name={'Support ' + this.milestone.state.momentumSymbol}
                  classNames="disabled"
                />
              )}

            <p>
              of {this.milestone.state.momentumAvailable}{' '}
              {this.milestone.state.momentumSymbol} available
            </p>
          </div>
        )}
      </div>
    )
  }

  renderFunded() {
    return (
      <div className="milestone-header-buttons">
        {!this.milestone.state.isDone && (
          <PrimaryButton
            name="Mark complete"
            onClick={() => this.milestone.setState({ isDone: true })}
          />
        )}
        {this.milestone.state.isDone && !this.milestone.state.isValidated && (
          <div style={{ display: 'flex' }}>
            <PrimaryButton
              name="Approve"
              onClick={() => this.milestone.setState({ isValidated: true })}
            />
            <button className="reject-button">Reject</button>
          </div>
        )}
        {this.milestone.state.isDone && this.milestone.state.isValidated && (
          <PrimaryButton name="Redeem" onClick={() => toggleWallet()} />
        )}
      </div>
    )
  }

  render() {
    return this.milestone.isFunded()
      ? this.renderFunded()
      : this.renderNonFunded()
  }
}

export class MilestoneInfo extends React.Component {
  constructor(props) {
    super(props)
    this.milestone = props.milestone
  }

  render() {
    console.log(this.milestone)
    return (
      <div className="milestone-info">
        <div className="column">
          <h2>Description & Updates</h2>
          <div>
            <h3>Creator</h3>
            <div className="user-container">
              <img src={profile} />
              <div>Kay</div>
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
          </div>
          {this.milestone.state.isDone && (
            <div>
              <h3>Milestone has been marked as completed</h3>
            </div>
          )}
          {this.milestone.state.isValidated && (
            <div>
              <h3>Milestone has been approved by reviewer</h3>
            </div>
          )}
        </div>

        <div className="column column-right">
          <h2>Details</h2>
          <div>
            <h3>Reviewer</h3>
            <div className="user-container">
              <img src={griff} />
              <div>Griff Green</div>
            </div>
            <div className="little-info">
              Person reviewing the actual completion of the Milestone
            </div>
          </div>
          <div>
            <h3>Funds Requested</h3>
            <div className="funds-requested">
              <img src={daiLarge} />
              {this.milestone.state.amountRequested}{' '}
              {this.milestone.state.amountSymbol}
            </div>
            <div className="little-info">
              The maximum amount of DAI that can be donated to this Milestone.
              Based on the requested amount in fiat.
            </div>
          </div>
          {!this.milestone.isFunded() && (
            <div>
              <h3>Progress</h3>
              <div>
                Donated {this.milestone.state.amountDonated}{' '}
                {this.milestone.state.amountSymbol} /{' '}
                {this.milestone.state.amountRequested}{' '}
                {this.milestone.state.amountSymbol}
              </div>
              <Slider
                value={this.milestone.state.amountDonated}
                max={this.milestone.state.amountRequested}
              />
              <div>
                Pledged {this.milestone.getAmountPledged()}{' '}
                {this.milestone.state.amountSymbol} /{' '}
                {this.milestone.state.amountRequested}{' '}
                {this.milestone.state.amountSymbol} via{' '}
                {this.milestone.state.momentumSymbol}
              </div>
              <Range
                value={[-this.milestone.getAmountPledged(), 0]}
                min={-this.milestone.state.amountRequested}
                max="0"
              />
            </div>
          )}
          {this.milestone.isFunded() && (
            <p class="funded">This milestone has been fully funded!</p>
          )}
          <div>
            <h3>Date of milestone</h3>
            <div>14th April 2019</div>
            <div className="little-info">
              This date defines DAI-fiat converstoin rate
            </div>
          </div>
        </div>
      </div>
    )
  }
}
