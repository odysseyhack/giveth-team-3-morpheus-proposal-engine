import { useStore } from 'laco-react'
import React from 'react'
import headerImage from '../assets/images/campaign-header.jpg'
import '../assets/styles/main.scss'
import { EcosystemHeader, Milestones } from '../index'
import { NavStore } from '../stores/navigation'

export default () => {
  const { campaigns, campaignIndex } = useStore(NavStore)

  const campaign = campaigns[campaignIndex]
  return (
    <div>
      <EcosystemHeader
        title={campaign.title}
        subtitle="CAMPAIGN"
        description={campaign.description}
        image={headerImage}
        state="campaign"
        amountDonated="40,000"
      />
      <div className="milestones-wrapper">
        <Milestones milestones={campaign.milestones} />
      </div>
    </div>
  )
}
