import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loadedProducts } from '../../redux/productSlice'


export default function TopProducts() {
    const navigate = useNavigate()
    const products =useSelector(loadedProducts)
    return (
        <div className='container'>
            <h1 className='top_products_title'>Top Products</h1> <br />
            <div className='grid grid-cols-2 gap-2 md:grid-cols-4'>
                {
                    products?.slice(0, 4).map((product, index) => (
                        <div onClick={()=>navigate(`/product/${product.id}`)} key={index} className="top_products_container group relative">
                            <div className='h-[200px] group-hover:opacity-90'>
                                <img src={product.image} alt={product.title} className="top_products_image " />
                            </div>

                            <div className='p-2 space-y-2 group-hover:opacity-90'>
                                <h1 className='font-bold text-black/80'>{product.title}</h1>
                                <h4 className='font-normal text-2xl text-black/70 '> $ {product.price}</h4>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
