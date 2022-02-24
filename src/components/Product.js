import React, { useState } from 'react'
import Image from 'next/image'
import { StarIcon } from "@heroicons/react/solid"
import { useDispatch } from 'react-redux'
import { addToBasket } from '../slices/basketSlice'
const MAX_RATING = 5
const MIN_RATING = 1

function Product({ id, title, price, description, category, image }) {
    const dispatch= useDispatch()
    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
        )
    
    const addItemToBasket =()=>{
        const product = {
            id, 
            title, 
            price, 
            description, 
            category, 
            image 
        }
        dispatch(addToBasket(product))
    }
    return (
        <div className='relative flex flex-col m-5 bg-white p-10'>
            <p className='absolute top-2 right-2 text-xs text-gray-400'>{category}</p>
            <Image src={image} height={200} width={200} objectFit="contain" />
            <h4 className='my-3'>{title}</h4>
            <div className='flex'>
                {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <StarIcon className='h-5 text-yellow-500' />
                    )
                    )}
            </div>
            <p className='text-xs mt-2 mb-2 my-2 line-clamp-2'>{description}</p>
            <p className='mb-5'>{price}</p>
            <button onClick={addItemToBasket} className='mt-auto button'>Add to bag</button>
        </div>
    )
}

export default Product