import { useEffect, useState } from "react";
import model from "../model";

function getCommentList(id: number) {
   model.getCommentsByPostId(id).then((res) => {
      return res;
   });
}

export const socket = {
   connect() {
      console.log('connected');
   },
   disconnect() {
      console.log('disconnect');
   },
   on(nameOfEvent: string, callback: Function) {
      const newComment = {};
      if (nameOfEvent === 'commentOfPostChange') {
         callback(newComment);
      }
   }
}

export const useCommentsOfPosts = (id: number) => {
   const [commentList, setCommentList] = useState<object>(() => getCommentList(id));

   useEffect(() => {
      socket.connect();
      socket.on('commentOfPostChange', (newComment: object) => {
         setCommentList(newComment);
      });

      return () => {
         socket.disconnect();
      }
   }, []);

   const updateComment = (comment: object) => {
      model.updateComment(comment).then(() => {
         setCommentList(comment);
      }).catch((e) => {
         throw e;
      });
   }

   const deleteComment = (id: number) => {
      model.deleteComment(id).then(() => {
         setCommentList(commentList);
      }).catch((e) => {
         throw e;
      });
   }

   const createComment = (comment: object) => {
      model.createComment(comment).then(() => {
         setCommentList(comment);
      }).catch((e) => {
         throw e;
      });
   }

   const clearStore = () => {
      setCommentList([]);
   }

   return {
      commentList,
      createComment,
      updateComment,
      deleteComment,
      clearStore,
   }
}
