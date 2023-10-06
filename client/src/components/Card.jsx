import React from 'react'

const Card = () => {
  return (
    <div className='card shadow'>
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/a/ad/Sate_Ponorogo.jpg'
        className='card-img-top'
        alt='...'
      />
      <div className='card-body text-center'>
        <h5 className='card-title'>Sate Ayam</h5>
        <p className='card-text'>
          Rp. 30.000
        </p>
      </div>
    </div>
  )
}

export default Card
