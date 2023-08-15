import { Home } from "@mui/icons-material"
import React from "react"

const HomeSectionCard = () =>{
    return (
        <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 border">

        <div className="-[13rem] w-[10rem] ">
            <img className="object-cover object-top w-full h-full' " src ="https://static.jaypore.com/tr:w-60,h-79,e-sharpen/media/catalog/product/8/4/840017693-1_1.jpg"/>
        </div>

        <div className='p-4'>
            <h3 className="text-lg font-medium text-gray-900">Nofilter</h3>
            <p className="mt-2 text-sm text-gray-500">Men kurta</p>

        </div>


        </div>
    )
}

export default HomeSectionCard;