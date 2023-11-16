import { TNewNodeAttrs } from "../../../shared/parseHtml";
import { IItem } from "../ui/NewAttrList";
import { BaseItem } from "../../../shared/ui/Accordion";
import ItemTemplate, {item} from "../ui/ItemTemplate";

const prepareDataForAttrList = (attrList: TNewNodeAttrs) => {
   return Object.entries(attrList).map(([tagName, attrs]) => {
      return {
         tagName: tagName,
         attrList: Object.entries(attrs).map(([attrName, attrValue]) => {
            return {
               attr: attrName,
               value: attrValue
            }
         })
      }
   }) as IItem[];
}

export const prepareDataForAccordion = (attrList: TNewNodeAttrs, onItemUpdate: (item: item) => void) => {
   return prepareDataForAttrList(attrList).map((item) => {
      return {
         title: item.tagName,
         ItemTemplate: item.attrList.map((attr, index) => (
            <ItemTemplate
               key={index}
               attr={attr.attr}
               value={attr.value}
               onItemUpdate={onItemUpdate}
            />
         ))
      }
   }) as BaseItem[];
}
