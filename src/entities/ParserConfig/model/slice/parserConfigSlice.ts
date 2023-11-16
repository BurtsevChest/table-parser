import { createSlice } from '@reduxjs/toolkit';
import parserHtml from '../../../../shared/config/parserHtml';

const parseConfigSlice = createSlice({
   name: 'parseConfig',
   initialState: parserHtml,
   reducers: {
      setNewConfig: (state, action) => {
         state = action.payload;
      },
      setNewAttrList: (state, action) => {
         state.newAttrs = action.payload;
      },
      setNewAttrsToSave: (state, action) => {
         state.attributesToSave = action.payload;
      },
      addNewAttrsToSave: (state, action) => {
         state.attributesToSave?.push(action.payload);
      },
      changeNewAttrsToSave: (state, {payload}) => {
         state.attributesToSave = state.attributesToSave?.map((item, index) => {
            if (index === payload.index) {
               item = payload.value
            }
            return item;
         });
      },
      deleteNewAttrsToSave: (state, action) => {
         state.attributesToSave = state.attributesToSave?.filter((_, index) => index !== action.payload);
      },
      setNewTagsForDelete: (state, action) => {
         state.tagsForDelete = action.payload;
      }
   },
});

export const { actions: parseConfigActions } = parseConfigSlice;
export const { reducer: parseConfigReducer } = parseConfigSlice;
