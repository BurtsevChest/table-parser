import { useParserConfigModel } from "..";
import { useShallow } from "zustand/react/shallow";

export const useAttrToSave = () => {
   return useParserConfigModel(useShallow((state) => ({
      addAttrToSave: state.addAttrToSave,
      deleteAttrToSave: state.deleteAttrToSave,
      updateAttrToSave: state.updateAttrToSave
   })));
}
