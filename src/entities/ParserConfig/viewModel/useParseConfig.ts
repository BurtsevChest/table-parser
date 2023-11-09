import { useState } from "react";
import { getParseConfig } from "../model/selectors/getParseConfig";
import { parseConfigActions } from "../model/slice/parserConfigSlice";
import { useSelector, useDispatch } from "react-redux";
import { IParserConfigOptions } from "../../../shared/parseHtml";

export interface IUseParseConfig {
   /**
    * Состояние, возвращаемое из useState
    */
   config: IParserConfigOptions;

   /**
    * set-функця для изменения config
    * @param cfg - новый конфиг 
    * @returns Изменяет состояние(но не изменяет данные в модели), нужна только для того чтобы обновить локальное состояние
    */
   setConfig: (cfg: IParserConfigOptions) => void;

   /**
    * Обновляет данные в модели на основе нового значение в config
    * @returns 
    */
   updateGlobalConfig: () => void;
}

export const useParseConfig = () => {
   // TODO: хочу чтобы хук возвращал конфиг как состояние для вьюшки и так же функцию для глобального измнения данных в модели
   const [config, setConfig] = useState<IParserConfigOptions>(useSelector(getParseConfig));
   const dispatch = useDispatch();

   const updateGlobalConfig = () => {
      dispatch(parseConfigActions.setNewConfig(config));
   }

   return {
      config,
      setConfig,
      updateGlobalConfig
   } as IUseParseConfig;
}
