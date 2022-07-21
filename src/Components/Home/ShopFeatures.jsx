import React from 'react'
import delivery from "../../assets/shipping.webp"
import support from "../../assets/onlinesupport.webp"
import moneyback from "../../assets/moneyreturn.webp"
import payment from "../../assets/creditcard.webp"

const features = [{ img: delivery, title: "Free Shipping", text: "Over $100 worth of shopping." }, { img: moneyback, title: "Money Return", text: "Within 30 days for an exchange." }, { img: support, title: "Online Support", text: "24 hours a day, 7 days a week." }, { img: payment, title: "Flexible Payment", text: "Pay on delivery or with card online." },]

export default function ShopFeatures() {
    return (
        <div className="bg-black select-none">
            <div className="container py-4 gap-4 grid grid-cols-2 md:grid-cols-4">
                {
                    features.map((feature, index) => (
                        <div key={index} className=' flex flex-col text-center md:flex-row  items-center justify-center  md:justify-start space-x-2'>
                            <img className='w-10 h-10 ' src={feature.img} alt={feature.title} />
                            <div>
                                <h1 className='font-bold text-xl'>{feature.title}</h1>
                                <p>{feature.text}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}
