import ReactModal from 'react-modal';
import { ModalWrapper, ModalCloseButton, ModalImage, ModalWrapperContents } from './StyledComponents';

export default function ProductModal(props) {

    const { isModalOpen, setIsModalOpen, isModalLoading, setIsModalLoading, category, description, id, image, price, title} = props;

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return(
            <ReactModal style={{ overlay: { top: '60px', border: 'none', zIndex: '1' } }} isOpen={isModalOpen}>
                <ModalCloseButton onClick={handleCloseModal}>x</ModalCloseButton>
                <ModalWrapper>
                        <ModalImage src={image}></ModalImage>
                        <ModalWrapperContents>
                            <div class='mt-2' style={{ fontWeight: 'bold' }}>{title}</div>
                            <div class="my-4">{description}</div>
                            <div class="d-flex flex-row w-100 justify-content-between" style={{ maxWidth: '800px' }}>
                                <div>Product ID: {id}</div>
                                <div>Category: {category}</div>
                            </div>
                        </ModalWrapperContents>
                </ModalWrapper>
            </ReactModal>

    );
};