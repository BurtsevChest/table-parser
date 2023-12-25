import { create } from "zustand";
import parserConfig from "../../shared/config/parserHtml";
import { IParserConfigOptions } from "../../shared/parseHtml";
import * as store from "../../shared/helpers/localStorage";

const LOCAL_STORAGE_KEY = 'parserConfig';

/**
 * Сохраняем состояние конфига в локальную историю
 * @param state Конфиг настроек
 */
const saveState = (state: object) => {
   store.set(LOCAL_STORAGE_KEY, state);
}

/**
 * Восстанаваливаем состояние конфига из локальной истории при запуске приложения
 */
const getState = () => {
   return store.get(LOCAL_STORAGE_KEY) || parserConfig;
}

export interface IParserConfigModel {
   /**
    * Весь конфиг
    */
   config: IParserConfigOptions;

   /**
    * Добавить атрибут для сохранения
    * @param attrName Имя атрибута
    * @returns 
    */
   addAttrToSave: (attrName: string) => void;

   /**
    * Удаляет атрибут для сохранения по индексу
    * @param index Индекс атрибут для сохранения
    * @returns 
    */
   deleteAttrToSave: (index: number) => void;

   /**
    * Обновляет значения атрибута по заданному индексу
    * @param attrName Новое имя для атрибута
    * @param index Индекс атрибута
    * @returns 
    */
   updateAttrToSave: (attrName: string, index: number) => void;

   /**
    * Добавить тег для удаления
    * @param tagName Имя атрибута
    * @returns 
    */
   addTagsForDelete: (tagName: string) => void;

   /**
    * Удаляет тег для удаления по индексу
    * @param index Индекс тега для удаления
    * @returns 
    */
   deleteTagsForDelete: (index: number) => void;

   /**
    * Обновляет значения тега по заданному индексу
    * @param tagName Новое имя для тега
    * @param index Индекс тега
    * @returns 
    */
   updateTagsForDelete: (tagName: string, index: number) => void;

   /**
    * Вернуть настройки по умоланию
    * @returns 
    */
   returnDefaultState: () => void;

   /**
    * Создает новыую запись с пустыми значениями
    * @param selector CSS-селектор
    * @returns 
    */
   addNewAttrsSelector: (selector: string) => void;

   /**
    * Удаляет CSS-селектор по названию
    * @param selector CSS-селектор
    * @returns
    */
   deleteNewAttrsSelector: (selector: string) => void;
}

export const useParserConfigModel = create<IParserConfigModel>((set, get) => ({
   config: getState(),
   returnDefaultState: () => {
      set({config: parserConfig});
      saveState(parserConfig);
   },
   addAttrToSave: (attrName: string) => {
      const currentConfig = get().config;
      const attributesToSave = currentConfig.attributesToSave;

      attributesToSave?.push(attrName);

      const newConfig = {
         ...currentConfig,
         attributesToSave: attributesToSave
      };

      set({config: newConfig});
      saveState(newConfig);
   },
   deleteAttrToSave: (index: number) => {
      const currentConfig = get().config;
      let attributesToSave = currentConfig.attributesToSave;

      attributesToSave = attributesToSave?.filter((_, i) => i != index);

      const newConfig = {
         ...currentConfig,
         attributesToSave: attributesToSave
      };

      set({config: newConfig});
      saveState(newConfig);
   },
   updateAttrToSave: (attrName: string, index: number) => {
      const currentConfig = get().config;
      let attributesToSave = currentConfig.attributesToSave;

      attributesToSave = attributesToSave?.map((attr, i) => {
         if (i === index) {
            attr = attrName;
         }
         return attr;
      });

      const newConfig = {
         ...currentConfig,
         attributesToSave: attributesToSave
      };

      set({config: newConfig});
      saveState(newConfig);
   },
   addTagsForDelete: (tagName: string) => {
      const currentConfig = get().config;
      const tagsForDelete = currentConfig.tagsForDelete;

      tagsForDelete?.push(tagName);

      const newConfig = {
         ...currentConfig,
         tagsForDelete: tagsForDelete
      };

      set({config: newConfig});
      saveState(newConfig);
   },
   deleteTagsForDelete: (index: number) => {
      const currentConfig = get().config;
      let tagsForDelete = currentConfig.tagsForDelete;

      tagsForDelete = tagsForDelete?.filter((_, i) => i != index);

      const newConfig = {
         ...currentConfig,
         tagsForDelete: tagsForDelete
      };

      set({config: newConfig});
      saveState(newConfig);
   },
   updateTagsForDelete: (tagName: string, index: number) => {
      const currentConfig = get().config;
      let tagsForDelete = currentConfig.tagsForDelete;

      tagsForDelete = tagsForDelete?.map((attr, i) => {
         if (i === index) {
            attr = tagName;
         }
         return attr;
      });

      const newConfig = {
         ...currentConfig,
         tagsForDelete: tagsForDelete
      };

      set({config: newConfig});
      saveState(newConfig);
   },
   addNewAttrsSelector: (selector: string) => {
      const currentConfig = get().config;
      const newAttrs = currentConfig.newAttrs;

      if (newAttrs) {
         newAttrs[selector] = {};
      }

      const newConfig = {
         ...currentConfig,
         newAttrs: newAttrs
      };

      set({config: newConfig});
      saveState(newConfig);
   },
   deleteNewAttrsSelector: (selector: string) => {
      const currentConfig = get().config;
      const newAttrs = currentConfig.newAttrs;

      if (newAttrs) {
         delete newAttrs[selector];
      }

      const newConfig = {
         ...currentConfig,
         newAttrs: newAttrs
      };

      set({config: newConfig});
      saveState(newConfig);
   },
   updateNewAttrsSelector: (selector: string, oldSelector: string) => {
      const currentConfig = get().config;
      const newAttrs = currentConfig.newAttrs;

      if (newAttrs) {
         newAttrs[selector] = newAttrs[oldSelector];
         delete newAttrs[oldSelector];
      }

      const newConfig = {
         ...currentConfig,
         newAttrs: newAttrs
      };

      set({config: newConfig});
      saveState(newConfig);
   },
   addNewAttrsSelectorAttr: (selector: string, attrName: string, value: string) => {
      const currentConfig = get().config;
      const newAttrs = currentConfig.newAttrs;

      if (newAttrs) {
         newAttrs[selector] = {
            ...newAttrs[selector],
            [attrName]: value
         };
      }

      const newConfig = {
         ...currentConfig,
         newAttrs: newAttrs
      };

      set({config: newConfig});
      saveState(newConfig);
   },
   deleteNewAttrsSelectorAttr: (selector: string, attrName: string) => {
      const currentConfig = get().config;
      const newAttrs = currentConfig.newAttrs;

      if (newAttrs) {
         const selectorAttrs = newAttrs[selector];

         delete (selectorAttrs as Record<string, string>)[attrName];
   
         newAttrs[selector] = selectorAttrs;
      }

      const newConfig = {
         ...currentConfig,
         newAttrs: newAttrs
      };

      set({config: newConfig});
      saveState(newConfig);
   },
}));
