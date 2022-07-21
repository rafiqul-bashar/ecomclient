import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { products } from '../../../staticdata'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
import { addToCart } from '../../../redux/cartSlice'

export default function SingleProduct() {
  const [product, setProduct] = React.useState({})
  const [quantity, setQuantity] = React.useState(1)
  const { id } = useParams()
  const dispatch=useDispatch()
  const navigate=useNavigate()
  React.useEffect(() => {
    const matchingProduct = products.find(el => el.id == id)
    setProduct(matchingProduct)
  }, [id])

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }
  const decreaseQuantity = () => {
    if (quantity === 1) {
      return
    } else {
      setQuantity(quantity - 1)
    }
  }

  const handleAddtoCart =()=>{
    dispatch(addToCart(product)) 
    navigate('/cart')
  }

  return (
    <section className='container py-16 grid grid-cols-1 md:grid-cols-2'>
      <div className='w-[220px] mb-4 md:mb-0 md:w-[250px] mx-auto my-auto'>
        <img src={product.image} alt={product.title} className="w-full" />
      </div>
      <div className='space-y-3'>
        <h1 className='font-semibold text-xl'>{product?.title}</h1>
        <h3 className='text-3xl text-black/80'>$ {product?.price}</h3>
        <div className='flex items-center space-x-2'>
          <h3 className='text-lg'>Rating {product?.rating?.rate}</h3>
          <h3 className='text-lg'>People: {product?.rating?.count}</h3>
        </div>
        <h3 className='font-normal text-lg'>{product?.description}</h3>
        <div className='py-2 flex flex-col md:flex-row space-y-3 md:space-y-0 items-center md:justify-evenly select-none'>
          <div className='flex items-center space-x-4 text-2xl'>
            <AiOutlineMinus onClick={decreaseQuantity} />
            <span>{quantity}</span>
            <AiOutlinePlus onClick={increaseQuantity} />
          </div>
          <button onClick={handleAddtoCart} className='px-6 py-2 bg-green-400 font-bold text-lg text-white'>Add to cart</button>
        </div>
      </div>

    </section>
  )
}
