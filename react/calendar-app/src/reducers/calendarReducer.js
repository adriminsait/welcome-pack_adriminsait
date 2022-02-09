import moment from 'moment'
import { types } from '../types/types';

const initialState = {
    events: [
        {
            title: 'Ir a buscar al niño al cole',
            start: moment().toDate(),
            end: moment().add(2, 'hours').toDate(),
            bgcolor: '#fafafa',
            notes: 'Llega a las 20:30',
            user: {
                _id: '123',
                name: 'Adri'
            }
        }
    ],
    activeEvent: null
};

export const calendarReducer = (state = initialState, action) => {

    switch(action.type) {

        case types.eventSetActive:
            return {
                ...state,
                activeEvent: action.payload
            }

        case types.eventAddNew:
            return {
                ...state,
                events: [
                    ...state.events,
                    action.payload
                ]
            }
        
        case types.eventClearActiveEvent:
            return {
                ...state,
                activeEvent: null
            }


        default:
            return state;
    }

}