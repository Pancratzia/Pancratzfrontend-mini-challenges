import React from 'react'
import Rating from './Rating';

function Service(props) {

    const {service} = props;
  return (
    <div className='w-full flex justify-between p-5'>
      <h3 className='text-2xl text-slate-600 font-serif'>{service}</h3>
      <Rating />
    </div>
  )
}

export default Service