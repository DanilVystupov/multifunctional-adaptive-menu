import React from 'react';
import './MainMenu.scss';
import iconArrowRight from '../../icons/icon_arrow-right.png';
import { useDispatch, useSelector } from 'react-redux';
import SelectLanguage from '../../UI/SelectLanguage/SelectLanguage';
import { Link } from 'react-router-dom';
import { SERVICES_PAGE } from '../../paths/paths';
import { translations } from '../../data/translations';
import { setIsMenuOpen } from '../../store/slices/menuSlice';
import MenuButton from '../../UI/MenuButton/MenuButton';

const MainMenu = () => {
    const isMenuOpen = useSelector((state) => state.menu.isMenuOpen)
    const currentLanguage = useSelector((state) => state.menu.currentLanguage);
    const dispatch = useDispatch()

    const translationsData = translations;

    const getTranslation = (key) => {
        const translation = translationsData[currentLanguage];
        return translation[key];
    };

    const handleMenuToggle = () => {
        dispatch(setIsMenuOpen(!isMenuOpen));
    };

    return (
        <div className='main-menu'>

            <header className='main-menu__header'>
                {isMenuOpen ? <SelectLanguage /> : <h1>Нажмите на меню справа</h1>}
            </header>

            <MenuButton isMenuOpen={isMenuOpen} handleMenuToggle={handleMenuToggle} />

            <section
                className={`menu ${isMenuOpen ? 'active' : ''}`}
                onClick={handleMenuToggle}
            >
                <nav className='menu__info'>
                    <ul className='menu__info__item-list'>
                        <Link to={`${SERVICES_PAGE}${currentLanguage}/${isMenuOpen}`}>
                            <li className='item-menu'>
                                <span className='item-menu__link'>{getTranslation('services')}</span>
                                <img className='item-menu__icon' src={iconArrowRight} alt="icon arrow right" />
                            </li>
                        </Link>
                        <li className='item-menu' onClick={(e) => e.stopPropagation()}>
                            <a className='item-menu__link' href='##'>{getTranslation('managedIT')}</a>
                            <img className='item-menu__icon' src={iconArrowRight} alt="icon arrow right" />
                        </li>
                        <li className='item-menu' onClick={(e) => e.stopPropagation()}>
                            <a className='item-menu__link' href='##'>{getTranslation('telecomSolutions')}</a>
                            <img className='item-menu__icon' src={iconArrowRight} alt="icon arrow right" />
                        </li>
                        <li className='item-menu' onClick={(e) => e.stopPropagation()}>
                            <a className='item-menu__link' href='##'>{getTranslation('aboutUs')}</a>
                            <img className='item-menu__icon' src={iconArrowRight} alt="icon arrow right" />
                        </li>
                    </ul>
                </nav>

                <nav className='menu__contact'>
                    <ul className='menu__contact__item-list'>
                        <li className='item-menu' onClick={(e) => e.stopPropagation()}>
                            <a className='item-menu__link' href='##'>{getTranslation('contacts')}</a>
                        </li>
                        <li className='item-menu' onClick={(e) => e.stopPropagation()}>
                            <a className='item-menu__link' href='##'>{getTranslation('search')}</a>
                        </li>
                    </ul>
                </nav>

            </section>
        </div>
    );
};

export default MainMenu;