import React from 'react'

const ListItem = ({ product }) => {
  const { name, count, image, price } = product;
  return (
    <div className='d-flex align-items-center justify-content-between mb-3'>
      <div>
        <img
          src={image}
          alt={name}
          width={80}
        />
        <span className='ps-1'>{name}</span>
      </div>

      <div>
         <span>x{ count }</span>
         <span className='ps-2 text-primary'>Rp. {count * parseInt(price)}</span>
      </div>
    </div>
  )
}

export default ListItem
