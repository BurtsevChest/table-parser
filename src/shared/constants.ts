/**
 * Список атрибутов, которые не нужно удалять у элементов
 */
const attributesToSave = [
   'rowspan',
   'colspan',
   'href'
];

/**
 * Список тегов, которые нужно точно удалить из верстки (при этом их содержимое останется)
 */
export const tagsForDelete = [
   'span',
];

/**
 * Список селекторов и новых атрибутов для элемента
 * Порядок очень важен, т.к. они будут обрабатваться по порядку
 */
export const newAttrsForElements: Record<string, object> = {
   'table': {
      class: 'sbis-ru__Articles__table-scroll sbis-ru__Articles__table-scroll-width',
   },
   'td': {
      class: 'sbis-ru__Articles__table-scroll-tr-td',
   },
   'th': {
      class: 'sbis-ru__Articles__table-scroll-tr-td sbis-ru__Articles__table-scroll-tr-td-title-top sbis-ru__Articles__table-vertical-align--center sbis-ru__Articles__table--col4',
   },
   'p': {
      class: 'sbis-ru__Articles--pb8',
   },
   'p:last-child': {
      class: '',
   },
}

/**
 * @param attributeName имя атрибута 
 * @returns Вовзращает true, если атрибут нужно оставить, false, если удалить
 */
export function isNeedAttribute(attributeName: string) {
   return attributesToSave.includes(attributeName);
}

/**
 * Опции для js-beautify. Библиотека форматирует финальный результат по заданным опциям
 */
export const resultCodeOptions = {
   "indent_size": "3",
   "indent_char": " ",
   "max_preserve_newlines": "-1",
   "preserve_newlines": false,
   "keep_array_indentation": false,
   "break_chained_methods": false,
   "indent_scripts": "keep",
   "brace_style": "collapse",
   "space_before_conditional": true,
   "unescape_strings": false,
   "jslint_happy": false,
   "end_with_newline": false,
   "wrap_line_length": "0",
   "indent_inner_html": false,
   "comma_first": false,
   "e4x": false,
   "indent_empty_lines": false
};
