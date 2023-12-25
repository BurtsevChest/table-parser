import { getParseConfig } from "../model/selectors";
import { parseConfigActions } from "../model/slice/parserConfigSlice";
import { useSelector, useDispatch } from "react-redux";
import { TAttributesToSave } from "../../../shared/parseHtml";

export const useAttributesToSave = () => {
   const attributesToSave = useSelector(getParseConfig).attributesToSave;
   const dispatch = useDispatch();

   const updateAttributesToSave = (attrs: TAttributesToSave) => {
      dispatch(parseConfigActions.setNewAttrsToSave(attrs));
   }

   const addAttributeToSave = (attribute: string) => {
      dispatch(parseConfigActions.addNewAttrsToSave(attribute));
   }

   const changeNewAttrsToSave = (attribute: {index: number; value: string;}) => {
      dispatch(parseConfigActions.changeNewAttrsToSave(attribute));
   }

   const deleteAttributeToSave = (attrName: string) => {
      dispatch(parseConfigActions.deleteNewAttrsToSave(attrName));
   }

   return {
      attributesToSave,
      updateAttributesToSave,
      addAttributeToSave,
      deleteAttributeToSave,
      changeNewAttrsToSave,
   }
}
