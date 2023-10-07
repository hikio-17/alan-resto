import React from 'react'
import { countTotalPrice, showFormattedDate } from '../utils'

class ComponentToPrint extends React.Component {
  render () {
    const totalPrice = countTotalPrice(this.props.carts)
    return (
      <div className='container mt-4'>
        <div className='container text-center'>
          <h2 className='text-info'>Alan Resto</h2>
          <p className='text-muted'>Kota Bandung</p>
          <hr />
        </div>
        <table className='table table-md table-borderless table-striped table-hover mt-5'>
          <thead className='table-secondary'>
            <tr>
              <th scope='col' style={{ width: '10%' }} className='text-center'>
                #
              </th>
              <th scope='col' style={{ width: '40%' }}>
                Nama
              </th>
              <th scope='col' style={{ width: '20%' }}>
                Foto
              </th>
              <th scope='col' style={{ width: '10%' }}>
                Count
              </th>
              <th scope='col' style={{ width: '20%' }}>
                Harga
              </th>
            </tr>
          </thead>
          <tbody>
            {this.props.carts.map((product, i) => (
              <tr key={product.id}>
                <th className='text-center'>{i + 1}</th>
                <td>{product.name}</td>
                <td>
                  <img src={product.image} alt='' width={150} />
                </td>
                <td>{`X ${product.count}`}</td>
                <td>{`Rp. ${product.price * product.count}`}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className='container mt-5 bg-bg-secondary-subtle p-4 d-flex justify-content-between align-content-start'>
          <div className='left'>
            <p>Invoice: {+new Date()}</p>
            <p>Date: {showFormattedDate(new Date())}</p>
            <h3>Thanks for Shopping</h3>
          </div>
          <div className='right'>
            <h3 className='bg-success-subtle'>Total: Rp. {totalPrice}</h3>
          </div>
        </div>

        <div className='bg-body-tertiary text-center mt-5'>
          <span>Alan Resto &copy; 2020 | Developed by Alan Creative</span>
        </div>
      </div>
    )
  }
}

export default ComponentToPrint
