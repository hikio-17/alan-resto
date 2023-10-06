import React from 'react'
import { FaFileUpload } from 'react-icons/fa'

const AddMenu = () => {
  return (
    <section>
      <p className='container pt-4'>Tambahkan menu</p>

      <div className='container bg-white p-4 shadow-sm rounded'>
        <div className='container mt-4'>
          <form action=''>
            <div className='mb-3'>
              <label className='form-label'>Nama menu</label>
              <input type='text' className='form-control' />
            </div>
            <div className='mb-3'>
               <label className='form-label'>Gambar</label>
              <label className='drop-container' id='dropcontainer'>
                <FaFileUpload />
                <span className='drop-title'>
                  Drag and drop a file here or click
                </span>
                <input
                  className='d-none'
                  type='file'
                  id='images'
                  accept='image/*'
                  required
                />
              </label>
            </div>
            <div className='mb-3'>
              <label className='form-label'>Harga</label>
              <div class='input-group mb-3'>
                <span class='input-group-text bg-primary'>Rp.</span>
                <input type='text' class='form-control' />
              </div>
            </div>

            <div class='d-grid gap-2 d-md-flex justify-content-md-end pt-3'>
              <button class='btn btn-success w-25 border-0' type='button'>
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
