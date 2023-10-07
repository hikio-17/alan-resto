import React, { useRef } from 'react'
import ReactToPrint from 'react-to-print'
import ComponentToPrint from './ComponentToPrint'
import { useSelector } from 'react-redux'

export default function PrintBill () {
  let componentRef = useRef()

  const carts = useSelector((state) => state.carts)

  return (
    <>
      <div className='container-fluid'>
        {/* button to trigger printing of target component */}
        <ReactToPrint
          trigger={() => <button className='btn btn-success w-100' disabled={carts.length === 0}>Print Bill</button>}
          content={() => componentRef}
        />

        {/* component to be printed */}
        <div style={{ display: 'none'}}>
          <ComponentToPrint ref={el => (componentRef = el)} carts={carts} />
        </div>
      </div>
    </>
  )
}
