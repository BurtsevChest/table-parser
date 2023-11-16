import anchor from "./anchor";
import table from "./table";
import td from "./td";
import li from "./li";
import { TParseNodeItem } from "../../../parseHtml";

export default {
   'table': table,
   'td': td,
   'a': anchor,
   'li': li,
} as TParseNodeItem;
