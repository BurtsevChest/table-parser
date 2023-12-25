export const set = (key: string, value: string | object) => {
   let newValue = '';

   if (typeof value === 'object') {
      try {
         newValue = JSON.stringify(value);
      } catch {
         newValue = '';
      }
   } else {
      newValue = value;
   }

   localStorage.setItem(key, newValue);
}

export const get = (key: string) => {
   const result = localStorage.getItem(key);
   if (result) {
      return JSON.parse(result);
   }
   return null;
}