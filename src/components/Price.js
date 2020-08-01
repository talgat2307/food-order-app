import React from 'react'

const Price = (props) => {
  return (
    <div className='Price'>
      <p className='price'>Total Price: {props.totalPrice} KGS</p>
    </div>
  )
}

export default Price