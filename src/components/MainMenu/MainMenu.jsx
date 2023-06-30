import React from 'react';
import './MainMenu.scss';
import iconArrowRight from '../../icons/icon_arrow-right.png';
import { useDispatch, useSelector } from 'react-redux';
import SelectLanguage from '../../UI/SelectLanguage/SelectLanguage';
import { Link } from 'react-router-dom';
import { SERVICES_PAGE } from '../../paths/paths';
import { setIsMenuOpen } from '../../store/slices/menuSlice';
import MenuButton from '../../UI/MenuButton/MenuButton';
import { getTranslation } from './../../UI/TranslationUtils/translationUtils';

const MainMenu = () => {
    // Получение состояния меню из Redux-хранилища
    const isMenuOpen = useSelector((state) => state.menu.isMenuOpen)
    const currentLanguage = useSelector((state) => state.menu.currentLanguage);
    const dispatch = useDispatch()


    // Обработчик события открытия/закрытия меню
    const handleMenuToggle = () => {
        dispatch(setIsMenuOpen(!isMenuOpen));
    };

    return (
        <div className='main-menu'>

            <header className='main-menu__header'>
                {/* Отображение компонента SelectLanguage, если меню открыто, иначе отображение заголовка */}
                {isMenuOpen ? <SelectLanguage /> : <h1>Нажмите на меню справа</h1>}
            </header>

            {/* Кнопка меню с передачей состояния меню и обработчика события */}
            <MenuButton isMenuOpen={isMenuOpen} handleMenuToggle={handleMenuToggle} />

            <section
                className={`menu ${isMenuOpen ? 'active' : ''}`}
                onClick={handleMenuToggle}
            >
                <nav className='menu__info'>
                    <ul className='menu__info__item-list'>
                        {/* Ссылка на страницу ServicesPage */}
                        <Link to={`${SERVICES_PAGE}${currentLanguage}/${isMenuOpen}`}>
                            <li className='item-menu'>
                                <span className='item-menu__link'>{getTranslation('services', currentLanguage)}</span>
                                <img className='item-menu__icon' src={iconArrowRight} alt="icon arrow right" />
                            </li>
                        </Link>
                        {/* onClick={(e) => e.stopPropagation()} - это обработчик события клика, 
                        который предотвращает всплытие события. В данном случае событие: handleMenuToggle  */}
                        <li className='item-menu' onClick={(e) => e.stopPropagation()}>
                            <a className='item-menu__link' href='##'>{getTranslation('managedIT', currentLanguage)}</a>
                            <img className='item-menu__icon' src={iconArrowRight} alt="icon arrow right" />
                        </li>
                        <li className='item-menu' onClick={(e) => e.stopPropagation()}>
                            <a className='item-menu__link' href='##'>{getTranslation('telecomSolutions', currentLanguage)}</a>
                            <img className='item-menu__icon' src={iconArrowRight} alt="icon arrow right" />
                        </li>
                        <li className='item-menu' onClick={(e) => e.stopPropagation()}>
                            <a className='item-menu__link' href='##'>{getTranslation('aboutUs', currentLanguage)}</a>
                            <img className='item-menu__icon' src={iconArrowRight} alt="icon arrow right" />
                        </li>
                    </ul>
                </nav>

                <nav className='menu__contact'>
                    <ul className='menu__contact__item-list'>
                        <li className='item-menu' onClick={(e) => e.stopPropagation()}>
                            <a className='item-menu__link' href='##'>{getTranslation('contacts', currentLanguage)}</a>
                        </li>
                        <li className='item-menu' onClick={(e) => e.stopPropagation()}>
                            <a className='item-menu__link' href='##'>{getTranslation('search', currentLanguage)}</a>
                        </li>
                    </ul>
                </nav>

            </section>
        </div>
    );
};

export default MainMenu;