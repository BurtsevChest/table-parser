import formatHTML from "../helpers/formatHTML";
import { parseTypograf } from "../helpers/typografText";

export type TParseNodeItem = Record<string, (node: unknown) => void>;

export type TNewNodeAttrs = {
   selector: string;
   attrList: {
      name: string;
      value: string;
   }[];
};

export type TTagsForDelete = string[];

export type TAttributesToSave = string[];

export interface IParserConfigOptions {
   newAttrs?: TNewNodeAttrs[];
   attributesToSave?: TAttributesToSave;
   tagsForDelete?: TTagsForDelete;
}

/**
 * Удаляет элемент, вставляя вместо себя своё содержимое
 * @param Element DOM-елемент
 */
function deleteElement(Element: Element) {
   if (!Element.hasChildNodes()) {
      Element.remove();
      return;
   }

   const parent = Element.parentNode;

   if (parent) {
      while (Element.firstChild) {
         parent.insertBefore(Element.firstChild, Element);
      }
      parent.removeChild(Element);
   }
}

/**
 * Очищает элемент от всех атрибутов, кроме тех, что указаны в "attributesToSave" в константах
 * @param node DOM-елемент
 */
function clearAttributes(node: Element, attributesToSave: string[]) {
   for (const name of node.getAttributeNames()) {
      if (!attributesToSave.includes(name)) {
         node.removeAttribute(name);
      }
   }
}

/**
 * Проверяет элемент на наличие лишнего пустого внешнего div, удаялет его и возвращает innerHTML
 * @param node элемент, который нужно проверить
 * @returns 
 */
function checkFirstChild(node: Element): string {
   if (node.children.length === 1 && node.children[0].tagName === 'DIV') {
      return node.children[0].innerHTML.trim();
   } else {
      return node.innerHTML;
   }
}

/**
 * Пост-обработка получившегося дерева элементов. Нужна чтобы шлифануть получившуюся верстку, очистить от лишних комментариев, лишних непонятных тегов или спанов и т.п. работает чисто со строкой, так что особой магии тут не будет
 * @param node 
 * @returns 
 */
function postProduction(node: Element): string {
   return formatHTML(parseTypograf(checkFirstChild(node)));
}

const defaultRegexList = [
   /<br>/ig,
   /&nbsp;/ig,
   /&gt;/ig,
   /&lt;/ig,
   /<\/span>/ig,
   /<span>/ig,
   /<u>/ig,
   /<\/u>/ig,
   /<\/colgroup>/ig,
   /<colgroup>/ig,
   /<\/?o:p>/ig,
   /<!--[\s\S]*?-->/ig
];

export default function (Element: Element, config: IParserConfigOptions, nodeFunc?: TParseNodeItem): string {
   if (Element.hasChildNodes()) {

      if (config.tagsForDelete?.length) {
         for (const childElement of Element.getElementsByTagName('*')) {
            if (config.tagsForDelete.includes(childElement.tagName.toLowerCase())) {
               deleteElement(childElement);
            }
         }
      }

      if (config.attributesToSave?.length) {
         for (const childElement of Element.getElementsByTagName('*')) {
            clearAttributes(childElement, config.attributesToSave);
         }
      }

      // Чистим с помощью регулярок(как будто это текст) некоторые вещи невозможно почистить с помощью узлов например магический тег o:p, который может прилететь из word
      for (const regex of defaultRegexList) {
         Element.innerHTML = Element.innerHTML.replace(regex, '');
      }

      // Запускаем кастомные функции для каждого элемента(ну как для каждого, если такая задана)
      for (const childElement of Element.getElementsByTagName('*')) {
         nodeFunc?.[childElement.tagName.toLowerCase()]?.(childElement);
      }

      // После первичных обработок чистим пустые узлы(а такие могут быmь)
      for (const childElement of Element.getElementsByTagName('*')) {
         if (childElement.innerHTML == '') {
            childElement.remove();
         }
      }

      if (config.newAttrs) {
         for (const { selector, attrList } of config.newAttrs) {
            for (const elem of Element.querySelectorAll(selector)) {
               for (const { name, value } of attrList) {
                  if (value) {
                     elem.setAttribute(name, value);
                  } else {
                     elem.removeAttribute(name);
                  }
               }
            }
         }
      }

      return postProduction(Element);
   }
   return '';
}
