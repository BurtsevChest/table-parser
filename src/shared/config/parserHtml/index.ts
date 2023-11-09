import { IParserConfigOptions } from "../../parseHtml";
import nodeFunc from "./nodeFunc";
import attributesToSave from "./attributesToSave";
import tagsForDelete from "./tagsForDelete";
import newAttrs from "./newAttrs";

export default {
   nodeFunc: nodeFunc,
   newAttrs: newAttrs,
   attributesToSave: attributesToSave,
   tagsForDelete: tagsForDelete,
} as IParserConfigOptions;
