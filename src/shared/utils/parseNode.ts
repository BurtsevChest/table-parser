import tableParse from "../lib/nodesFunc/tableParse";
import tdParse from "../lib/nodesFunc/tdParse";
import anchorParse from "../lib/nodesFunc/anchorParse";

export type TParseNodeItem = Record<string, (node: unknown) => void>;

/**
 * Список кастомных функций для определенных тегов.
 * Функции принимают node: Element и выполняются тогда, когда верстка очищена от лишнего дерьма
 */
export const parseNodeByTagName = {
   'table': tableParse,
   'td': tdParse,
   'a': anchorParse,
} as TParseNodeItem;
