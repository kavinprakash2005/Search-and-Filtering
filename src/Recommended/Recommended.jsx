import Button from '../Components/Button';
import './Recommended.css';
function Recommended({ handleClick }) {
  return (
    <div>
      <h2 className='recommended-title'>Recommended</h2>
      <div className="recommended-flex">
        
        <Button onClickHandler={handleClick} value="" title='All products' />
        <Button onClickHandler={handleClick} value="Realme" title='Realme' />
        <Button onClickHandler={handleClick} value="Samsung" title='Samsung' />
        <Button onClickHandler={handleClick} value="Apple" title='Apple' />
        <Button onClickHandler={handleClick} value="Redmi" title='Redmi' />
        <Button onClickHandler={handleClick} value="Oneplus" title='Oneplus' />
        <Button onClickHandler={handleClick} value="iqoo" title='iqoo' />
        <Button onClickHandler={handleClick} value="Infinix" title='Infinx' />
        <Button onClickHandler={handleClick} value="Oppo" title='Oppo' />
        <Button onClickHandler={handleClick} value="Poco" title='Poco' />
      </div>
    </div>
  ) 
}
export default Recommended;  