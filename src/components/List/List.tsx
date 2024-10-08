import React, { useCallback, useState } from 'react';
import styles from './List.module.scss';
import { IListItem } from "../../types";
import { initialList } from "../../data";
import { addRecursiveListItem } from "../../utils/addRecursiveListItem";
import { removeRecursiveListItem } from "../../utils/removeRecursiveListItem";
import { ListItem } from "../ListItem";


export const List: React.FC = () => {
  const [list, setList] = useState<IListItem>(initialList);

  const handleAddChild = useCallback((parentId: number, title: string) => {
    const newItem = {
      id: Date.now(),
      title,
      children: [],
    };
    setList((prev) => addRecursiveListItem(newItem, prev, parentId))
  }, []);

  const handleRemoveChild = useCallback((listItemId: number) => {
    setList((prev) => removeRecursiveListItem(prev, listItemId) || prev);
  }, []);


  return (
    <div className={styles.List}>
      <h1>Вложенный список</h1>
      <ListItem list={list} onAddChild={handleAddChild} onRemoveChild={handleRemoveChild} />
    </div>
  );
};

