import { useStore } from 'laco-react'
import React from 'react'
import headerImage from '../assets/images/commons-header.png'
// import gronningen from '../assets/images/gronningen.jpg'
// import indonesia from '../assets/images/indonesia.jpg'
// import mexico from '../assets/images/mexico-fires.jpg'
import '../assets/styles/main.scss'
import { Card, EcosystemHeader } from '../index'
import { NavStore } from '../stores/navigation'

export default () => {
  const { campaigns } = useStore(NavStore)
  return (
    <div>
      <EcosystemHeader
        title="Scaling Wildlife Protection"
        subtitle="COMMONS"
        description="This is a description... Trying to make it long hello there!"
        image={headerImage}
      />
      <div className="campaigns">
        <h3>Campaigns</h3>
        <p>These Campaigns are working hard to solve causes of the Commons</p>
        <div className="cards">
          {campaigns.map(
            ({ title, description, image, giversCount, donationsCount }) => (
              <Card
                title={title}
                description={description.slice(0, 92) + '...'}
                giversCount={giversCount}
                donationsCount={donationsCount}
                image={image}
              />
            )
          )}
        </div>
      </div>
    </div>
  )
}
