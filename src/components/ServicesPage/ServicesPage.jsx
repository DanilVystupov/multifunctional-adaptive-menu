import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { translations } from '../../data/translations';
import iconArrowLeft from '../../icons/icon_arrow-left.png';
import iconArrowRight from '../../icons/icon_arrow-right.png';
import './ServicesPage.scss';
import SelectLanguage from '../../UI/SelectLanguage/SelectLanguage';
import { CLOUD_COMPUTING_INFO, MAIN_MENU } from '../../paths/paths';
import { useDispatch, useSelector } from 'react-redux';
import { setIsMenuOpen } from '../../store/slices/menuSlice';
import MenuButton from '../../UI/MenuButton/MenuButton';

const ServicesPage = () => {
    const dispatch = useDispatch()
    const currentLanguage = useSelector((state) => state.menu.currentLanguage);
    const { isMenuOpen } = useParams();

    const translationsData = translations;

    const getTranslation = (key) => {
        const translation = translationsData[currentLanguage];
        return translation[key];
    };

    const saveMenuState = () => {
        dispatch(setIsMenuOpen(true))
    }

    return (
        <div className='services-wrap'>
            <header className='services-wrap__header'>
                <SelectLanguage />
            </header>

            <Link to={MAIN_MENU}>
                <MenuButton isMenuOpen={isMenuOpen} />
            </Link>

            <section className='services'>

                <nav className='services__come-back'>
                    <ul className='services__come-back__list'>
                        <li className='item-come-back'>
                            <Link to={MAIN_MENU} onClick={saveMenuState}>
                                <img className='item-come-back__icon' src={iconArrowLeft} alt='icon arrow left' />
                                <span className='item-come-back__link'>{getTranslation('services')}</span>
                            </Link>
                        </li>
                    </ul>
                </nav>

                <nav className='services__info-item'>
                    <ul className='services__info-list'>
                        <Link to={`${CLOUD_COMPUTING_INFO}${currentLanguage}/${isMenuOpen}`}>
                            <li className='item-services'>
                                <span className='item-services__link'>{getTranslation('cloudComputing')}</span>
                                <img className='item-services__icon' src={iconArrowRight} alt='icon arrow right' />
                            </li>
                        </Link>
                        <li className='item-services'>
                            <a href='##' className='item-services__link'>{getTranslation('dedicatedServers')}</a>
                            <img className='item-services__icon' src={iconArrowRight} alt='icon arrow right' />
                        </li>
                        <li className='item-services'>
                            <a href='##' className='item-services__link'>{getTranslation('platformServices')}</a>
                            <img className='item-services__icon' src={iconArrowRight} alt='icon arrow right' />
                        </li>
                        <li className='item-services'>
                            <a href='##' className='item-services__link'>{getTranslation('informationSecurity')}</a>
                            <img className='item-services__icon' src={iconArrowRight} alt='icon arrow right' />
                        </li>
                    </ul>
                </nav>
            </section>
        </div>
    );
};

export default ServicesPage;