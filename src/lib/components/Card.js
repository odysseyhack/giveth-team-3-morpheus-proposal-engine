import React from 'react'
import donations from '../assets/images/donations.svg'
import givers from '../assets/images/givers.svg'

const Card = ({
  title,
  description,
  giversCount,
  donationsCount,
  image,
  onClick,
}) => {
  return (
    <div className="eco-card" onClick={onClick}>
      <div style={{ background: `url(${image})`, backgroundSize: 'cover' }}>
        <div>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
      <div>
        <div className="field">
          <img src={givers} />
          {giversCount} Givers
        </div>
        <div className="field">
          <img src={donations} />
          {donationsCount} xDAI
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  // buttonName:
}

export default Card
