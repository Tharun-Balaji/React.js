import React from 'react'

export default function TableComponent() {
  return (
    <div className=" flex flex-col mt-9 border border-gray-100 rounded">
      <table className=' w-full table-auto ' >
        <thead className=' capitalize text-base text-gray-100 font-medium border-b border-gray-100' >
          <tr>
            <th className=' py-1'>assets</th>
            <th className=' py-1'>name</th>
            <th className=' py-1'>price</th>
            <th className=' py-1'>Total Volume</th>
            <th className=' py-1'>Market Cap</th>
            <th className=' py-1'>1Hr</th>
            <th className=' py-1'>24Hr</th>
            <th className=' py-1'>7D</th>
          </tr>
        </thead>
        <tbody>
          <tr className=' text-center text-base border-b border-gray-100 hover:bg-gray-200 last:border-b-0' >
            <td className=' py-4'>assets</td>
            <td className=' py-4'>name</td>
            <td className=' py-4'>price</td>
            <td className=' py-4'>Total Volume</td>
            <td className=' py-4'>Market Cap</td>
            <td className=' py-4'>1Hr</td>
            <td className=' py-4'>24Hr</td>
            <td className=' py-4'>7D</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
