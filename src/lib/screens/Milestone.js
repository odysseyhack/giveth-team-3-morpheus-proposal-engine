import React from 'react'
import headerImage from '../assets/images/campaign-header.jpg'
import '../assets/styles/main.scss'
import { EcosystemHeader } from '../index'

export default () => (
  <div>
    <EcosystemHeader
      title="Plant 100 trees"
      subtitle="CAMPAIGN"
      description="This is a description... Trying to make it long hello there!"
      image={headerImage}
    />
  </div>
)
