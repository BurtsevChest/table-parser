// Если внутри <td> всего один элемент <p>. Нет смысла его оставлять

export default function(tdElement: Element) {
   if (tdElement.children.length === 1 && (tdElement.children[0].tagName === 'P' || tdElement.children[0].tagName === 'DIV') ) {
      tdElement.innerHTML = tdElement.innerHTML.replace(/<\/?p>/, '').replace(/<\/?p>/, '').replace(/<\/?div>/, '').replace(/<\/?div>/, '');
   }
}
