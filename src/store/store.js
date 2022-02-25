import {configureStore} from '@reduxjs/toolkit'
import weatherReduc from './reducers/weatherReduc';

export default configureStore({
    reducer : {
        favoris : weatherReduc
    } 

});