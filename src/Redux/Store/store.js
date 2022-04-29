import {configureStore} from '@reduxjs/toolkit';
import getReducer from "../Modules/getReducer";
import {languageReducer} from "../Modules/Language/LanguageReducer";


const Store =  configureStore({
    reducer:{
        getReducer,
        languageReducer
    }
})
export default Store