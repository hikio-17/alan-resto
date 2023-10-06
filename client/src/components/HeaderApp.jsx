import React from 'react'
import { Link } from 'react-router-dom'
import { FaStore} from 'react-icons/fa'

const HeaderApp = () => {
  return (
    <div>
      <div
        className='navbar container-fluid bg-primary navbar-expand-sm'
        data-bs-theme='dark'
      >
        <div className='container'>
        <a className='container navbar-brand' href='#'>
          <FaStore className='me-3 mb-1' />
          Alan Resto
        </a>
        </div>
      </div>

      <div className='container-fluid'>
        <nav className='container navbar'>
          <ul className='nav nav-underline' >
            <li className='nav-item ps-3'>
              <Link to='/foods' className='nav-link text-dark' href='#'>
                Food
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/' className='nav-link text-dark' href='#'>
                Transaksi
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default HeaderApp
