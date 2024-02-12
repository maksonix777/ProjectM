// Modal.js
import React from 'react';
import s from './Modal.module.css';
import CloseButton from '../CloseButton';

const Modal = ({ onClose, children }) => {
    return (
        <div className={s.modalOverlay}>
            <div className={s.modalContent}>
                <button className={s.closeBtn} onClick={onClose}>
                </button>
                <div className={s.modalAll}>
                    {children}
                <div className={s.spaceModalTxt}></div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
