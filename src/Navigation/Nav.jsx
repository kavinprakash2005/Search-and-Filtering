import './Nav.css';
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
const Nav=({handleInputChange,query})=>{




  return (

    <nav>

      <div className='nav-container'>
        <input
          type='text' 
          onChange={handleInputChange}
          value={query}
          className='search-input'
          placeholder='enter your search mobiles' 
          />
      </div>
      <div className='profile-cointainer'>

        <a href="#">
          <AiFillHeart className='nav-icons' />
        </a>
        <a href='#'>
          <AiOutlineUser className='nav-icons' />
        </a>
        <a href='#'>
          <AiOutlineShoppingCart className='nav-icons' />

        </a>
      </div>


    </nav>

  );
}
export default Nav;
