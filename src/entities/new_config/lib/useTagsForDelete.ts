import { useParserConfigModel } from "..";
import { useShallow } from "zustand/react/shallow";

export const useTagsForDelete = () => {
   return useParserConfigModel(useShallow((state) => ({
      addTagsForDelete: state.addTagsForDelete,
      deleteTagsForDelete: state.deleteTagsForDelete,
      updateTagsForDelete: state.updateTagsForDelete
   })));
}
