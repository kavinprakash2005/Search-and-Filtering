import React from 'react'
import './Color.css';

 function Color() {
  return (
    <div>
      <h2 className='sidebar-title'>Color</h2>
      <label className='sidebar-label-container'>
        <input type='radio' name='test2' />
        <span className='checkmark'></span>All
      </label>

      <label className='sidebar-label-container'>
        <input type='radio' name='test2' />
        <span className='checkmark'></span>Green
      </label>

      <label className='sidebar-label-container'>
        <input type='radio' name='test2' />
        <span className='checkmark'></span>black
      </label>

      <label className='sidebar-label-container'>
        <input type='radio' name='test2' />
        <span className='checkmark'></span>white
      </label>

      <label className='sidebar-label-container'>
        <input type='radio' name='test2' />
        <span className='checkmark'></span>yellow
      </label>

      </div>
  )
}
export default Color;