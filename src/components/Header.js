import React from 'react'
import {NavLink , Link} from "react-router-dom" ;
import { BsSearch } from 'react-icons/bs';
import cart from '../images/cart.svg';
const Header = () => {
  return (
    <>
    <header className="header-top-strip py-3">
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-5'>
            <p className='text-white mb-0'>Free shipping over $100 & free returns</p>
          </div>
          <div className='col-6'>
            <p className='text-end text-white mb-0'>Hotline: &nbsp;<a className="text-white" href="tel:+91 7045857846">+91 7045857846</a></p>
          </div>
        </div>
      </div>
    </header>
    <header className='header-upper py-3'>
      <div className='container-fluid'>
        <div className='row align-items-center px-4'>
          <div className='col-2'>
            <h2>
              <Link className='text-white'>Dev Corner </Link>
            </h2>
          </div>
          <div className='col-5'>
            <div className="input-group">
              <input type="text" className="form-control py-2" placeholder="Search Product Here..." aria-label="Search Product Here..." aria-describedby="basic-addon2"/>
              <span className="input-group-text p-3" id="basic-addon2">
                <BsSearch className='fs-6'/>
              </span>
            </div>
          </div>
          <div className='col-5'>
            <div className='header-upper-links d-flex align-items-center justify-content-between'>
              <div>
                <Link className='d-flex align-items-center gap-10 text-white' to='/compare-product'>
                  <img src="/images/compare.svg" alt="compare"></img>
                  <p className='mb-0'>
                    Compare <br/> Products
                  </p>
                </Link>
              </div>
              <div>
                <Link to='/wishlist' className='d-flex align-items-center gap-10 text-white'>
                <img src="/images/wishlist.svg" alt="wishlist"></img>
                  <p className='mb-0'>
                    Favourite <br/> Wishlist
                  </p>
                </Link>
              </div>
              <div>
                <Link to='/login' className='d-flex align-items-center gap-10 text-white'>
                <img src="/images/user.svg" alt="user"></img>
                  <p className='mb-0 text-white'>
                    Login <br/> My Account
                  </p>
                </Link>
              </div>
              <div>
                <Link to='/cart' className='d-flex align-items-center gap-10 text-white'>
                <img src={cart} alt="cart"></img>
                  <div className='d-flex flex-column'>
                    <p className='badge bg-white text-dark mb-0'>0</p>
                    <p className='mb-0'>$ 500</p>
                  </div>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>

    </header>
    <header className='header-bottom py-3'>
      <div className='container-fluid'>
        <div className='row d-flex px-4'>
          <div className='col-3'>
            <div className=' menu-bottom d-flex align-items-center gap-40'>
              <div>
              <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 me-5 gap-15 d-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="/images/menu.svg" alt="menu"></img>
                <span className='me-5 d-inline-block'>Shop Categories</span>
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><Link className="dropdown-item text-white" to="">Action</Link></li>
                <li><Link className="dropdown-item text-white" to="">Another action</Link></li>
                <li><Link className="dropdown-item text-white" to="">Something else here</Link></li>
              </ul>
            </div>
              </div>
          </div>
          </div>
          <div className='col-6 d-flex align-items-center mb-0'>
              <div className='  menu-links'>
                <div className='d-flex align-items-center gap-200'>
                  <NavLink to='/'>Home</NavLink>
                  <NavLink to='/product'>Shop</NavLink>
                  <NavLink to='/blog'>Blog</NavLink>
                  <NavLink to='/contact'>Contact</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </header>
    </>
  )
}

export default Header
