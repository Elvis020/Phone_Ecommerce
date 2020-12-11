import React from 'react';
import {useElvisContext} from '../Context_Api';
import {ButtonContainer,ModalContainer} from './Styled_Components';
import {Link} from 'react-router-dom';

const Modal = () => {
    const { modalOpen, closeModal, modalProduct } = useElvisContext();
    const { img, title, price } = modalProduct;
    return (
      <>
        {modalOpen ? (
          <>
            <ModalContainer>
              <div className="container">
                <div className="row">
                  <div id="modal" className="col-8 mx-auto col-md-6 p-5 col-lg-4 text-center text-capitalize">
                    <h5>item added to the cart</h5>
                    <img src={img} className="img-fluid" alt={title} />
                    <h5>{title}</h5>
                    <h5 className="text-muted">price $:{price}</h5>
                    <Link to="/">
                      <ButtonContainer onClick={() => closeModal()}>store</ButtonContainer>
                    </Link>
                    <Link to="/cart">
                      <ButtonContainer cart onClick={() => closeModal()}>go to cart</ButtonContainer>
                    </Link>
                  </div>
                </div>
              </div>
            </ModalContainer>
          </>
        ) : null}
      </>
    );
}

export default Modal
