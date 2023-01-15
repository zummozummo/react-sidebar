import {configureStore} from '@reduxjs/toolkit'
import sidebarReducer from '../reducers/sidebar/sidebarJson'
const store=configureStore({
    reducer:{
        sidebarJson:sidebarReducer
    }
})

export default store