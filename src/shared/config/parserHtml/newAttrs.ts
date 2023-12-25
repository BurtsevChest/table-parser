/**
 * Список селекторов и новых атрибутов для элемента
 * Порядок очень важен, т.к. они будут обрабатваться по порядку
 */
export default {
   // table
   'table': {
      class: 'sbis-ru__Articles__table-scroll sbis-ru__Articles__table-scroll-width',
   },
   'td': {
      class: 'sbis-ru__Articles__table-scroll-tr-td',
   },
   'th': {
      class: 'sbis-ru__Articles__table-scroll-tr-td sbis-ru__Articles__table-scroll-tr-td-title-top sbis-ru__Articles__table-vertical-align--center sbis-ru__Articles__table--col4',
   },

   // text
   'p': {
      class: 'sbis-ru__Articles--pb8',
   },
   'p:last-child': {
      class: '',
   },

   // list
   'ul': {
      class: 'sbis-ru__Articles--pb8'
   },
   'ul:last-child': {
      class: ''
   },
   'ul>li': {
      class: 'sbis-ru__Articles__ul-li sbis-ru__Articles__li--gray sbis-ru__Articles--pb4'
   },
   'ul>li:last-child': {
      class: 'sbis-ru__Articles__ul-li sbis-ru__Articles__li--gray'
   },
   'ol': {
      class: 'sbis-ru__Articles-ol sbis-ru__Articles--pb8'
   },
   'ol:last-child': {
      class: 'sbis-ru__Articles-ol'
   },
   'ol>li': {
      class: 'sbis-ru__Articles-ol-li sbis-ru__Articles--pb4'
   },
   'ol>li:last-child': {
      class: 'sbis-ru__Articles-ol-li'
   },

   // headers
   'h2': {
      class: 'sbis_ru-header-h2 sbis_ru-header-h2-padding-bottom',
   },
   'h3': {
      class: 'sbis_ru-header-h3 sbis-ru__Articles--pb8',
   },
   'h4': {
      class: 'sbis_ru-header-h4 sbis-ru__Articles--pb8',
   }
}
