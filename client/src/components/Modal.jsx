import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useInput } from '../hooks/useInput';
import { countTotalPrice } from '../utils';

const Modal = ({ onHandlePay }) => {
  const carts = useSelector(state => state.carts)
  const [buyersMoney, buyersMoneyOnChange] = useInput(0);

  const totalPrice = countTotalPrice(carts)
  const returnBuyersMoney = buyersMoney - totalPrice

  return (
    <div
      className='modal fade modal-lg'
      id='exampleModal'
      tabIndex='-1'
    >
      <div className='modal-dialog'>
        <div className='modal-content p-3 border-0'>
          <div className='modal-header'>
            <h1 className='modal-title fs-5' id='exampleModalLabel'>
              Detail Pesanan
            </h1>
          </div>
          <div className='modal-body'>
            <div className='row'>
              <div className='col-md-8 border-end'>
                <table className='table table-sm'>
                  <thead className='table-secondary'>
                    <tr>
                      <th scope='col' className='text-center'>
                        #
                      </th>
                      <th scope='col'>Nama</th>
                      <th scope='col' className='text-center'>
                        Foto
                      </th>
                      <th scope='col'>Harga</th>
                    </tr>
                  </thead>
                  <tbody>
                    {carts.map((product, i) => (
                      <tr key={product.id}>
                        <th scope='row' className='text-center'>
                          { i + 1 }
                        </th>
                        <td>{product.name}</td>
                        <td>
                          <img src={product.image} alt={product.name} width={80} />
                        </td>
                        <td>Rp. {product.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className='col-md-4'>
                <p>Uang Pembeli (Rp)</p>
                <input type='text' className='form-control' value={buyersMoney} onChange={buyersMoneyOnChange} />

                <div className='d-flex justify-content-between mt-3 mb-3'>
                  <button
                    type='button'
                    className='btn btn-outline-secondary w-50 btn-sm me-2'
                    data-bs-dismiss='modal'
                  >
                    Close
                  </button>
                  <button data-bs-dismiss='modal' type='button' className='btn btn-primary w-50 btn-sm' onClick={onHandlePay} disabled={buyersMoney < totalPrice} >
                    Pay!
                  </button>
                </div>
                <p>
                  Kembalian: 
                  <span className={returnBuyersMoney < 0 && 'd-none'}>Rp. { returnBuyersMoney }</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
