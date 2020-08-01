import React from 'react'

const OrderItems = (props) => {
  return (
    <div className='orderItems'>
      <div>
      <h3>{props.name}</h3>
      </div>
      <p>{props.count}</p>
      <p>{props.price}</p>
      <div>
        <button onClick={props.removeOrder}>X</button>
      </div>
    </div>
  )
}

export default OrderItems