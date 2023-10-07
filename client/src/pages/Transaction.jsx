import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import ListItem from '../components/ListItem'
import { FaUser } from 'react-icons/fa'
import Modal from './../components/Modal'
import { useDispatch, useSelector } from 'react-redux'
import { asyncGetProducts } from '../states/products/action'
import { clearCartsAction, updateCartsAction } from '../states/carts/action'
import { countTotalPrice } from '../utils'
import PrintBill from '../components/PrintBill'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Transaction = () => {
  const products = useSelector(state => state.products)

  const carts = useSelector(state => state.carts)

  const dispatch = useDispatch()

  const handleSaveBill = () => {
    toast.success('Bill berhasil disimpan', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    })
  }

  const handleUpdateCarts = product => {
    dispatch(updateCartsAction(product))
  }

  const handleRemoveCarts = () => {
    dispatch(clearCartsAction())
  }

  const handlePayProduct = () => {
    dispatch(clearCartsAction());
    toast.success('Pembayaran anda telah berhasil', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000, //3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    })
  }

  useEffect(() => {
    dispatch(asyncGetProducts())
  }, [dispatch, carts])

  const totalPrice = countTotalPrice(carts)

  return (
    <>
      <section className='container pt-4'>
        <Modal onHandlePay={handlePayProduct} />
        <div className='row'>
          <div className='col-md-8'>
            <div className='row row-cols-1 row-cols-md-3 g-5 mb-2'>
              {products.map(product => (
                <div
                  className='col'
                  style={{ cursor: 'pointer' }}
                  key={product.id}
                >
                  <Card product={product} handleOnClick={handleUpdateCarts} />
                </div>
              ))}
            </div>
          </div>

          <div className='col-md-4'>
            <section
              className='p-4 shadow pb-5'
              style={{ backgroundColor: '#ffff' }}
            >
              <p className='text-center mb-5'>
                <span className='me-2 mb-2'>
                  <FaUser />
                </span>
                Pesanan
              </p>
              {carts.map(product => (
                <ListItem product={product} key={product.id} />
              ))}

              <button
                className='btn btn-outline-danger w-100 mb-3 mt-4'
                type='button'
                onClick={handleRemoveCarts}
              >
                Clear Cart
              </button>

              <div className='d-flex mb-3 justify-content-between'>
                <button
                  className='btn btn-sm btn-success w-100 me-2'
                  onClick={handleSaveBill}
                >
                  Save Bill
                </button>
                <PrintBill />
              </div>

              <button
                className='btn btn-primary w-100 '
                data-bs-toggle='modal'
                data-bs-target='#exampleModal'
              >
                Charge Rp. {totalPrice}
              </button>
            </section>
          </div>
        </div>
      </section>
    </>
  )
}

export default Transaction
