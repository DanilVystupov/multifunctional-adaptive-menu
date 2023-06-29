import React from 'react';
import './MenuButton.scss';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const MenuButton = ({ isMenuOpen, handleMenuToggle }) => {

    return (
        <div
            onClick={handleMenuToggle}
            className={`mobile-btn ${isMenuOpen ? 'active-btn' : ''}`}
        >
            {isMenuOpen ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
    );
};

export default MenuButton;