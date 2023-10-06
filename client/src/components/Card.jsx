import React from 'react'

const Card = ({ name, image, price, handleOnClick }) => {
  return (
    <div className='card shadow' onClick={handleOnClick}>
      <img
        src={image}
        className='card-img-top'
        alt={name}
        height={150}
      />
      <div className='card-body text-center'>
        <h5 className='card-title'>{ name }</h5>
        <p className='card-text'>
          {`Rp. ${price}`}
        </p>
      </div>
    </div>
  )
}

export default Card
