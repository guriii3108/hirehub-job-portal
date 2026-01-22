import React from 'react'
import { Filter } from 'lucide-react'

const FilterCard = () => {
  const filterData = [
    {
      filterType: "Location",
      filterOptions: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"]
    },
    {
      filterType: "Industry",
      filterOptions: ["Frontend Developer", "Backend Developer", "FullStack Developer"]
    },
    {
      filterType: "Salary",
      filterOptions: ["0-40k", "42-1lakh", "1lakh to 5lakh"]
    }
  ]
  return (
    <div className='w-full bg-white p-5 rounded-md shadow-sm border border-gray-100'>
      <div className='flex items-center justify-between mb-4'>
        <h1 className='font-bold text-lg text-gray-900'>Filter Jobs</h1>
        <Filter className='w-5 h-5 text-[#6A38C2]' />
      </div>
      <hr className='border-gray-100 mb-4' />

      <div className='space-y-6 mt-3'>
        {filterData.map((data, index) => (
          <div key={index} className='space-y-2'>
            <h1 className='font-semibold text-lg text-gray-800'>{data.filterType}</h1>
            <div className='space-y-2'>
              {data.filterOptions.map((option, idx) => (
                <div key={idx} className='flex items-center space-x-2 my-2'>
                  <input type="radio" name={data.filterType} id={option} className='accent-[#6A38C2] w-4 h-4 cursor-pointer' />
                  <label htmlFor={option} className='text-gray-600 text-sm cursor-pointer hover:text-gray-900 transition-colors'>{option}</label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FilterCard