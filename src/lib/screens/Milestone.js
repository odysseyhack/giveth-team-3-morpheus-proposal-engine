import { useStore } from 'laco-react'
import React from 'react'
import '../assets/styles/main.scss'
import { Milestone } from '../components/Milestone'
import { NavStore } from '../stores/navigation'

export default () => {
  const { campaigns, campaignIndex, milestoneIndex } = useStore(NavStore)

  return (
    <Milestone
      milestone={campaigns[campaignIndex].milestones[milestoneIndex]}
      campaign={campaigns[campaignIndex]}
    />
  )
}
