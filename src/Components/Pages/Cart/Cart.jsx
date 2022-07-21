import React from 'react'
import { useDispatch } from 'react-redux'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
import { MdDeleteForever } from "react-icons/md"
import { addToCart, clearCart, removeFromCart } from '../../../redux/cartSlice'
import {useSelector} from'react-redux'

export default function Cart() {

  const [checkout, setCheckout] = React.useState(false)
  const [quantity, setQuantity] = React.useState(1)
  const dispatch = useDispatch()
  const { cartItems,cartTotalQuantity  } = useSelector((state) => state.cart);


  const increaseQuantity = (product) => {
    dispatch(addToCart(product))
    setQuantity(quantity + 1)
  }
  const emptyCart = () => {
    dispatch(clearCart())
    
  }
  const removeProduct = (product) => {
    dispatch(removeFromCart(product))
  }
  const decreaseQuantity = () => {
    if (quantity === 1) {
      return
    } else {
      setQuantity(quantity - 1)
    }
  }
  const quantitY = cartTotalQuantity 

  
  if (quantitY === 0) {
    return (<>
      <h1 className='font-bold text-2xl text-center my-3'>My Cart</h1>
      <div className="container flex items-center justify-center py-12">
        <div className="text-center tracking-wider font-semibold text-2xl text-black/70">Your cart is empty</div>
      </div>
    </>
    )
  }
  
  return (
    <section className='container '>
      <h1 className='font-bold text-2xl text-center my-3'>My Cart</h1>
      <div className='py-16 grid gap-4 grid-cols-1 md:grid-cols-4'>
        <div className='md:col-span-3'>

          {cartItems?.map((product, index) => (

            <div className='grid md:grid-cols-5' key={index} >
              <div className='col-span-2 flex items-center justify-evenly'>
                <img src={product?.image} alt={product?.title} className="h-16 mx-auto p-2" />

                <h1 className='font-semibold text-xl'>{product?.title} </h1>

              </div>

              <div className='col-span-3 flex items-center justify-around'>
                <h3 className='text-xl text-black/80'>$ {product?.price}   <span className='text-green'>x</span>  {product?.itemQuantity}x</h3>
                <div className='flex items-center space-x-4 text-2xl'>
                  <AiOutlineMinus className='text-black/80' onClick={decreaseQuantity} />
                  <span>{product.itemQuantity}</span>
                  <AiOutlinePlus className='text-[#7b69ff]' onClick={()=>increaseQuantity("product")} />
                  <MdDeleteForever onClick={()=>removeProduct(product)} className="text-red" />
                </div>
              </div>
            </div>
           ))} 
          <hr />
        </div>


        {/* Check Out Section */}
        <div className='md:col-span-1 h-[360px] flex flex-col space-y-3'>
          <div className='flex justify-between'>
            <h5>Total</h5>
            <h5>20</h5>
          </div>
          <div className='flex justify-between'>
            <h5>SubTotal</h5>
            <h5>20</h5>
          </div>
          <div onClick={emptyCart} className='border-2 border-red text-red text-center font-semibold py-1'>Clear Cart</div>
          {
            checkout ? <div>
              <div className='bg-red/80 text-white text-center font-semibold py-1'>Card Payment</div>
              <div className='bg-black/80 text-white text-center font-semibold py-1 mt-2'>Cash on delivery</div>
            </div> : <div onClick={() => setCheckout(true)} className='bg-black/80 text-white text-center font-semibold py-1'>Checkout Now</div>
          }

        </div>
      </div>
    </section>
  )
}
