import Typograf from "typograf";

const typograf = new Typograf({ locale: ['ru', 'en-US'] });

function parseAnswer(response: string) {
   response = response.replace(/&gt;/g, '>');
   response = response.replace(/&lt;/g, '<');
   response = response.replace(/&amp;/g, '&');
   response = response.replace(/«/g, '&#171;');
   response = response.replace(/»/g, '&#187;');
   response = response.replace(/ /g, '&#160;');
   response = response.replace(/&nbsp;/g, '&#160;');
   response = response.replace(/>(.*?)(-)(.*?)</g, ">$1&#8209;$3<");
   response = response.replace(/>(.*?)(-)(.*?)</g, ">$1&#8212;$3<");
   response = response.replace(/&ndash;/g, '&#8211;');
   response = response.replace(/&times;/g, '&#215;');
   response = response.replace(/&minus;/g, '&#8722;');
   response = response.replace(/№/g, '&#8470;');
   return response;
}

export function parseTypograf(text: string | number) {
   const tempResult = typograf.execute(text);
   return parseAnswer(tempResult);
}