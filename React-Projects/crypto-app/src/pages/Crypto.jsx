import React from 'react'
import TableComponent from '../Components/TableComponent'
import Filter from '../Components/Filter'

export default function Crypto() {
  return (
    <section className=' w-[80%] h-full flex flex-col mt-16 mb-24 relative' >
      <Filter/>
      <TableComponent/>
    </section>
  )
}
