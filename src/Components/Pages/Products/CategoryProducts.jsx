import React from 'react'
import {useParams} from 'react-router-dom'
import { RiShoppingCart2Line } from "react-icons/ri"
import { useNavigate } from 'react-router'
import Loading from '../../Common/Loading'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts, loadedProducts, selectStatus } from '../../../redux/productSlice'

export default function CategoryProducts() {
  const navigate = useNavigate()
  // const loading = false
  const dispatch = useDispatch()
  const status =useSelector(selectStatus)
  const products =useSelector(loadedProducts)
  const {category}=useParams()

  React.useEffect(() => {
    if(status==="idle"){
     dispatch(fetchProducts())
    }
   }, [])
 
   if(status==="loading"){
     return <Loading />
   }
   const result = products.filter(product=>product.category===category)

  return (
    <section className='container grid grid-cols-1 py-12'>
  
      <div className='col-span-3 grid gap-3 grid-cols-3'>
        {
          result?.map((product, index) => (
            <div key={index} className='product_page_single_product'>
              <div className='h-[200px] group-hover:opacity-90'>
                <img src={product?.image} alt={product.title} className="top_products_image " />
              </div>
              <div className='space-y-3 p-2'>
                <div className='h-[60px]'>
                  <h1 className='font-semibold text-xl'>{product?.title.substring(0, 60)}</h1>
                </div>
                <br />
                <h3 className='text-4xl text-black/80 font-bold'>$ {product?.price}</h3>
                <div className='flex items-center space-x-2'>
                  <h3 className='text-lg font-semibold'>Rating {product?.rating?.rate}</h3>
                  <h3 className='text-lg font-semibold'>People: {product?.rating?.count}</h3>
                </div>
                <div className='flex items-center justify-between '>
                  <button onClick={() => navigate(`/product/${product.id}`)} className='cursor-pointer font-bold text-red/80 hover:underline'>More Details</button>
                  <RiShoppingCart2Line className='text-3xl' />
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}
