import React, { useState } from 'react'
import './App.css'
import MenuItems from './components/MenuItems'
import OrderItems from './components/OrderItems'
import Price from './components/Price'
import Hamburger from './components/MenuIcons/icons8-hamburger-100.png'
import Cheeseburger from './components/MenuIcons/icons8-cheeseburger-100.png'
import Fries from './components/MenuIcons/icons8-kawaii-french-fries-100.png'
import Coffee from './components/MenuIcons/icons8-coffee-100.png'
import Tea from './components/MenuIcons/icons8-tea-100.png'
import Cola from './components/MenuIcons/icons8-cola-100.png'

const App = () => {

  const [menuItems, setMenuItems] = useState([
    { name: 'Hamburger', price: 70, icon: Hamburger, count: 0 },
    { name: 'Cheeseburger', price: 90, icon: Cheeseburger, count: 0 },
    { name: 'Fries', price: 45, icon: Fries, count: 0 },
    { name: 'Coffee', price: 45, icon: Coffee, count: 0 },
    { name: 'Tea', price: 20, icon: Tea, count: 0 },
    { name: 'Coke', price: 35, icon: Cola, count: 0 },
  ])

  const [order, setOrder] = useState([])

  const [sms, setSms] = useState([{ txt: 'Order is empty!  Add some items!' }])

  const removeSms = () => {
    const arr = [...sms]
    arr.splice(0, 1, '')
    setSms(arr)
  }

  const addOrder = (data) => {
    const copyOrder = [...order]
    copyOrder.push(data)
    setOrder(copyOrder)
  }

  const addCount = (i) => {
    const copyCount = [...menuItems]
    copyCount[i].count++
    setMenuItems(copyCount)
  }

  const removeOrder = (data, i) => {
    const copyOrder = [...order]
    copyOrder.splice(i, 1)
    setOrder(copyOrder)

    const copyCount = [...menuItems]
    copyCount[i].count--
    setMenuItems(copyCount)
  }

  const addPrice = () => {
    const copyOrder = [...order]
    let totalPrice = 0
    for (let i = 0; i < copyOrder.length; i++) {
      totalPrice += (copyOrder[i].price)
    }
    return totalPrice
  }

  return (
    <div className="App">
      <div className='Orders'>
        <p>Order Items</p>
        {sms[0].txt}
        {order.filter((a, b) => {return order.indexOf(a) === b})
          .map((item, index) => {
            return (
              <OrderItems
                key={index}
                name={item.name}
                count={'x' + item.count}
                price={item.count * item.price + ' KGS'}
                removeOrder={() => removeOrder(item.name, index)}
              />
            )
          })}
        <Price totalPrice={addPrice()}/>
      </div>
      <div className='Menu'>
        <p>Menu Items</p>
        <div className='MenuItem'>
          {menuItems.map((item, index) => {
            return (
              <MenuItems
                key={index}
                addOrder={() => {
                  removeSms()
                  addOrder(item)
                  addCount(index)
                }}
                image={item.icon}
                name={item.name}
                price={item.price}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App
