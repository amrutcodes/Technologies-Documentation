import React from 'react'

const TechCard = ({name,desc,image}) => {
  return (
    <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"> {/* card */}
<img src={image} className=" p-3 w-full h-40 rounded-lg mb-4 object-contain"/> {/* image */}

<h3 className='text-center  text-white font-semibold text-xl'>{name}</h3>
<p className='font-normal text-white text-sm my-2'>{desc}</p>


    </div>
   
  )
}

export default TechCard