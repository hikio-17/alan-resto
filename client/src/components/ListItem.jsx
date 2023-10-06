import React from 'react'

const ListItem = () => {
  return (
    <div className='d-flex align-items-center justify-content-between mb-3'>
      <div>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/a/ad/Sate_Ponorogo.jpg'
          alt=''
          width={100}
        />
        <span className='ps-2'>Sate Ayam</span>
      </div>

      <div>
         <span>x1</span>
         <span className='ps-3 text-primary'>Rp. 30.000</span>
      </div>
    </div>
  )
}

export default ListItem
