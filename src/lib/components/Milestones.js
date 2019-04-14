import React from 'react'
import dai from '../assets/images/dai.png'
import { changeMilestone, changeState } from '../stores/navigation'
import PrimaryButton from './PrimaryButton'

function formatNumber(number) {
  if (number) {
    return Number(number.toFixed(1))
      .toLocaleString()
      .replace('.', ',')
  }
}

const Milestones = ({ milestones }) => (
  <div className="eco-milestones">
    <div className="navbar-wrapper">
      <ul className="navbar">
        <li className="selected">Active</li>
        <li>Paid</li>
        <li>Canceled</li>
        <li>Rejected</li>
      </ul>
      <PrimaryButton name={'Propose a Milestone'} />
    </div>

    <table>
      <tr>
        <td>Name</td>
        <td>Funding Progress</td>
        <td>Actions</td>
      </tr>
      {milestones.map(({ title, subtext, currentValue, maxValue }, idx) => (
        <>
          <tr
            onClick={() => {
              changeState('milestone')
              changeMilestone(idx)
            }}
          >
            <td>
              <p className="title">{title}</p>
              <p className="subtext">{subtext}</p>
            </td>
            <td>
              <div className="progress-text">
                <img src={dai} />
                <p>{formatNumber(currentValue) || 0}</p>
                <p className="grey"> / {formatNumber(maxValue)} xDAI</p>
              </div>
              <div className="progress-bar">
                <div>
                  <div
                    style={{
                      transform: `scaleX(${(currentValue || 0) / maxValue})`,
                    }}
                  />
                </div>
              </div>
            </td>
            <td className="actions">
              <PrimaryButton name="Nominate" />
              <PrimaryButton name="Donate xDAI" showDai />
            </td>
          </tr>
        </>
      ))}
    </table>
  </div>
)

export default Milestones
