import ReactModal from 'react-modal';
import { CartPromptWrapper, ModalCloseButton, ModalImage, ModalWrapperContents, StyledButton } from './StyledComponents';
import TruncateMarkup from 'react-truncate-markup';
import { useContext } from 'react';
import { CartContext } from '../contexts/Cart/CartContext';

export default function CartPrompt(props) {

    const { setCartItems } = useContext(CartContext);

    const { id, isPromptOpen, setIsPromptOpen, description, image } = props;

    const RemoveItem = (itemId) => {
        const cartList = JSON.parse(localStorage.getItem('CART_ITEMS')) || [];
        console.log('Cartlist before splice: ', cartList);
        const found = cartList.find( (obj, ind) => {
            if (obj.id === itemId) {
                console.log('Index: ', ind);
                cartList.splice(ind, 1);
                console.log('Cartlist after splice: ', cartList);
                const updatedList = cartList;
                console.log('Updated Cart List: ', updatedList);
                setCartItems(updatedList);
                setIsPromptOpen(false);
                window.location.reload();
            };
        });
    };

    const handleClosePrompt = () => {
        setIsPromptOpen(false);
    };

    return(
            <ReactModal style={{ height: '100vh', width: '100vw', overlay: { height: '100vh', width: '100vw', border: 'none', zIndex: '1001' }, content: { height: 'fit-content', width: 'fit-content', position: 'absolute', top: '15%', left: '50%', transform: 'translate(-50%)', borderRadius: '15px' } }} isOpen={isPromptOpen}>
                <CartPromptWrapper>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <ModalImage style={{ height: 'auto', maxHeight: '150px', maxWidth: '150px' }} src={image} />
                        <ModalWrapperContents>
                                <TruncateMarkup lines={4} >
                                    <div style={{ maxHeight: '150px', maxWidth: '200px' }}>
                                        {description}
                                    </div>
                                </TruncateMarkup>
                        </ModalWrapperContents>
                    </div>
                    <span class="mt-4">
                        Are you sure you want to remove this item from your cart?
                    </span>
                    <div class="d-flex flex-row ">
                        <StyledButton onClick={handleClosePrompt} style={{ marginLeft: '10px', marginRight: '10px' }}>
                            Cancel
                        </StyledButton>
                        <StyledButton onClick={() => RemoveItem(id)} style={{ marginLeft: '10px', marginRight: '10px', color: 'darkred' }}>
                            Remove
                        </StyledButton>
                    </div>
                </CartPromptWrapper>
            </ReactModal>

    );
};