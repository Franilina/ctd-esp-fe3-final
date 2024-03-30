import { createContext, useReducer, useContext } from 'react';

const initialState = {
    dentists: [],
    theme: 'light',
    favorites: JSON.parse(localStorage.getItem('favDentists')) || []
};

const reducer = (state, action) => {
    switch (action.type) {
    case 'SET_DENTISTS':
        return { ...state, dentists: action.payload };
    case 'TOGGLE_FAV':
        const updatedFavs = state.favorites.includes(action.payload) ?
        state.favorites.filter(id => id !== action.payload) :
        [...state.favorites, action.payload];
        localStorage.setItem('favDentists', JSON.stringify(updatedFavs));
        return { ...state, favorites: updatedFavs };
    case 'TOGGLE_THEME':
        return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    default:
        return state;
    }
};

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
    <AppContext.Provider value={{ state, dispatch }}>
        {children}
    </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);
