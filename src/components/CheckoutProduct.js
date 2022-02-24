import { StarIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import React from 'react'
import { useDispatch } from 'react-redux'
import Currency from "react-currency-formatter"

function CheckoutProduct({ id, title, price, rating, description, category, image }) {
    const dispatch = useDispatch()
    const removeItemToBasket=()=>{
       dispatch(remveFromBasket({id}))
    }
    return (
        <div className='grid grid-cols-5'>
            <Image src={image} height={200} width={200} objectFit="contain" />
            <div className='col-span-3 mx-5'>
                <p>{title}</p>
                <div className='flex'>
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <StarIcon key={i} className="h-5 text-yellow-500" />
                        ))}
                </div>
                <p className='text-xs my-2 line-clamp-3 '>{description}</p>
                <p>{price}</p>
            </div>
            <div className='flex flex-col space-y-2 my-auto justify-self-end'>
                <button className='button mt-auto' onClick={removeItemToBasket}>Remove</button>
            </div>
            
        </div>
    )
}

export default CheckoutProduct