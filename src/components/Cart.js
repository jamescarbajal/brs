import { CartWrapper, MiniHeader, CartSummary, CartHeader, StyledButton } from './StyledComponents';
import { NavLink } from 'react-router-dom';
import { useContext, useState } from 'react';
import { useEffect } from 'react';
import CartItem from './CartItem';
import { CartContext } from '../contexts/Cart/CartContext';
import CartClearPrompt from './CartClearPrompt';



export default function Cart(props) {

  const { cartItems, setCartItems } = useContext(CartContext);

  const [ isLoading, setIsLoading ] = useState(false);

  const [ currentCartData, setCurrentCartData ] = useState([]);

  const [ isClearPomptOpen, setIsClearPromptOpen ] = useState(false);

    async function getItemInfo(e) {
      setIsLoading(true);
      const cartItems = (e);
      for (const item of cartItems) {
        const id = item.id;
        const qty = item.quantity;
        const url = `https://fakestoreapi.com/products/${id}`;
        const response = await fetch(url);
        const data = await response.json();
        const fullData = {...data, quantity: qty};
        setCurrentCartData(currentCartData => [...currentCartData, fullData]);
      }
      setIsLoading(false);
  };

  useEffect( () => {
    getItemInfo(cartItems);
  }, []);

    return (
          <>
            <div style={{ height: '130px' }}></div>
            <MiniHeader style={{ position: 'absolute', marginTop: '110px' }}>
              Your Cart
            </MiniHeader>
          
            {isLoading ? (

                <MiniHeader>Loading cart...</MiniHeader>

              ):(
                <>

                  {!currentCartData.length > 0 ? (
                    <>
                      <MiniHeader>
                        Cart is EMPTY!! 
                      </MiniHeader>
                      <MiniHeader style={{ padding: '30px' }}>
                        Why don't you find your next favorite piece in our <NavLink style={{ weight: 'bold', textDecoration: 'none', color: 'blue' }} to="/Shop">SHOP</NavLink>!
                      </MiniHeader>
                    </>
                        
                    ):(
                      <div class="container-fluid">
                        <div class="row">
                          <div class="col-12 col-lg-8">
                            <CartWrapper>

                            {currentCartData.map( (item) => (

                              <CartItem id={item.id} quantity={item.quantity} title={item.title} description={item.description} image={item.image} category={item.category} price={item.price}/>
                              ))}

                            </CartWrapper>
                          </div>
                          <div class="col-12 col-lg-4 d-flex flex-column align-items-center">
                            <CartSummary>
                              <div class="column">
                                <div>Subtotal: </div>
                                <div>Taxes: </div>
                                <div>Shipping: </div>
                                <div>Credits:</div>
                              </div>
                            </CartSummary>
                            <CartSummary>
                              <div class="column">
                                <div>Total: </div>
                              </div>
                            </CartSummary>
                            <div style={{ maxWidth: "500px" }} class="w-100 d-flex flex-row justify-content-around align-items-center m-1">
                                <button class="btn btn-outline-dark w-100 fw-bold">CHECKOUT</button>
                            </div>
                            <div style={{ maxWidth: "500px", marginTop: "75px", marginBottom: "35px" }} class="w-100 d-flex flex-row justify-content-between align-items-center p-2">
                              <NavLink to="/Shop">
                                <StyledButton path="/Shop">
                                  CONTINUE SHOPPING
                                </StyledButton>
                              </NavLink>
                              <span onClick={() => setIsClearPromptOpen(true)} style={{ color: 'darkred', cursor: 'pointer', fontSize: '12px' }}>
                                CLEAR CART
                              </span>
                            </div>
                          </div>
                      </div>
                    </div>
                  )}
                </>
              )}

              <CartClearPrompt isClearPomptOpen={isClearPomptOpen} setIsClearPromptOpen={setIsClearPromptOpen} />

        </>
    );
};