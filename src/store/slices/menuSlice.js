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
