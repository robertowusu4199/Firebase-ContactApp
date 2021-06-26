import {createStore} from 'redux'
import contactReducer from '../reducers/contactReducer'



export const store = createStore(contactReducer);

//applyMiddleware is used when you want to build packages on top of the normal
//redux react flow (the reason we doingthat for thunk because it is sort of interrupt the normal
//flow)