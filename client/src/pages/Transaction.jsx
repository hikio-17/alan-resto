import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import ListItem from '../components/ListItem'
import { FaUser } from 'react-icons/fa'
import Modal from './../components/Modal'
import Toast from '../components/ToastMessage'
import { useDispatch, useSelector } from 'react-redux'
import { asyncGetProducts } from '../states/products/action'

const Transaction = () => {
  const { products = [] } = useSelector((state) => state)
  const [success, setSuccess] = useState(false);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncGetProducts())
  }, [dispatch])

  const handleSaveBill = () => {
    setSuccess(true);
  }

  const handleClickCard = () => {
    alert('you click me')
  }

  return (
    <>
      {success && <Toast message='Bill berhasil disimpan' />}
      <section className='container pt-4'>
        <Modal />
        <div className='row'>
          <div className='col-md-8'>
            <div className='row row-cols-1 row-cols-md-3 g-5 mb-2'>
              {products.map((product)=> (
                <div className='col' style={{ cursor: 'pointer'}} key={product.id}>
                  <Card { ...product } handleOnClick={handleClickCard} />
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
              <ListItem />
              <ListItem />
              <ListItem />
              <ListItem />

              <button
                className='btn btn-outline-danger btn-sm w-100 mb-3 mt-4'
                type='button'
              >
                Clear Cart
              </button>

              <div className='d-flex justify-content-between mb-3'>
                <button className='btn btn-sm btn-success w-50 me-2' onClick={handleSaveBill}>
                  Save Bill
                </button>
                <button className='btn btn-sm btn-success w-50'>
                  Print Bill
                </button>
              </div>

              <button
                className='btn btn-sm btn-primary w-100 '
                data-bs-toggle='modal'
                data-bs-target='#exampleModal'
              >
                Charge Rp. 40.000
              </button>
            </section>
          </div>
        </div>
      </section>
    </>
  )
}

export default Transaction
