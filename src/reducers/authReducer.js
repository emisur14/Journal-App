import { types } from '../components/types/types';

export const authReducer = (state ={}, action) => {
    switch (action.type) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            }
        case types.logut:
            return {}
        
         default:
              return state;
    }
}