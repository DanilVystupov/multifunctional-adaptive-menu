import React from 'react';
import Select, { components } from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentLanguage } from '../../store/slices/menuSlice';
import './SelectLanguage.scss';
import iconUS from './icons/Icon_US_round.png';
import iconNL from './icons/Icon_NL_round.png';
import iconRU from './icons/Icon_RU_round.png';
import iconBY from './icons/Icon_BY_round.png';
import iconKZ from './icons/Icon_KZ_round.png';
import iconTR from './icons/Icon_TR_round.png';
import selectedIcon from './icons/selected_icon.svg';

const languageOptions = [
    { value: 'country', label: 'Страна' },
    { value: 'us', label: 'United States', icon: iconUS },
    { value: 'nl', label: 'Netherlands', icon: iconNL },
    { value: 'by', label: 'Беларусь', icon: iconBY },
    { value: 'ru', label: 'Россия', icon: iconRU },
    { value: 'kz', label: 'Казахстан', icon: iconKZ },
    { value: 'tr', label: 'Türkiye', icon: iconTR },
];

const customSelectStyles = {
    control: (provided) => ({
        ...provided,
        width: '80px',
        marginLeft: '20px',
        boxShadow: 'none',
        outline: 'none',
        border: 'none',
        cursor: 'pointer',
    }),
    option: (provided, { isFocused, data, isSelected }) => ({
        ...provided,
        background: isFocused ? 'rgba(241, 248, 254, 1)' : 'rgba(255, 255, 255, 1)',
        color: 'black',
        fontWeight: data === languageOptions[0] ? '700' : '400',
        pointerEvents: data === languageOptions[0] ? 'none' : 'auto',
        fontSize: '14px',
        cursor: 'pointer',
        display: 'flex',
        '::before': {
            content: `url(${data.icon})`,
            display: 'inline-block',
            marginRight: data === languageOptions[0] ? '0' : '10px',
        },
        '::after': {
            content: '""',
            display: 'inline-block',
            width: '16px',
            height: '16px',
            marginLeft: 'auto',
            background: `url(${selectedIcon})`,
            backgroundSize: 'cover',
            visibility: isSelected ? 'visible' : 'hidden',
        },
    }),
    menu: (provided) => ({
        ...provided,
        marginLeft: '20px',
        marginTop: '0',
        borderRadius: '2px',
    }),
    singleValue: (provided, { data }) => ({
        ...provided,
        display: 'flex',
        alignItems: 'center',
        color: 'black',
        padding: '0',
        margin: '0',
        '::before': {
            content: `url(${data.icon})`,
            display: 'inline-flex',
            marginRight: '5px',
            paddingTop: '4px',
        },
    }),
};

const formatLabel = (label) => {
    switch (label) {
        case 'United States':
            return 'US';
        case 'Netherlands':
            return 'NL';
        case 'Беларусь':
            return 'BY';
        case 'Россия':
            return 'RU';
        case 'Казахстан':
            return 'KZ';
        case 'Türkiye':
            return 'TR';
        default:
            return label;
    }
};

const SingleValue = ({ children, ...props }) => {
    const { data } = props;
    const formattedLabel = formatLabel(data.label);

    return (
        <components.SingleValue {...props}>
            {formattedLabel}
        </components.SingleValue>
    )
};

const SelectLanguage = () => {
    const currentLanguage = useSelector((state) => state.menu.currentLanguage)
    const dispatch = useDispatch();

    const changeLanguage = (language) => {
        dispatch(setCurrentLanguage(language));
    };

    const handleSelectChange = (selectedOption) => {
        const selectedLanguage = selectedOption.value;
        changeLanguage(selectedLanguage);
    };

    return (
        <Select
            className="change-lang"
            options={languageOptions}
            onChange={handleSelectChange}
            styles={customSelectStyles}
            value={languageOptions.find((option) => option.value === currentLanguage)}
            isSearchable={false}
            components={{ SingleValue }}
        />
    );
};

export default SelectLanguage;