import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: any, action: any): any => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            return [...state, action.payload.up ? state.sort(): state.reverse()]

        }
        case 'check': {

           return state.filter((f:UserType) => f.age > action.payload ) // need to fix
        }
        default:
            return state
    }
}
