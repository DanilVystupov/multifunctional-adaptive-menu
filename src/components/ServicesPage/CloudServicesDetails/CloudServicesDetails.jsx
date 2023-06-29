import React from 'react';
import './CloudServicesDetails.scss';
import SelectLanguage from '../../../UI/SelectLanguage/SelectLanguage';
import { useSelector } from 'react-redux';
import { translations } from '../../../data/translations';
import iconArrowLeft from '../../../icons/icon_arrow-left.png';
import { MAIN_MENU, SERVICES_PAGE } from '../../../paths/paths';
import { Link, useParams } from 'react-router-dom';
import MenuButton from '../../../UI/MenuButton/MenuButton';

const CloudServicesDetails = () => {
    const currentLanguage = useSelector((state) => state.menu.currentLanguage);
    const { isMenuOpen } = useParams()

    const translationsData = translations

    const getTranslation = (key) => {
        const translation = translationsData[currentLanguage];
        return translation[key];
    };

    return (
        <div className='cloud-wrap'>

            <div className='cloud-content'>
                <SelectLanguage />
            </div>

            <Link to={MAIN_MENU}>
                <MenuButton isMenuOpen={isMenuOpen} />
            </Link>

            <section className='cloud'>

                <nav className='cloud__come-back'>
                    <ul className='cloud__come-back__list'>
                        <li className='item-come-back'>
                            <Link to={`${SERVICES_PAGE}${currentLanguage}/${isMenuOpen}`}>
                                <img className='item-come-back__icon' src={iconArrowLeft} alt='icon arrow left' />
                                <span className='item-come-back__link'>{getTranslation('services')}</span>
                            </Link>
                        </li>
                    </ul>
                </nav>

                <nav className='cloud__info-items'>
                    <ul className='cloud__info-items__list'>
                        <li className='item-cloud'>
                            <h2 className='item-cloud__title'>{getTranslation('cloudConsulting')}</h2>
                            <span className='item-cloud__description'>{getTranslation('cloudConsultingDescription')}</span>
                        </li>

                        <li className='item-cloud'>
                            <h2 className='item-cloud__title'>{getTranslation('cloudAnalytics')}</h2>
                            <span className='item-cloud__description'>{getTranslation('cloudAnalyticsDescription')}</span>
                        </li>

                        <li className='item-cloud'>
                            <h2 className='item-cloud__title'>{getTranslation('hybridCloud')}</h2>
                            <span className='item-cloud__description'>{getTranslation('hybridCloudDescription')}</span>
                        </li>

                        <li className='item-cloud'>
                            <h2 className='item-cloud__title'>{getTranslation('hybridCloud')}</h2>
                            <span className='item-cloud__description'>{getTranslation('hybridCloudDescription')}</span>
                        </li>

                        <li className='item-cloud'>
                            <h2 className='item-cloud__title'>{getTranslation('multicloud')}</h2>
                            <span className='item-cloud__description'>{getTranslation('multicloudDescription')}</span>
                        </li>

                        <li className='item-cloud'>
                            <h2 className='item-cloud__title'>{getTranslation('cloudConsulting')}</h2>
                            <span className='item-cloud__description'>{getTranslation('cloudConsultingDescription')}</span>
                        </li>

                        <li className='item-cloud'>
                            <h2 className='item-cloud__title'>{getTranslation('cloudAnalytics')}</h2>
                            <span className='item-cloud__description'>{getTranslation('cloudAnalyticsDescription')}</span>
                        </li>

                        <li className='item-cloud'>
                            <h2 className='item-cloud__title'>{getTranslation('hybridCloud')}</h2>
                            <span className='item-cloud__description'>{getTranslation('hybridCloudDescription')}</span>
                        </li>

                    </ul>
                </nav>

            </section>
        </div>
    )
}

export default CloudServicesDetails