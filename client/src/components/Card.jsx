import React from 'react'

const Card = ({ product, handleOnClick }) => {
  const { name, image, price } = product
  return (
    <div className='card shadow' onClick={() => handleOnClick(product)}>
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
