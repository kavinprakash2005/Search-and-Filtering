import Card from './Components/Card';
import Navigation from './Navigation/Nav';
import Products from './Products/Products';
import Recommended from './Recommended/Recommended';
import Sidebar from './Sidebar/Sidebar';
import products from './db/Data';
import { useState } from 'react';
function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("")
  ///input filter

  const handleInputChange = event => {
    setQuery(event.target.value)
  }
  const filteredItems = products.filter(
  (product) =>
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase())!==
   -1
);
  ///radiofilter
  const handleChange = event => {
    setSelectedCategory(event.target.value)
  }

  ///button filter//


  const handleClick = event => {
    setSelectedCategory(event.target.value)
  }
  function filteredData(products, selected, query) {

    let filteredProducts = products;
    ////fitered input items
    if (query) {
      filteredProducts = filteredItems;
    }

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, price, title ,storage}) =>
           category === selected ||
           color === selected ||
          company === selected ||
           price === selected ||
           storage === selected ||
          title === selected
      );
    }
    return filteredProducts.map
      (({
        img, title, star, reviews,
        price, company ,storage}) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          storage={storage}
          star={star}
          price={price}
          reviews={reviews}
          company={company} />
      ));
  }


  const result = filteredData(products, selectedCategory, query);
  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />

    </>

  );
}
export default App; 