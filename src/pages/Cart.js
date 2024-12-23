import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from "react-router-dom";
import Meta from '../components/Meta'
import { AiFillDelete } from "react-icons/ai";
import watch from '../images/watch.jpg';
import Container from '../components/Container';
const Cart = () => {
  return (
    <>
      <Meta title={"Cart"}/>
      <BreadCrumb title="Cart"/>
      <Container class1="cart-wrapper home-wrapper-2 py-5 mx-5">
            <div className='row'>
                <div className='col-12'>
                    <div className='card-header py-3 d-flex justify-content-between align-items-center'>
                        <h4 className='cart-col-1'>Product</h4>
                        <h4 className='cart-col-2'>Price</h4>
                        <h4 className='cart-col-3'>Quantity</h4>
                        <h4 className='cart-col-4'>Total</h4>
                    </div>
                    <div className='card-data mb-2 py-3 d-flex justify-content-between align-items-center'>
                        <div className='gap-15 cart-col-1 d-flex align-items-center'>
                            <div className='w-25'>
                                <img src={watch} className='img-fluid' alt="product here" height='100'></img>
                            </div>
                            <div className='w-75'>
                                <p > GDFFDHG</p>
                                <p >Size: hgf</p>
                                <p>Colour: gfd</p>
                            </div>
                        </div>
                        <div className='cart-col-2'>
                            <h5 className='price'>$ 100 ggf</h5>
                        </div>
                        <div className='cart-col-3 d-flex align-items-center gap-15'>
                            <div>
                                <input type='number' className='form-control' id='1' name='' min={1} max={10}></input>
                            </div>
                            <div>
                                <AiFillDelete className='text-danger '/>
                            </div>
                        </div>
                        <div className='cart-col-4'>
                            <h5 className='price'>$ 100 ggf</h5>
                        </div>

                    </div>
                    <div className='card-data mb-2 py-3 d-flex justify-content-between align-items-center'>
                        <div className='gap-15 cart-col-1 d-flex align-items-center'>
                            <div className='w-25'>
                                <img src={watch} className='img-fluid' alt="product here" height='100'></img>
                            </div>
                            <div className='w-75'>
                                <p > GDFFDHG</p>
                                <p >Size: hgf</p>
                                <p>Colour: gfd</p>
                            </div>
                        </div>
                        <div className='cart-col-2'>
                            <h5 className='price'>$ 100 ggf</h5>
                        </div>
                        <div className='cart-col-3 d-flex align-items-center gap-15'>
                            <div>
                                <input type='number' className='form-control' id='1' name='' min={1} max={10}></input>
                            </div>
                            <div>
                                <AiFillDelete className='text-danger '/>
                            </div>
                        </div>
                        <div className='cart-col-4'>
                            <h5 className='price'>$ 100 ggf</h5>
                        </div>

                    </div>
                </div>
                <div className='col-12 py-2 mt-4'>
                    <div className='d-flex justify-content-between align-items-baseline'>
                        <Link to='/product' className='button'>Continue Shopping</Link>
                        <div className='d-flex align-items-end flex-column' >
                            <h4>Subtotal:$100</h4>
                            <p>Taxes and Shipping Charges to be calculated at checkout</p>
                            <Link to='/checkout' className='button'>Checkout</Link>
                        </div>
                    </div>
                </div>
            </div>
      </Container>
    </>
  )
}

export default Cart
