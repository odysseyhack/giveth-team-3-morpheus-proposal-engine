import React from 'react'
import headerImage from '../assets/images/campaign-header.jpg'
import '../assets/styles/main.scss'
import { MilestoneHeader, MilestoneInfo } from '../components/Milestone'

export default () => (
  <div>
    <MilestoneHeader />
    <div className="milestone-body">
      <MilestoneInfo />
      <div>
      donations
      </div>
    </div>
  </div>
)
