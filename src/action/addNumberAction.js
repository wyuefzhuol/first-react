import { ADD_COUNT } from './actionTypes';
import { createAction } from '@reduxjs/toolkit';

export const addCountAction = createAction(ADD_COUNT, (number) => ({ payload: { number } }));