import { IListItem } from "../types";


/**
 * Функция для рекурсивного удаления элемента из вложенного списка
 */
export const removeRecursiveListItem = (item: IListItem, listItemId: number): IListItem | null => {
  if (item.id === listItemId) {
    return null;
  }

  // Создание нового массива детей без null значений
  const filteredChildren = item.children.reduce<IListItem[]>((acc, child) => {
    const updatedChild = removeRecursiveListItem(child, listItemId);
    if (updatedChild !== null) {
      acc.push(updatedChild);
    }
    return acc;
  }, []);

  return {
    ...item,
    children: filteredChildren,
  };
};
