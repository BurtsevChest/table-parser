import formatHTML from "../helpers/formatHTML";
// import { typograf } from "../helpers/typografText";

export type TParseNodeItem = Record<string, (node: unknown) => void>;

export type TNewNodeAttrs = Record<string, object>;

export interface IParserConfigOptions {
   nodeFunc?: TParseNodeItem;
   newAttrs?: TNewNodeAttrs;
   attributesToSave?: string[];
   tagsForDelete?: string[];
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
   for (let name of node.getAttributeNames()) {
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
   // @ts-ignore
   if (node.children.length === 1 && node.children[0].tagName === 'DIV') {
      // @ts-ignore
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
   const resultAfterCheckChild = checkFirstChild(node);

   // let newresult = resultAfterCheckChild
   // .replace(/<table/ig, '<SbisRuWasaby.pages.Articles.templates.TableScroll>\n\t<ws:addTpl>\n\t\t<table')
   // .replace(/<\/table>/ig, '\n\t\t</table>\n\t</ws:addTpl>\n</SbisRuWasaby.pages.Articles.templates.TableScroll>');

   return formatHTML(resultAfterCheckChild);
}

const defaultRegexList = [
   /<br>/ig,
   /&nbsp;/ig,
   /&gt;/ig,
   /&lt;/ig,
   /<\/?span>/ig,
   /<\/?colgroup>/ig,
   /<\/?o:p>/ig,
   /<!--[\s\S]*?-->/ig
];

export default function (Element: Element, config: IParserConfigOptions): string {
   if (Element.hasChildNodes()) {

      if (config.tagsForDelete?.length) {
         for (let childElement of Element.getElementsByTagName('*')) {
            if (config.tagsForDelete.includes(childElement.tagName.toLowerCase())) {
               deleteElement(childElement);
            }
         }
      }

      if (config.attributesToSave?.length) {
         for (let childElement of Element.getElementsByTagName('*')) {
            clearAttributes(childElement, config.attributesToSave);
         }
      }

      // Чистим с помощью регулярок(как будто это текст) некоторые вещи невозможно почистить с помощью узлов например магический тег o:p, который может прилететь из word
      for (let regex of defaultRegexList) {
         Element.innerHTML = Element.innerHTML.replace(regex, '');
      }

      // Запускаем кастомные функции для каждого элемента(ну как для каждого, если такая задана)
      for (let childElement of Element?.getElementsByTagName('*')) {
         config?.nodeFunc?.[childElement.tagName.toLowerCase()]?.(childElement);
      }

      // После первичных обработок чистим пустые узлы(а такие могут быmь)
      for (let childElement of Element.getElementsByTagName('*')) {
         if (childElement.innerHTML == '') {
            childElement.remove();
         }
      }

      // // Попытка подрубить типограф
      // for (let childElement of Element.getElementsByTagName('*')) {
      //    if (childElement.nodeType === 3) {
      //       childElement.textContent = typograf.execute(childElement.textContent);
      //    }
      // }

      if (config.newAttrs) {
         // Пробегаемся по css-селекторам и задаем новые атрибуты элементам
         for (let [selector, attributes] of Object.entries(config.newAttrs)) {
            for (let elem of Element.querySelectorAll(selector)) {
               for (let [attrName, attrValue] of Object.entries(attributes)) {
                  if (attrValue) {
                     elem.setAttribute(attrName, attrValue);
                  } else {
                     elem.removeAttribute(attrName);
                  }
               }
            }
         }
      }

      return postProduction(Element);
   }
   return '';
}
