import { getParseConfig } from "../model/selectors";
import { parseConfigActions } from "../model/slice/parserConfigSlice";
import { useSelector, useDispatch } from "react-redux";
import { TNewNodeAttrs, TTagsForDelete, TAttributesToSave } from "../../../shared/parseHtml";

export const useParseConfig = () => {
   const config = useSelector(getParseConfig);
   const dispatch = useDispatch();

   const updateGlobalConfig = () => {
      dispatch(parseConfigActions.setNewConfig(config));
   }

   const updateNewAttrs = (list: TNewNodeAttrs) => {
      dispatch(parseConfigActions.setNewAttrList(list));
   }

   const updateTagsForDelete = (tags: TTagsForDelete) => {
      dispatch(parseConfigActions.setNewTagsForDelete(tags));
   }

   const updateAttributesToSave = (attrs: TAttributesToSave) => {
      dispatch(parseConfigActions.setNewAttrsToSave(attrs));
   }

   const addAttributeToSave = (attribute: string) => {
      dispatch(parseConfigActions.addNewAttrsToSave(attribute));
   }

   const changeNewAttrsToSave = (attribute: {index: number; value: string;}) => {
      dispatch(parseConfigActions.changeNewAttrsToSave(attribute));
   }

   const deleteAttributeToSave = (index: number) => {
      dispatch(parseConfigActions.deleteNewAttrsToSave(index));
   }

   return {
      config,
      updateGlobalConfig,
      newAttrs: config.newAttrs,
      tagsForDelete: config.tagsForDelete,
      attributesToSave: config.attributesToSave,
      updateNewAttrs,
      updateTagsForDelete,
      updateAttributesToSave,
      addAttributeToSave,
      deleteAttributeToSave,
      changeNewAttrsToSave,
   }
}
