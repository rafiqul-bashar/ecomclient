import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function HomeCategories() {
    const navigate = useNavigate()
    return (
        <section className=' container py-12'>
            <h1 className='top_products_title text-center'>Explore
                Categories </h1>
            <div className=' grid grid-cols-1 md:grid-cols-3 gap-3'>

                <div onClick={() => navigate('/products/men')} className="home_category_link group">
                    <h1 className='home_category_link_text'>Men</h1>
                </div>
                <div onClick={() => navigate('/products/men')} className="home_category_link group">
                    <h1 className='home_category_link_text'>Women</h1>
                </div>
                <div onClick={() => navigate('/products/men')} className="home_category_link group">
                    <h1 className='home_category_link_text '>Jwellary</h1>
                </div>

            </div>
        </section>
    )
}
