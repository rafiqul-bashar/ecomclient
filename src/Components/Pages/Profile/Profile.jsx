import React from 'react'

export default function Profile() {
    return (
        <section className='container py-12'>
            <h1 className='text-center text-2xl mb-3'>My Account</h1>
            <div className='grid grid-cols-1 md:grid-cols-2'>

                <div className='space-y-3'>
                    <h1 className='text-center font-semibold '> My Orders</h1>
                    <div className='flex items-center space-x-3'>
                        <h1>School Bag</h1>
                        <h1>2x</h1>
                        <h1>$ 200</h1>
                        <h1>On the way</h1>
                    </div>
                    <div className='flex items-center space-x-3'>
                        <h1>School Bag</h1>
                        <h1>2x</h1>
                        <h1>$ 200</h1>
                        <h1>On the way</h1>
                    </div>

                </div>

                {/* Order ends and Edit Profile starts */}
                <div className='space-y-3'>
                    <h2>Rafiqul Bashar</h2>
                    <h2>demo@email.com</h2>
                    <h2>Law yards colony</h2>
                    <h2>+7880 147 41561</h2>
                    <button className='py-1 text-white bg-red w-full'>Edit Profile</button>
                </div>
            </div>

        </section>
    )
}
