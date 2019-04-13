import React from 'react'
import headerImage from '../assets/images/campaign-header.jpg'
import gronningen from '../assets/images/gronningen.jpg'
import indonesia from '../assets/images/indonesia.jpg'
import mexico from '../assets/images/mexico-fires.jpg'
import '../assets/styles/main.scss'
import { EcosystemHeader, Milestones } from '../index'

const campaigns = [
  {
    title: 'Indonesia Campaign',
    description: 'Hello there test much description',
    giversCount: 18,
    donationsCount: 32,
    image: indonesia,
  },
  {
    title: 'Indonesia Campaign',
    description: 'Hello there test much description',
    giversCount: 18,
    donationsCount: 32,
    image: mexico,
  },
  {
    title: 'Indonesia Campaign',
    description: 'Hello there test much description',
    giversCount: 18,
    donationsCount: 32,
    image: gronningen,
  },
  {
    title: 'Indonesia Campaign',
    description: 'Hello there test much description',
    giversCount: 18,
    donationsCount: 32,
  },
  {
    title: 'Indonesia Campaign',
    description: 'Hello there test much description',
    giversCount: 18,
    donationsCount: 32,
  },
  {
    title: 'Indonesia Campaign',
    description: 'Hello there test much description',
    giversCount: 18,
    donationsCount: 32,
  },
]

export default () => (
  <div>
    <EcosystemHeader
      title="Planting seeds in South Indonesia Forests"
      subtitle="CAMPAIGN"
      description="This is a description... Trying to make it long hello there!"
      image={headerImage}
    />
    <div className="milestones-wrapper">
      <Milestones />
    </div>
  </div>
)
