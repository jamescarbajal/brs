import ReactModal from 'react-modal';
import { CartPromptWrapper, ModalCloseButton, ModalImage, ModalWrapperContents, StyledButton } from './StyledComponents';
import { useContext } from 'react';
import { CartContext } from '../contexts/Cart/CartContext';

export default function CartClearPrompt(props) {

    const { cartItems, setCartItems } = useContext(CartContext);

    const { isClearPomptOpen, setIsClearPromptOpen } = props;

    const RemoveAllItems = () => {
        console.log('Cart items before delete all: ', cartItems);
        setCartItems("");    
        console.log('Cartitems after delete all: ', cartItems);
        window.location.reload();
    };

    const handleCloseClearPrompt = () => {
        setIsClearPromptOpen(false);
    };

    return(
            <ReactModal style={{ height: '100vh', width: '100vw', overlay: { height: '100vh', width: '100vw', border: 'none', zIndex: '1001' }, content: { height: 'fit-content', width: 'fit-content', position: 'absolute', top: '15%', left: '50%', transform: 'translate(-50%)', borderRadius: '15px' } }} isOpen={isClearPomptOpen}>
                <CartPromptWrapper>
                    <span class="mb-3">
                        Are you sure you want to <span style={{ color: "darkred" }}>REMOVE ALL ITEMS</span> from your cart?
                    </span>
                    <div class="d-flex flex-row ">
                        <StyledButton onClick={handleCloseClearPrompt} style={{ marginLeft: '10px', marginRight: '10px' }}>
                            Cancel
                        </StyledButton>
                        <StyledButton onClick={() => RemoveAllItems()} style={{ marginLeft: '10px', marginRight: '10px', color: 'darkred' }}>
                            Remove
                        </StyledButton>
                    </div>
                </CartPromptWrapper>
            </ReactModal>

    );
};