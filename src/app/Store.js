"use client"
import { createStore,applyMiddleware } from "redux";

import {composeWithDevTools} from 'redux-devtools-extension'
import {thunk} from 'redux-thunk'
import rootreducer from "../app/Reducers";


const middleware=[thunk]

const store=createStore(
    rootreducer,
    composeWithDevTools(applyMiddleware(...middleware))
)
export default store