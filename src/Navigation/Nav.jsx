import './Nav.css';
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";

function Nav() {
  return (

    <nav>

      <div className='nav-container'>
        <input
          type='text'
          className='search-input'
          placeholder='enter your search mobiles' />
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

  )
}
export default Nav;
