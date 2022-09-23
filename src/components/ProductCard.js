import { CardWrapper, CardHeader, ProductImage, CardButton } from "./StyledComponents";
import { useState, useContext, useEffect } from 'react';
import { CartContext } from '../contexts/Cart/CartContext';
import LazyLoad from 'react-lazy-load';
import ProductModal from './ProductModal';
import { render } from "@testing-library/react";

export default function ProductCard(props) {

    const { product, category, description, id, image, price, rating, count, title } = props;

    const [isModalOpen, setIsModalOpen] = useState(false);

    const { cartItems, setCartItems } = useContext(CartContext);

    const [isItemInCart, setIsItemInCart] = useState(false);

    const checkCart = (itemId) => {
        setIsItemInCart(false);
        const cartList = JSON.parse(localStorage.getItem('CART_ITEMS')) || [];
        const found = cartList.find(obj => obj.id === itemId );
        if (found){
            setIsItemInCart(true);
        } else setIsItemInCart(false);
    };

    useEffect( () => {
        checkCart(id);
    }, []);

    const AddToCart = (itemId) => {
        const addedItem = {id: itemId, quantity: 1};
        setCartItems([...cartItems, addedItem]);
        setIsItemInCart(true);
    };

    const IncrementItem = (itemId) => {
        const cartList = JSON.parse(localStorage.getItem('CART_ITEMS')) || [];
        const found = cartList.find( (obj, ind) => {
            if (obj.id === itemId) {
                cartList[ind] = {id: itemId, quantity: obj.quantity+1};
                const updatedList = cartList;
                setCartItems(updatedList);
                return true;
            } else return false;
        });
        checkCart(itemId);
    };

    const ViewProductClick = (e) => {
        e.preventDefault();
        setIsModalOpen(true);
    };
    
    return(
        <>
            <CardWrapper>
                <div class="d-flex flex-column align-items-center h-100 justify-content-evenly">
                    <LazyLoad>
                        <ProductImage src={image} alt={title}></ProductImage>
                    </LazyLoad>
                    <CardHeader>{title}</CardHeader>
                </div>
                <div class="d-flex flex-row justify-content-between w-100 mt-3">
                    <CardButton style={{ border: '2px solid lightblue' }} onClick={ViewProductClick}>
                        VIEW
                    </CardButton>

                {isItemInCart ? (
                    <>
                        <CardButton style={{ border: '2px solid orange' }} onClick={() => IncrementItem(id)}>
                            JUST ONE MORE
                        </CardButton>
                    </>
                ):(
                    <>
                        <CardButton style={{ border: '2px solid lightblue' }} onClick={() => AddToCart(id)}>
                            ADD TO CART
                        </CardButton>
                    </>
                )}
                
                </div>
            </CardWrapper>

            <ProductModal category={category} description={description} id={id} image={image} price={price} title={title} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </>
    );
};