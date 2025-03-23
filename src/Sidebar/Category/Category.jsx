import React from 'react'
import './Category.css';
import Input from '../../Components/Input';

function Category({ handleChange }) {
  return (
    <>
      <h2 className='sidebar-title'>Category</h2>
      <div>

        <label className='sidebar-label-container'>
          <input onChange={handleChange} type='radio' value="" name='test' />
          <span className='checkmark'></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="smartphones"
          title='Smartphone'
          name='test'
        />
        <Input
          handleChange={handleChange}
          value="keyboard"
          title="keyboard"
          name='test'
        />
        <Input
          handleChange={handleChange}
          value="Tablet"
          title='Tablet'
          name='test'
        />
        <Input
          handleChange={handleChange}
          value='fold'
          title='fold'
          name='test'
        />

      </div>



    </>

  );
}
export default Category; 