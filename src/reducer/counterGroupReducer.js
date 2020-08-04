import { ADD_COUNT } from '../action/actionTypes'
import { createReducer } from '@reduxjs/toolkit'

const initializeState = {
    totalNumber: 0
}

export default createReducer (initializeState, {
    [ADD_COUNT]: ((state, action) => ({ totalNumber: state.totalNumber + action.payload.number }))
})