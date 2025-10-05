import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='speciality'>
      <h1 className='text-3xl font-medium'>Find by Speciality</h1>
        <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
          <div className="flex flex-wrap justify-center gap-4 w-full">
            {specialityData.map((item, index) => (
              <Link
                key={index}
                to={`/doctors/${item.speciality}`}
                className="flex flex-col items-center text-xs cursor-pointer hover:-translate-y-2 transition-all duration-500"
                onClick={() => scrollTo(0, 0)}
              >
                <img
                  className="w-12 sm:w-16 md:w-20 h-auto object-contain mb-2"
                  src={item.image}
                  alt=''
                />
                <p>{item.speciality}</p>
              </Link>
            ))}
          </div>
    </div>
  )
}

export default SpecialityMenu

