export default function(Element: HTMLLIElement) {
   if (Element.children.length === 1 && (Element.children[0].tagName === 'P' || Element.children[0].tagName === 'DIV') ) {
      Element.innerHTML = Element.innerHTML.replace(/<\/?p>/, '').replace(/<\/?p>/, '').replace(/<\/?div>/, '').replace(/<\/?div>/, '');
   }
}