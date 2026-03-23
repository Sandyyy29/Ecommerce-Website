import React, { useState } from 'react'
import Layout from './Layout'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { Link } from 'react-router-dom';
import productImg from '../../assets/images/mens/seven.jpg';

const Checkout = () => {
    const [PaymentMethod,setPaymentMethod] = useState('stripe');


    const handlePaymentMethod = (e) =>{
        setPaymentMethod( e.target.value)
    }
    return (
        <Layout>
            <div className="container pb-5">
                <div className='row '>
                    <div className='col-md-12'>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
                                <li className="breadcrumb-item"><Link to='/Shop'>Shop</Link></li>
                                <li className="breadcrumb-item"><Link to='/Cart'>Cart</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Checkout</li>

                            </ol>
                        </nav>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                        <h3 className='border-bottom pb-3'><strong>Billing Details</strong></h3>
                        <form action="">
                            <div className='row pt-3'>
                                <div className='col-md-6'>
                                    <input type='text' className='form-control' placeholder='Name' />

                                </div>
                                <div className='col-md-6'>
                                    <input type='email' className='form-control' placeholder='Email' />
                                </div>
                                <div className='mb-2 mt-3'>
                                    <textarea className='form-control' rows={3} placeholder='Address'></textarea>

                                </div>
                                <div className='row pt-3'>
                                    <div className='col-md-6'>
                                        <input type='text' className='form-control' placeholder='City' />
                                    </div>
                                    <div className='col-md-6'>
                                        <input type='text' className='form-control' placeholder='State' />
                                    </div>
                                </div>
                                <div className='row pt-3'>
                                    <div className='col-md-6'>
                                        <input type='number' className='form-control' pattern="[0-9]{5}" placeholder='Zip Code'/>
                                    </div>
                                    <div className='col-md-6'>
                                        <input type='phone' className='form-control' placeholder='Mobile Number'/>
                                    </div>

                                    
       
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className='col-md-5'>
                        <h3 className='border-bottom pb-3'><strong>Items</strong></h3>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td width={100}><img src={productImg} alt="Product 1" width={80} /></td>
                                    <td width={600}>
                                        <h4>Dummy Product Title</h4>
                                        <div className='d-flex align-items-center pt-3'>

                                            <span >$10</span>
                                            <div className='ps-3'>
                                                <button className='btn btn-size'>S</button>
                                            </div>
                                            <div className='ps-5'>X 1</div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td width={100}><img src={productImg} alt="Product 1" width={80} /></td>
                                    <td width={600}>
                                        <h4>Dummy Product Title</h4>
                                        <div className='d-flex align-items-center pt-3'>

                                            <span >$10</span>
                                            <div className='ps-3'>
                                                <button className='btn btn-size'>S</button>
                                            </div>
                                            <div className='ps-5'>X 1</div>

                                        </div>

                                    </td>

                                </tr>
                            </tbody>
                        </table>
                        <div className='row '>
                            <div className='col-md-12'>
                                <div className='d-flex justify-content-between border-bottom pb-2'>
                                    <div>Subtotal</div>
                                    <div>$20</div>
                                </div>
                                <div className='d-flex justify-content-between border-bottom py-2'>
                                    <div>Shipping</div>
                                    <div>$5</div>
                                </div>
                                <div className='d-flex justify-content-between border-bottom py-2'>
                                    <div><strong>Grand Total</strong></div>
                                    <div>$25</div>
                                </div>
                               
                            </div>
                        </div>
                        <h3 className='border-bottom pb-3'><strong>Payment Method</strong></h3>
                        <div>
                            
                         <input type='radio'value={'stripe'} onClick={handlePaymentMethod} checked={PaymentMethod === 'stripe'} />
                         <label htmlFor="" > Stripe</label>
                          <input type='radio' value={'cod'}  onClick={handlePaymentMethod} checked={PaymentMethod === 'cod'} className='ms-3' />
                         <label htmlFor="" className='ms-1'> Cash on Delivery</label>
                        </div>
                         <div className='pt-3 justify-content-end py-3'>
                         <button className='btn btn-primary'> Pay Now</button>
                         </div>

                    </div>

                </div>

            </div>

        </Layout>
    )
}

export default Checkout
