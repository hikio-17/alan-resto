import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaPlus } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { asyncGetProducts } from '../states/products/action'

const Food = () => {
  const { products = [] } = useSelector(state => state)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncGetProducts())
  }, [dispatch])

  return (
    <section>
      <p className='container pt-4'>Tambahkan menu makanan yang ada di resto</p>

      <div className='container bg-white p-4 shadow-sm rounded'>
        <button
          className='btn btn-primary btn-small'
          onClick={() => navigate('/add-food')}
        >
          <FaPlus className='me-2 mb-1' />
          Tambah Menu
        </button>
        <div className='container mt-4'>
          <table class='table table-md table-borderless table-striped table-hover'>
            <thead className='table-secondary'>
              <tr>
                <th
                  scope='col'
                  style={{ width: '10%' }}
                  className='text-center'
                >
                  #
                </th>
                <th scope='col' style={{ width: '50%' }}>
                  Nama
                </th>
                <th scope='col' style={{ width: '20%' }}>
                  Foto
                </th>
                <th scope='col' style={{ width: '20%' }}>
                  Harga
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, i) => (
                <tr key={product.id}>
                  <th className='text-center'>{ i + 1}</th>
                  <td>{ product.name }</td>
                  <td>
                    <img src={product.image} alt="" width={150} />
                  </td>
                  <td>{`Rp. ${product.price}`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default Food
