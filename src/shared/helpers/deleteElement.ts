/**
 * Функция удаляет элемент, но оставляет его содержимое, если не указан второй аргумент функции
 * @param node DOM-элемент
 * @param deletChild Флаг указывает, удалить ли элемент вместо с его содержимым
 */
export default function deleteNode(node: Element, deletChild: boolean = false) {
   if(deletChild) {
      node.remove();
   } else {
      const nodeChildrens = document.createDocumentFragment();
      //@ts-ignore
      nodeChildrens.innerHTML = node.childNodes;
   
      node.parentNode?.replaceChild(node, nodeChildrens);
   }
}
