import { useParserConfigModel } from "..";
import { useShallow } from "zustand/react/shallow";

export const useTagsForDelete = () => {
   return useParserConfigModel(useShallow((state) => ({
      addNewAttrsSelector: state.addNewAttrsSelector,
      deleteTagsForDelete: state.deleteTagsForDelete,
      updateTagsForDelete: state.updateTagsForDelete
   })));
}
