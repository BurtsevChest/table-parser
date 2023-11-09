import { configureStore } from "@reduxjs/toolkit";
import { parseConfigReducer } from "../../../../entities/ParserConfig";
import { StoreSchema } from "..";

export default configureStore<StoreSchema>({
   reducer: {
      parserConfig: parseConfigReducer,
   },
});
