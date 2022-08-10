import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function HomeCategories() {
    const navigate = useNavigate()
    const categories = [
        "electronics",
        "jewelery",
        "men's clothing",
        "women's clothing"
    ]
    return (
        <section className=' container py-12'>
            <h1 className='top_products_title text-center mb-6'>Explore
                Categories </h1>
            <div className=' grid grid-cols-1 md:grid-cols-4 gap-3'>
                {categories.map((category, index) => (
                    <div key={index} onClick={() => navigate(`/products`,{state:{category}})} className="home_category_link group">
                        <h1 className='home_category_link_text capitalize'>{category}</h1>
                    </div>
                ))}

            </div>
        </section>
    )
}
