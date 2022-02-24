import { useSession } from 'next-auth/client'
import React from 'react'
import { useSelector } from 'react-redux'
import CheckoutProduct from '../components/CheckoutProduct'
import { selectItems, selectTotal } from '../slices/basketSlice'

function Checkout() {
    const items = useSelector(selectItems)
    const total = useSelector(selectTotal)

    const [session] = useSession()
    return (
        <>
            <div className='lg:flex max-w-screen-2xl mx-auto'>

                <div className=' flex flex-col p-5 space-y-10 bg-white flex-grow m-5 shadow-sm '>
                    <h1 className='text-3xl border-b pb-4'>{items.length === 0 ? 'Your bag is empty' : 'Your bag'}</h1>
                    {items.map((item, i) => (
                        <CheckoutProduct
                            key={i}
                            id={item.id}
                            title={item.title}
                            rating={item.rating}
                            price={item.price}
                            description={item.description}
                            category={item.category}
                            image={item.image}
                        />
                    ))}
                </div>
                <div className='flex flex-col bg-white p-10 shadow-md'>
                    {items.length > 0 && (
                        <>
                            <h2 className='whitespace-nowrap'>Subtotal ({items.length} items):
                                <span>
                                    <Currency quantity={total} currency='GBP'/>
                                </span>
                            </h2>
                            <button disabled={!session} className={`button mt-2 ${!session && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'}`}>{!session ? 'Sign in to checkout' : 'Proceed to checkout'}</button>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

export default Checkout