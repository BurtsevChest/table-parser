import { useParserConfigModel } from "..";
import { useShallow } from "zustand/react/shallow";

export const useConfig = () => {
   return useParserConfigModel(useShallow((state) => ({
      config: state.config
   })));
}
