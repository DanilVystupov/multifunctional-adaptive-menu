// В этом файле определен "slice" (срез) Redux для управления состоянием меню. 
// Изначальное состояние содержит значения currentLanguage (текущий язык) и 
// isMenuOpen (флаг открытия меню). С помощью функции createSlice из библиотеки @reduxjs/toolkit 
// создается срез, который содержит редюсер и действия для изменения состояния. 
// Действия setCurrentLanguage и setIsMenuOpen используются для обновления соответствующих 
// полей состояния. Действия экспортируются и могут быть использованы в компонентах для 
// взаимодействия с состоянием меню. Редюсер экспортируется и добавляется в хранилище Redux.

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentLanguage: 'ru',
    isMenuOpen: false,
}

const menuSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setCurrentLanguage: (state, action) => {
            state.currentLanguage = action.payload;
        },
        setIsMenuOpen: (state, action) => {
            state.isMenuOpen = action.payload
        }
    },
});

export const { setCurrentLanguage, setIsMenuOpen } = menuSlice.actions;

export default menuSlice.reducer;
