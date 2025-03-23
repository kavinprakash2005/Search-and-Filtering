import React from 'react'
import './Price.css';
import Input from '../../Components/Input';
function Price(handleChange) {

  return (

    <div className='ml'>
      <h2 className='sidebar-title price-title'>Price</h2>
      <label className='sidebar-label-container'>
        <input onChange={handleChange} type='radio' value="" name="test2" />
        <span className='checkmark'></span>All
      </label>

      <Input
        handleChange={handleChange}
        value={1000}
        title="$1000"
        name="test2"
      />
      <Input
        handleChange={handleChange}
        value={25000}
        title="$25000"
        name="test2"
      />


      <Input
        handleChange={handleChange}
        value={50000}
        title="$50000"
        name="test2"
      />


      <Input
        handleChange={handleChange}
        value={100000}
        title="$100000"
        name="test2"
      />






    </div>

  )
}
export default Price;