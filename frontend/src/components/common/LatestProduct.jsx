import React from 'react'
import ProductImg from '../../assets/images/eight.jpg';


const LatestProduct = () => {
    return (
        <section className='section-2 py-2'>
            <div className='container'>
                <h2 className='row'>New Arrivals</h2>
                <div className='row mt-4 my-5 mx-5'>
                    <div className='col-md-3 col-6'>
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
                    <div className='col-md-3 col-6'>
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
                    <div className='col-md-3 col-6'>
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
                    <div className='col-md-3 col-6'>
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
        </section>


    )
}

export default LatestProduct
