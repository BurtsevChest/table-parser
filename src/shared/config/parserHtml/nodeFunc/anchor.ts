// Если у ссылки в href присутствует https://sbis.ru/articles/... , то это внутренняя ссылка, оставляем только pathname, удаляем rel и target
// Если у ссылки в href присутствует https://sbis.ru/help, то оставляем pathname, добавляем target
// Если у ссылки в href присутствует https://sbis.ru/otherFuckShitUrl, то оставляем pathname, и делаем из неё UtmLink
// Если у ссылки в href присутствует https://tensor.ru, то оставляем ссылку как есть и делаем из нее UtmLink, добавляем target

const siteNames = [
   'sbis',
   'saby',
];

export default function(anchor: HTMLAnchorElement) {
   const isTensor = /^https:\/\/tensor.ru/.test(anchor.href);
   let isInsideArticle = false;
   let isInsideHelp = false;
   let isInsideLanding = false;
   let urlObject: URL;

   for (const siteName of siteNames) {
      if (new RegExp(`^https://${siteName}.ru/articles`).test(anchor.href)) {
         isInsideArticle = true;
         break;
      }
      if (new RegExp(`^https://${siteName}.ru/help`).test(anchor.href)) {
         isInsideHelp = true;
         break;
      }
      if (new RegExp(`^https://${siteName}.ru`).test(anchor.href)) {
         isInsideLanding = true;
         break;
      }
   }

   anchor.classList.add('sbis-ru__Articles_link');

   try {
      urlObject = new URL(anchor.href);
   } catch {
      console.log(`
         Cannot Create URL, because хватит пехать в текст пометки, что это блять ссылка, и так видим что тут ссылка
         Даже не надейся увидеть тут красивую валидную верстку, иди дальше путник и верстай ручками.
         А вообще можешь попробовать открыть в GoogleDocs документ, там пометки отделяются от текста не копируются вместе с ним`
      );
      urlObject = new URL('https:sbis.ru/failed_url_check_in_document');
   }

   if (isInsideArticle) {
      anchor.href = urlObject.pathname;
      return;
   }

   if (isInsideHelp) {
      anchor.href = urlObject.pathname;
      anchor.target = '_blank';
      return;
   }

   if (isInsideLanding) {
      anchor.href = urlObject.pathname;
      return;
   }

   if (isTensor) {
      anchor.target = '_blank';
      return;
   }

   anchor.target = '_blank';
   anchor.rel = 'noopener';
}
