import React from 'react'

const MenuItems = (props) => {
  return (
    <div onClick={props.addOrder} className='Items'>
      <div>
        <img src={props.image} alt="icon" width='50px'/>
      </div>
      <div style={{paddingLeft: '20px'}}>
        <h3>{props.name}</h3>
        <p>Price: {props.price}</p>
      </div>
    </div>
  )
}

export default MenuItems