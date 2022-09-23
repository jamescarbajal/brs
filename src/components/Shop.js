import { useState, useContext, useEffect } from 'react';
import { ThemeContext } from 'styled-components';
import SearchForm from './SearchForm';
import { CardContainer, MiniHeader } from './StyledComponents';
import ProductCard from './ProductCard';
import { CartContext } from '../contexts/Cart/CartContext';


export default function Shop(props) {

  const [productList, setProductList] = useState({});

  const [isLoading, setIsLoading] = useState(false);
  
  const getAllProducts = async () => {
      setIsLoading(true);
      const url = 'https://fakestoreapi.com/products'
      const response = await fetch(url);
      const data = await response.json();
      console.log('Product Data: ', data);
      setProductList(data);
      setIsLoading(false);
  };

  useEffect( () => {
     getAllProducts();
  }, []);

  return(
      <>
          <SearchForm />
          <div></div>
          <div>
            {!isLoading ? (
              <CardContainer>
                {productList.length > 0 ? (
                  productList.map( (product) => 
                  (
                    <ProductCard product={product} id={product.id} title={product.title} price={product.price} category={product.category} description={product.description} image={product.image} />
                  ))

                )
                :
                (
                  <MiniHeader>
                    No results found.
                  </MiniHeader>
                )}
              </CardContainer>
            )
            :
            (
              <MiniHeader class="container-fluid text-center border" style={{ color: "blue" }}>
                Loading...
              </MiniHeader>
            )}
          </div>   

      </>
    );
}