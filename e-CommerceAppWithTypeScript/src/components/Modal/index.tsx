import React from 'react';
import './styles.scss';

const Modal = (props:any) => {
    const{ hideModal, toggleModal, children }=props;
  if (hideModal) return null;
   return (
      <>
    <div className="modalOverlay" onClick={() => toggleModal()} />,
    <div className="modalWrap">
      <div className="modal">
        {children}
      </div>
    </div>
    </>
  );
}

export default Modal;