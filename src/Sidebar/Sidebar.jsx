import React from 'react'
import "./Sidebar.css";
import  Category from './Category/Category'
import Price from './Price/Price'
import Colors from './Colors/Color'


function Sidebar({handleChange}) {
  
  return (
<section className='sidebar'>
    <div className='logo-container '>
        <h1><span className='span'>K</span>avin</h1>
        <h2>Mobiles</h2>
    </div>
    <Category handleChange={handleChange}/>
    <Price  handleChange={handleChange}/>
    <Colors  handleChange={handleChange}/>
</section>
  )
}
export default Sidebar;