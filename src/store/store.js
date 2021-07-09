import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk';
import contactReducer from '../reducers/contactReducer'
import { getFirebase,reactReduxFirebase } from "react-redux-firebase";
import { getFirestore,reduxFirestore } from "redux-firestore";
import firebase from '../firebase/config'


export const store = createStore(contactReducer, compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
    reactReduxFirebase(firebase),
    reduxFirestore(firebase)
));

//applyMiddleware is used when you want to build packages on top of the normal
//redux react flow (the reason we doingthat for thunk because it is sort of interrupt the normal
//flow)