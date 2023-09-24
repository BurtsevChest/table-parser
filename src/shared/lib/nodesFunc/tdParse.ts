// Если внутри <td> всего один элемент <p>. Нет смысла его оставлять

export default function(tdElement: Element) {
   if(tdElement.children.length === 1 && (tdElement.children[0].tagName === 'P' || tdElement.children[0].tagName === 'DIV') ) {
      // Я вообще не ебу, как так, но если оставить один replace, то тег p просто встанет в конец строки, но не удалиться
      tdElement.innerHTML = tdElement.innerHTML.replace(/<\/?p>/, '').replace(/<\/?p>/, '').replace(/<\/?div>/, '').replace(/<\/?div>/, '');
   }
}
