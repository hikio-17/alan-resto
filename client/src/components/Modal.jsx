import React from 'react'

const Modal = () => {
  return (
    <div
      className='modal fade modal-lg'
      id='exampleModal'
      tabIndex='-1'
      aria-labelledby='exampleModalLabel'
      aria-hidden='true'
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
                      <th scope='col' className='text-center'>#</th>
                      <th scope='col'>Nama</th>
                      <th scope='col' className='text-center'>Foto</th>
                      <th scope='col'>Harga</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope='row' className='text-center'>1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className='col-md-4'>
                <p>Uang Pembeli (Rp)</p>
                <input type='text' className='form-control' />

                <div className='d-flex justify-content-between mt-3 mb-3'>
                  <button
                    type='button'
                    className='btn btn-outline-secondary w-50 btn-sm me-2'
                    data-bs-dismiss='modal'
                  >
                    Close
                  </button>
                  <button type='button' className='btn btn-primary w-50 btn-sm'>
                    Pay!
                  </button>
                </div>
                <p>Kembalian: <span>Rp. 50.000</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
