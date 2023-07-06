'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [ages, setAges] = useState([
    {
      subtitle: 'Educational Qualification',
      desc: "description description description description"
  },
    {
      subtitle: 'Salary Scale',
      desc: "description description description description"
  },
    {
      subtitle: 'Age',
      desc: "description description description description"
  },
])

const [physicals, setPhysicals] = useState([
  [
    {
      subtitle: 'Age',
      desc: "description description description description"
  },
    {
      subtitle: 'Age',
      desc: "description description description description"
  },
    {
      subtitle: 'Age',
      desc: "description description description description"
  },
  ],
  [
    {
      subtitle: 'Age1',
      desc: "description description description description"
  },
    {
      subtitle: 'Age1',
      desc: "description description description description"
  },
    {
      subtitle: 'Age1',
      desc: "description description description description"
  },
  ],
])
    return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className='pb-20'>Hello Salman</h1>
      <h1 className='text-2xl'>Educational Qualification, Salary Scale and Age</h1>
      {ages.map((age,i) => (
        <section className="flex gap-2 my-5" key={i}>
          <span>{i+1}</span>
          <div className='flex flex-col'>
            <h3 className='text-lg flex gap-2'>
              {age.subtitle}</h3>
            <p className='text-sm'>{age.desc}</p>
          </div>
        </section>
      ))}

      <h1 className='text-2xl'>Physical Qualification</h1>
      {physicals.map((physical,i) => (
 
        <section className="flex flex-row gap-2 my-5" key={i}>
          <span>{i+1}</span>
        {physical.map(item => (
            <div className='flex flex-col'>
              <h3 className='text-lg flex gap-2'>
                {item.subtitle}</h3>
              <p className='text-sm'>{item.desc}</p>
            </div>

))} 

        </section>
      ))}


    </main>
  )
}
