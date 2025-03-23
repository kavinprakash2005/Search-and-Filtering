import React from 'react'
import './Category.css';

 function Category() {
  return (
    <>
    <h2 className='sidebar-title'>Category</h2>
    <div>

      <label className='sidebar-label-container'>
        <input type='radio' name='test' />
        <span className='checkmark'></span>All
      </label>
      <label className='sidebar-label-container'>
        <input type='radio' name='test' />
        <span className='checkmark'></span>Smarphones
      </label>
      <label className='sidebar-label-container'>
        <input type='radio' name='test' />
        <span className='checkmark'></span>Tablets
      </label>
      <label className='sidebar-label-container'>
        <input type='radio' name='test' />
        <span className='checkmark'></span>KeyBoard
      </label>
     
      </div>

    
    
    </>

  )
}
export default Category; 