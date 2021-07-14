import { configureStore } from '@reduxjs/toolkit';
import vocabReducer from '../features/vocab/vocabSlice';

export default configureStore({
    reducer:{
        vocab: vocabReducer
    }
});