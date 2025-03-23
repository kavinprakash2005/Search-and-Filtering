import React from 'react'
import "./Sidebar.css";
import  Category from './Category/Category'
import Price from './Price/Price'
import Colors from './Colors/Color' 


function Sidebar() {
  return (
<section className='sidebar'>
    <div className='logo-container '>
        <h1><span className='span'>K</span>avin</h1>
        <h2>Mobiles</h2>
    </div>
    <Category/>
    <Price/>
    <Colors/>
</section>
  )
}
export default Sidebar;