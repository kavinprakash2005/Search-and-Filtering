import React from 'react'
import './Price.css';
function Price() {
  return (

    <div className='ml'>
      <h2 className='sidebar-title price-title'>Price</h2>
      <label className='sidebar-label-container'>
        <input type='radio' name='test2' />
        <span className='checkmark'></span>All
      </label>

     

      <label className='sidebar-label-container'>
        <input type='radio' name='test2' />
        <span className='checkmark'></span>$15000
      </label>

      <label className='sidebar-label-container'>
        <input type='radio' name='test2' />
        <span className='checkmark'></span>25000
      </label>

      <label className='sidebar-label-container'>
        <input type='radio' name='test2' />
        <span className='checkmark'></span>50000
      </label>

      <label className='sidebar-label-container'>
        <input type='radio' name='test2' />
        <span className='checkmark'></span>$100,000
      </label>
    </div>

  )
}
export default Price;