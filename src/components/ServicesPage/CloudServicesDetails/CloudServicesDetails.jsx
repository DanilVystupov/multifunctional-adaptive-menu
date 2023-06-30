import React from 'react';
import './CloudServicesDetails.scss';
import SelectLanguage from '../../../UI/SelectLanguage/SelectLanguage';
import { useSelector } from 'react-redux';
import iconArrowLeft from '../../../icons/icon_arrow-left.png';
import { MAIN_MENU, SERVICES_PAGE } from '../../../paths/paths';
import { Link, useParams } from 'react-router-dom';
import MenuButton from '../../../UI/MenuButton/MenuButton';
import { getTranslation } from './../../../UI/TranslationUtils/translationUtils';

const CloudServicesDetails = () => {
    const currentLanguage = useSelector((state) => state.menu.currentLanguage);
    const { isMenuOpen } = useParams()

    return (
        <div className='cloud-wrap'>

            <div className='cloud-content'>
                <SelectLanguage />
            </div>

            {/* Ссылка на главное меню */}
            <Link to={MAIN_MENU}>
                <MenuButton isMenuOpen={isMenuOpen} />
            </Link>

            <section className='cloud'>

                {/* Навигация "Назад" */}
                <nav className='cloud__come-back'>
                    <ul className='cloud__come-back__list'>
                        <li className='item-come-back'>
                            {/* Ссылка на страницу ServicesPage с обработчиком сохранения состояния меню */}
                            <Link to={`${SERVICES_PAGE}${currentLanguage}/${isMenuOpen}`}>
                                <img className='item-come-back__icon' src={iconArrowLeft} alt='icon arrow left' />
                                <span className='item-come-back__link'>{getTranslation('services', currentLanguage)}</span>
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Список информации об Cloud Services Details */}
                <nav className='cloud__info-items'>
                    <ul className='cloud__info-items__list'>
                        <li className='item-cloud'>
                            <h2 className='item-cloud__title'>
                                {getTranslation('cloudConsulting', currentLanguage)}
                            </h2>
                            <span className='item-cloud__description'>
                                {getTranslation('cloudConsultingDescription', currentLanguage)}
                            </span>
                        </li>

                        <li className='item-cloud'>
                            <h2 className='item-cloud__title'>
                                {getTranslation('cloudAnalytics', currentLanguage)}
                            </h2>
                            <span className='item-cloud__description'>
                                {getTranslation('cloudAnalyticsDescription', currentLanguage)}
                            </span>
                        </li>

                        <li className='item-cloud'>
                            <h2 className='item-cloud__title'>
                                {getTranslation('hybridCloud', currentLanguage)}
                            </h2>
                            <span className='item-cloud__description'>
                                {getTranslation('hybridCloudDescription', currentLanguage)}
                            </span>
                        </li>

                        <li className='item-cloud'>
                            <h2 className='item-cloud__title'>
                                {getTranslation('hybridCloud', currentLanguage)}
                            </h2>
                            <span className='item-cloud__description'>
                                {getTranslation('hybridCloudDescription', currentLanguage)}
                            </span>
                        </li>

                        <li className='item-cloud'>
                            <h2 className='item-cloud__title'>
                                {getTranslation('multicloud', currentLanguage)}
                            </h2>
                            <span className='item-cloud__description'>
                                {getTranslation('multicloudDescription', currentLanguage)}
                            </span>
                        </li>

                        <li className='item-cloud'>
                            <h2 className='item-cloud__title'>
                                {getTranslation('cloudConsulting', currentLanguage)}
                            </h2>
                            <span className='item-cloud__description'>
                                {getTranslation('cloudConsultingDescription', currentLanguage)}
                            </span>
                        </li>

                        <li className='item-cloud'>
                            <h2 className='item-cloud__title'>
                                {getTranslation('cloudAnalytics', currentLanguage)}
                            </h2>
                            <span className='item-cloud__description'>
                                {getTranslation('cloudAnalyticsDescription', currentLanguage)}
                            </span>
                        </li>

                        <li className='item-cloud'>
                            <h2 className='item-cloud__title'>
                                {getTranslation('hybridCloud', currentLanguage)}
                            </h2>
                            <span className='item-cloud__description'>
                                {getTranslation('hybridCloudDescription', currentLanguage)}
                            </span>
                        </li>
                    </ul>
                </nav>

            </section>
        </div>
    )
}

export default CloudServicesDetails