import { isNeedAttribute, newAttrsForElements } from "../constants";
import {parseNodeByTagName} from "./parseNode";
import formatHTML from "../helpers/formatHTML";

/**
 * Очищает элемент от всех атрибутов, кроме тех, что указаны в "attributesToSave" в константах
 * @param node DOM-елемент
 */
function clearAttributes(node: Element) {
   for(let name of node.getAttributeNames()) {
      if(!isNeedAttribute(name)) {
         node.removeAttribute(name);
      }
   }
}

/**
 * Проверяет элемент на наличие лишнего пустого внешнего div, удаялет его и возвращает innerHTML
 * @param node элемент, который нужно проверить
 * @returns 
 */
function checkFirstChild (node: Element): string {
   // @ts-ignore
   if(node.children.length === 1 && node.children[0].tagName === 'DIV') {
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

   let newresult = resultAfterCheckChild
   .replace(/&nbsp;/ig,'')
   .replace(/&gt;/ig,'>')
   .replace(/&lt;/ig,'<')
   .replace(/<\/?span>/ig, '')
   .replace(/<\/?o:p>/ig, '')
   .replace(/<!--[\s\S]*?-->/ig, '')
   .replace(/<table/ig, '<SbisRuWasaby.pages.Articles.templates.TableScroll>\n\t<ws:addTpl>\n\t\t<table')
   .replace(/<\/table>/ig, '\n\t\t</table>\n\t</ws:addTpl>\n</SbisRuWasaby.pages.Articles.templates.TableScroll>');

   // Переделать!!!!!
   // for(let tag of tagsForDelete) {
   //    const regexTag = new RegExp(`<\/?${tag}>`, 'ig');
   //    newresult.replace(regexTag, '');
   // }

   // В будущем нужно добавить типограф для текстовых узлов

   return formatHTML(newresult);
}

/**
 * Находит элемент по заданному селектору и обрабатывает все его дочерние элементы
 * @param selector - css-селектор элемента, внутри которого был вставлен контент
 */
export default function(selector: string): string | '' {
   const mainElement = document.querySelector(selector);

   // Да, сложный алгоритм, но так надо, чтобы, когда скрипт начал превносить изменеия, все теги были очищены от лищнего дерьма.
   // Если запустить все в одном цикле, то будет момент, когда кастомная функция будет пытаться обработать элемент, у потомков которого куча лишних атрибутов, и регулярное выражение увы не сработает (и нет, порядок запуска функции на очистку от атрибутов или запуска кастомных функций тоже не поможет, т.к. в таком случае на момент срабатывания функции потомки будут не очищены от лишних атрибутов), поэтому запускаем по-порядку, сначал чистим все элементы от атрибутов, запускаем кастомные функции, затем даем новый список атрибутов

   if (mainElement?.hasChildNodes()) {
      // Пробегаемся по всем потомкам и чистим их атрибуты
      for (let childElement of mainElement?.getElementsByTagName('*')) {
         clearAttributes(childElement);
      }

      // Запускаем кастомные функции для каждого элемента(ну как для каждого, если такая задана)
      for (let childElement of mainElement?.getElementsByTagName('*')) {
         parseNodeByTagName[childElement?.tagName.toLowerCase()]?.(childElement);
      }

      // Пробегаемся по css-селекторам и задаем новые атрибуты элементам
      for(let [selector, attributes] of Object.entries(newAttrsForElements)) {
         for(let elem of mainElement?.querySelectorAll(selector) || []) {
            for(let [attrName, attrValue] of Object.entries(attributes)) {
               if(attrValue) {
                  elem.setAttribute(attrName, attrValue);
               } else {
                  elem.removeAttribute(attrName);
               }
            }
         }
      }

      return postProduction(mainElement);
   }
   return '';
}
