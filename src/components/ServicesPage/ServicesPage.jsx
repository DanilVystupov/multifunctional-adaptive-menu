import React from 'react';
import { Link, useParams } from 'react-router-dom';
import iconArrowLeft from '../../icons/icon_arrow-left.png';
import iconArrowRight from '../../icons/icon_arrow-right.png';
import './ServicesPage.scss';
import SelectLanguage from '../../UI/SelectLanguage/SelectLanguage';
import { CLOUD_SERVICES_DETAILS, MAIN_MENU } from '../../paths/paths';
import { useDispatch, useSelector } from 'react-redux';
import { setIsMenuOpen } from '../../store/slices/menuSlice';
import MenuButton from '../../UI/MenuButton/MenuButton';
import { getTranslation } from './../../UI/TranslationUtils/translationUtils';

const ServicesPage = () => {
    const dispatch = useDispatch()

    // Получаем текущий выбранный язык из Redux-хранилища
    const currentLanguage = useSelector((state) => state.menu.currentLanguage);

    // Получаем значение параметра isMenuOpen из URL с помощью хука useParams()
    const { isMenuOpen } = useParams();

    // Функция для сохранения состояния меню (открыто или закрыто)
    const saveMenuState = () => {
        dispatch(setIsMenuOpen(true))
    }

    return (
        <div className='services-wrap'>
            <header className='services-wrap__header'>
                <SelectLanguage />
            </header>

            {/* Ссылка на главное меню */}
            <Link to={MAIN_MENU}>
                <MenuButton isMenuOpen={isMenuOpen} />
            </Link>

            <section className='services'>

                {/* Навигация "Назад" */}
                <nav className='services__come-back'>
                    <ul className='services__come-back__list'>
                        <li className='item-come-back'>
                            {/* Ссылка на главное меню с обработчиком сохранения состояния меню */}
                            <Link to={MAIN_MENU} onClick={saveMenuState}>
                                <img className='item-come-back__icon' src={iconArrowLeft} alt='icon arrow left' />
                                <span className='item-come-back__link'>{getTranslation('services', currentLanguage)}</span>
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Навигация по разделам услуг */}
                <nav className='services__info-item'>
                    <ul className='services__info-list'>
                        {/* Ссылка на страницу Cloud Services Details*/}
                        <Link to={`${CLOUD_SERVICES_DETAILS}${currentLanguage}/${isMenuOpen}`}>
                            <li className='item-services'>
                                <span className='item-services__link'>{getTranslation('cloudComputing', currentLanguage)}</span>
                                <img className='item-services__icon' src={iconArrowRight} alt='icon arrow right' />
                            </li>
                        </Link>
                        {/* Другие пункты меню услуг */}
                        <li className='item-services'>
                            <a href='##' className='item-services__link'>{getTranslation('dedicatedServers', currentLanguage)}</a>
                            <img className='item-services__icon' src={iconArrowRight} alt='icon arrow right' />
                        </li>
                        <li className='item-services'>
                            <a href='##' className='item-services__link'>{getTranslation('platformServices', currentLanguage)}</a>
                            <img className='item-services__icon' src={iconArrowRight} alt='icon arrow right' />
                        </li>
                        <li className='item-services'>
                            <a href='##' className='item-services__link'>{getTranslation('informationSecurity', currentLanguage)}</a>
                            <img className='item-services__icon' src={iconArrowRight} alt='icon arrow right' />
                        </li>
                    </ul>
                </nav>
            </section>
        </div>
    );
};

export default ServicesPage;