import React from 'react'
import list from "../../public/list.json"
import Cards from "../components/Cards"
import { Link } from 'react-router-dom'

function Course() {
    
  return (
    <>
    
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
        <div className='mt-28 item-center justify-center text-center '>
            <h1 className='text-2xl font-semibold md:text-4xl '><span className='text-pink-500'>Thank you </span> so much for visiting this page </h1>
            <p className='mt-12'>Welcome to our e-learning platform, where your journey to knowledge and skill mastery begins! We are dedicated to providing you with a dynamic and engaging learning experience tailored to meet your unique needs.
            </p>
            <Link to="/">
            <button  className='bg-pink-500 text-white mt-6 px-10 py-2 rounded-full font-bold text-xl hover:bg-pink-700 duration-300'>Back</button>
            </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
            {
                list.map((item)=>(
                    <Cards key={item.id} item={item} />
                ))
            }
        </div>
    </div>
    
    </>
  )
}

export default Course