import { NavLink } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../contexts/UserContext';
import { CompanyLogo, StyledLink, NavBarContents, HamburgerContainer, CartCircle } from './StyledComponents';
import HamburgerMenu from '../HamburgerMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../contexts/Cart/CartContext';

export default function NavBarLinks() {

    const { loggedInUser, setLoggedInUser } = useContext(UserContext);

    const { cartItems, setCartItems } = useContext(CartContext);

    const [ isCartOpen, setIsCartOpen ] = useState(false);

    const cartQuantity = (cartItems) => {
        if (cartItems.length > 0) {
        const cartReduce = cartItems.reduce( (prev, curr) => prev + curr.quantity, 0,);
        return cartReduce;
        } else return 0;
    };

    function styleByActiveStatus(isActive) {
        return isActive ? { 
            fontWeight: "bold",
            color: "navy",
            textDecoration: "none",
            border: 'none'
            } : {
                fontWeight: "regular",
                color: "black",
                textDecoration: "none",
                border: 'none'
            };
    };

    useEffect( () => {
        cartQuantity(cartItems);
    }, []);

    return (
        <>
            <NavBarContents>
                <HamburgerContainer>
                    <HamburgerMenu />
                </HamburgerContainer>

                <NavLink to="/" style={{ textDecoration: "none", color: "black" }}>
                    <CompanyLogo path="/">B | R | S</CompanyLogo>
                </NavLink>


                <div class="d-flex">
                    {!loggedInUser ? (

                        <NavLink style={{ textDecoration: 'none', color: 'black', border: 'none' }} to="/Login">
                            <StyledLink style={({isActive}) => styleByActiveStatus(isActive)} path="/Login" class="mx-2">
                                <FontAwesomeIcon icon={faRightToBracket} />
                            </StyledLink>
                        </NavLink>
                    ) 
                    : 
                    (
                        <NavLink to="/UserAccount" >
                            <StyledLink style={({isActive}) => styleByActiveStatus(isActive)} path="/UserAccount" class="mx-2">
                                <FontAwesomeIcon icon={faUser} style={{ color: 'black', border: '1px solid black', borderRadius: '50%', padding: '5px', backgroundColor: 'lightsteelblue' }} />
                            </StyledLink>
                        </NavLink>
                    )}
                        <NavLink to="/Cart">
                            <StyledLink path="/Cart" style={ ({isActive}) => styleByActiveStatus(isActive)}>
                                <FontAwesomeIcon icon={faCartShopping} />
                                {cartQuantity(cartItems) > 0 && (
                                    <CartCircle>{cartQuantity(cartItems)}</CartCircle>
                                )}
                            </StyledLink>
                        </NavLink>
                
                </div>

        </NavBarContents>
    </>
    );

};