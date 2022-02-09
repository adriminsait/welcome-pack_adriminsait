import {combineReducers} from 'redux'
import { calendarReducer } from './calendarReducer'
import { uiReducer } from './uireducer'


export const rootReducer = combineReducers({
    ui: uiReducer,
    calendar: calendarReducer
})