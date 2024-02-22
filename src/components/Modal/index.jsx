// Modal.js
import React from 'react';
import s from './Modal.module.css';
import CloseButton from '../CloseButton';

const Modal = ({ onClose, children, modalTxt }) => {
    return (
        <div className={s.modalOverlay}>
            <div className={s.modalContent}>
                <button className={s.closeBtn} onClick={onClose}>
                </button>
                <div className={s.modalAll}>
                    {/* {children} */}
                    <div  className={s.modalTxt}>
                    <p className={s.congratulations}>Congratulations!</p>
                    {modalTxt.map((elem, index) => <p key={index} >{elem}</p> )}
                    </div>
                    <div className={s.spaceModalTxt}></div> 
                    
                </div>
            </div>
        </div>
    );
};

export default Modal;
