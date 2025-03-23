import React from 'react'
import './Color.css';
import Input from '../../Components/Input';

function Color({ handleChange }) {
  return (
    <div>
      <h2 className='sidebar-title color-title'>Colors</h2>
      <label className='sidebar-label-container'>
        <input onChange={handleChange} type='radio' value="" name='test2' />
        <span className='checkmark all'
        ></span>All
      </label>
      <Input handleChange={handleChange}
        value="black"
        title="Black"
        name="test1"
        color="black"
      />
      <Input handleChange={handleChange}
        value="yellow"
        title="Yellow"
        name="test1"
        color="yellow"
      />
      <Input handleChange={handleChange}
        value="green"
        title="Green"
        name="test1"
        color="green"
      />
      <label className='sidebar-label-container'>
        <input type='radio' onChange={handleChange}
          value="white"
          nmae="test1"
        />
        <span
          className='checkmark'
          style={{
            background: "white",
            border: "2px solid black",
          }}
        ></span>
        white
      </label>

    </div>
  );
}
export default Color;