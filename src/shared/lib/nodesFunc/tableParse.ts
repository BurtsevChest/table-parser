// Условность: первый ряд принимаем за шапку.
// Берем первый ряд tr из tbody смотрим на максимаьльный rowspan у <td>, берем n строк(rowspan) tr из tbody, создаем thead и помещаем tr в thead, заменяя при этом внутренние td на th

export default function(table: HTMLTableElement) {
   // Получаем первый ряд
   const firstRow = table.tBodies[0].rows[0];
   // Создаем шапку 
   table.createTHead();

   // new vision (по rowspan определяем, сколько строк нужно поднять в шапку)
   let maxRowSpanNumber = 1;

   for(let tdElement of firstRow.getElementsByTagName('td')) {
      if(tdElement.rowSpan > maxRowSpanNumber) {
         maxRowSpanNumber = tdElement.rowSpan;
      }
   }

   for(let i = 0; i < maxRowSpanNumber; i++) {
      // Можно не итерировать по rows, т.к. в конце цикла tr удаляется, коллекция смещается, и следующий tr будет уже на месте первого. Получается можно итерироваться, и брать только первый row 
      const row = table.tBodies[0].rows[0];
      const newRow = document.createElement('tr');

      for(let tdElement of row.getElementsByTagName('td')) {
         const newThElement = document.createElement('th');

         // Передаем атрибуты
         for(let {name, value} of tdElement.attributes) {
            newThElement.setAttribute(name, value);
         }

         // Передаем внутренности
         newThElement.append(...tdElement.children);
         newRow.appendChild(newThElement);
      }

      // Удаляем tr (в результате коллекция сместится и следующий row окажется на первом месте)
      table.tBodies[0].rows[0].remove();
      
      table.tHead?.append(newRow);
   }

   // Очищаем th от лишних тегов
   if(table.tHead) {
      table.tHead.innerHTML = table.tHead.innerHTML.replace(/<\/?b>/ig, '').replace(/<\/?p>/ig, '').replace(/<\/?div>/ig, '');
   }
}
