import React from 'react'
import Layout from './common/Layout'
import ProductImg from '../assets/images/eight.jpg';
import { Link } from 'react-router-dom';
const Shop = () => {
  return (
    <Layout>
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li className="breadcrumb-item"><a href='/'>Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">Library</li>
          </ol>
        </nav>
        <div className='row'>
          <div className='col-md-3'>
            <div className='card shadow border-1 mb-3'>
              <div className='card-body'>
                <h3 className='mb-3'>Categories</h3>
                <ul>
                  <li className='mb-1'>
                    <input type="checkbox" className='form-check-input ' />
                    <label href="#" className='ps-2'>Kids
                    </label>
                  </li>
                  <li className='mb-1'>

                    <input type="checkbox" className='form-check-input' />
                    <label href="#" className='ps-2'>Mens
                    </label>
                  </li>
                  <li className='mb-1'>

                    <input type="checkbox" className='form-check-input' />
                    <label href="#" className='ps-2'>Womens
                    </label>
                  </li>
                </ul>
              </div>
            </div>
            <div className='card shadow border-1 mb-3'>
              <div className='card-body'>
                <h3 className='mb-3'>Brands</h3>
                <ul>
                  <li className='mb-1'>
                    <input type="checkbox" className='form-check-input ' />
                    <label href="#" className='ps-2'>puma
                    </label>
                  </li>
                  <li className='mb-1'>

                    <input type="checkbox" className='form-check-input' />
                    <label href="#" className='ps-2'>Killer
                    </label>
                  </li>
                  <li className='mb-1'>

                    <input type="checkbox" className='form-check-input' />
                    <label href="#" className='ps-2'>Levis
                    </label>
                  </li>
                  <li>

                    <input type="checkbox" className='form-check-input' />
                    <label href="#" className='ps-2'>Flying Machine
                    </label></li>
                  <li>
                    <input type="checkbox" className='form-check-input' />
                    <label href="#" className='ps-2'>Denim
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='col-md-9' >
            <div className='row pb-3'>
              <div className='col-md-4 col-6'>
                <div className='product card border-0 mt-4'>
                  <div className='card-img'>
                    <Link to='/product'>
                      <img src={ProductImg} alt="product" className='w-100' />
                    </Link>
                  </div>
                  <div className='card-body pt-3'>
                    <Link to='/product'>Red Check Shirt for Mens</Link>
                    <div className='price'>
                      $50 <span className='text-decoration-line-through'>$80</span>
                    </div>
                  </div>

                </div>

              </div> <div className='col-md-4 col-6'>
                <div className='product card border-0 mt-4'>
                  <div className='card-img'>
                    <img src={ProductImg} alt="product" className='w-100' />
                  </div>
                  <div className='card-body pt-3'>
                    <a href="">Red Check Shirt for Mens</a>
                    <div className='price'>
                      $50 <span className='text-decoration-line-through'>$80</span>
                    </div>
                  </div>

                </div>

              </div> <div className='col-md-4 col-6'>
                <div className='product card border-0 mt-4'>
                  <div className='card-img'>
                    <img src={ProductImg} alt="product" className='w-100' />
                  </div>
                  <div className='card-body pt-3'>
                    <a href="">Red Check Shirt for Mens</a>
                    <div className='price'>
                      $50 <span className='text-decoration-line-through'>$80</span>
                    </div>
                  </div>

                </div>

              </div> <div className='col-md-4 col-6'>
                <div className='product card border-0 mt-4'>
                  <div className='card-img'>
                    <img src={ProductImg} alt="product" className='w-100' />
                  </div>
                  <div className='card-body pt-3'>
                    <a href="">Red Check Shirt for Mens</a>
                    <div className='price'>
                      $50 <span className='text-decoration-line-through'>$80</span>
                    </div>
                  </div>  

                </div>

              </div>
               <div className='col-md-4 col-6'>
                <div className='product card border-0 mt-4'>
                  <div className='card-img'>
                    <img src={ProductImg} alt="product" className='w-100' />
                  </div>
                  <div className='card-body pt-3'>
                    <a href="">Red Check Shirt for Mens</a>
                    <div className='price'>
                      $50 <span className='text-decoration-line-through'>$80</span>
                    </div>
                  </div>

                </div>

              </div> <div className='col-md-4 col-6'>
                <div className='product card border-0 mt-4'>
                  <div className='card-img'>
                    <img src={ProductImg} alt="product" className='w-100' />
                  </div>
                  <div className='card-body pt-3'>
                    <a href="">Red Check Shirt for Mens</a>
                    <div className='price'>
                      $50 <span className='text-decoration-line-through'>$80</span>
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
    </Layout>
  )
}
export default Shop
