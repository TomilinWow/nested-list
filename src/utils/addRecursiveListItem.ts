import { IListItem } from "../types";

/**
 * Функция для рекурсивного добавления элемента в вложенный список
 */
export const addRecursiveListItem = (item: IListItem, list: IListItem, parentId: number): IListItem => {
  if (list.id === parentId) {
    return {
      ...list,
      children: [...list.children, { ...item, children: [] }],
    };
  }
  return {
    ...list,
    children: list.children.map((children) => addRecursiveListItem(item, children, parentId)),
  };
};
