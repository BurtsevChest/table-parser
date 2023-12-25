import sidebar from "../../shared/config/sidebar";

/**
 * Хелпер для открытия виджета "Настройки" в сайдбаре справа
 */
export const openSettings = () => {
   sidebar.open({
      Component: () => import('./ui/Settings'),
      name: 'SettingsWidget',
      modal: true
   });
}
