import React from 'react'
import '../assets/styles/main.scss'
import { MilestoneHeader, MilestoneInfo, MilestoneDonations } from '../components/Milestone'

export default () => (
  <div>
    <MilestoneHeader />
    <div className="milestone-body">
      <MilestoneInfo />
      <MilestoneDonations />
    </div>
  </div>
)
