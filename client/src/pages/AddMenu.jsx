import React, { useState } from 'react'
import Resizer from 'react-image-file-resizer'
import { FaFileUpload } from 'react-icons/fa'
import { useInput } from '../hooks/useInput'
import { useDispatch } from 'react-redux'
import { asyncAddProduct } from '../states/products/action'
import { useNavigate } from 'react-router-dom'

const AddMenu = () => {
  const [imageName, setImageName] = useState('')
  const [imageURI, setImageURI] = useState('')
  const [name, onNameChange] = useInput()
  const [price, onPriceChange] = useInput(0);

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const fileUploadAndResize = (e) => {
    const file = e.target.files[0]
    setImageName(file.name)

    Resizer.imageFileResizer(
      file,
      720,
      720,
      'JPEG',
      100,
      0,
      (uri) => {
        setImageURI(uri)
      },
      'base-64'
    )
  }

  const handleAddProduct = async (e) => {
    e.preventDefault();
    await dispatch(asyncAddProduct({ name, image: imageURI, price: parseInt(price)}))
    navigate('/foods')
  }

  return (
    <section>
      <p className='container pt-4'>Tambahkan menu</p>

      <div className='container bg-white p-4 shadow-sm rounded'>
        <div className='container mt-4'>

          <form onSubmit={handleAddProduct}>
            <div className='mb-3'>
              <label className='form-label'>Nama menu</label>
              <input type='text' className='form-control' value={name} onChange={onNameChange} />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Gambar</label>
              <label className='drop-container' id='dropcontainer'>
                <FaFileUpload />
                <span>{imageName}</span>
                <span className='drop-title'>
                  Drag and drop a file here or click
                </span>
                <input
                  className='d-none'
                  type='file'
                  id='images'
                  accept='image/*'
                  required
                  onChange={fileUploadAndResize}
                />
              </label>
            </div>
            <div className='mb-3'>
              <label className='form-label'>Harga</label>
              <div className='input-group mb-3'>
                <span className='input-group-text bg-primary'>Rp.</span>
                <input type='number' className='form-control' value={price} onChange={onPriceChange} />
              </div>
            </div>

            <div className='d-grid gap-2 d-md-flex justify-content-md-end pt-3'>
              <button className='btn btn-success w-25 border-0' type='submit'>
                Simpan
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default AddMenu
