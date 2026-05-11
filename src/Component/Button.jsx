import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const Button = (props) => {
  return (
     <div className="border cursor-pointer border-gray-100 h-10 w-50  flex items-center justify-center rounded-3xl ">
          <div className=" group  rounded-3xl  text-xl h-10 w-35 flex flex-col justify-top cursor-pointer text-center overflow-hidden">
            <h1 className="group-hover:-translate-y-7 translate-y-1 text-white transition-all duration-300">{props.btnName}</h1>
            <h1 className="group-hover:-translate-y-6 translate-y-8 text-white transition-all duration-300">{props.btnName}</h1>
          </div>
          <FaArrowRightLong className="text-2xl text-white" />
        </div>
  )
}

export default Button
