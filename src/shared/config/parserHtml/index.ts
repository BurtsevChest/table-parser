import { IParserConfigOptions } from "../../parseHtml";
import attributesToSave from "./attributesToSave";
import tagsForDelete from "./tagsForDelete";
import newAttrs from "./newAttrs";

export default {
   newAttrs: newAttrs,
   attributesToSave: attributesToSave,
   tagsForDelete: tagsForDelete,
} as IParserConfigOptions;
