import {createSlice} from '@reduxjs/toolkit';
import parserHtml from '../../../../shared/config/parserHtml';

const parseConfigSlice = createSlice({
   name: 'parseConfig',
   initialState: parserHtml,
   reducers: {
      // @ts-ignore
      setNewConfig: (state, action) => {
         state = action.payload;
      }
   },
});

export const {actions: parseConfigActions} = parseConfigSlice;
export const {reducer: parseConfigReducer} = parseConfigSlice;
