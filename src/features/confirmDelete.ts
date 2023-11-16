import dialog from "../shared/config/dialog";

interface IConfirmDelete {
   onDelete?: () => void;
   onSave?: () => void;
   title?: string;
}

/**
 * Хелпер для подверждения удаления пользователем
 * @param обьект со следующими полями
 * @onDelete срабатывает, если пользователь подтвердил удаление
 * @onSave срабатывает, если пользователь не подтвердил удаление
 * @title заголовок модального окна
 * ```
 * import confirmDelete from 'confirmDelete';
 * 
 * const handleDeleteClick = () => {
 *   confirmDelete({
 *      title: 'Are you shure?',
 *      onDelete: () => {
 *         console.log('User confirm delte');
 *      },
 *      onSave: () => {
 *         console.log('User are not confirm delete');
 *      }
 *   });
 * }
 * ```
 */
export default function confirmDelete({ onDelete, onSave, title }: IConfirmDelete) {
   dialog.open({
      Component: () => import('../shared/ui/ConfirmDeleteDialog'),
      name: 'confirmDeleteDialog',
      props: {
         onDelete,
         onSave,
         title,
      },
      styles: {
         ...dialog.defaultStyles,
         minWidth: 'none',
         minHeight: 'none',
         borderRadius: '12px',
         padding: '16px',
      },
      modal: true,
   });
}
