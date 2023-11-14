export default {
   createComment(comment: object) {
      return new Promise((resolve) => {
         setTimeout(() => {
            resolve(true);
         }, 3000);
      });
   },
   deleteComment(id: number) {
      return new Promise((resolve) => {
         setTimeout(() => {
            resolve(true);
         }, 3000);
      });
   },
   updateComment(comment: object) {
      return new Promise((resolve) => {
         setTimeout(() => {
            resolve(true);
         }, 3000);
      });
   },
   getCommentsByPostId(id: number) {
      return new Promise((resolve) => {
         setTimeout(() => {
            resolve(true);
         }, 3000);
      });
   }
}
