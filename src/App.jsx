import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ItemList from './components/ItemList'
import OrderList from './components/OrderList'


const App = () => {
  return (
    <div>
      <Navbar />
      <ItemList />
      <OrderList />
      
    </div>
  )
}

export default App
