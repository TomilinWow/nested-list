import React, { ChangeEvent, useCallback, useState } from 'react';
import { AddButton, RemoveButton, StyledInput, StyledListItem } from "./ListItem.style";
import styles from './ListItem.module.scss';
import { IListItem } from "../../types";

interface IList {
  list: IListItem;
  onAddChild: (parentId: number, title: string) => void;
  onRemoveChild: (listId: number) => void;
}

export const ListItem: React.FC<IList> = React.memo(({ list, onAddChild, onRemoveChild }) => {
  const [title, setTitle] = useState('');

  const handleAddChild = useCallback(() => {
    if (title.trim()) {
      onAddChild(list.id, title);
      setTitle('');
    }
  }, [list.id, onAddChild, title])

  const onHandleRemoveChild =  useCallback((listId: number) => () => {
    onRemoveChild(listId)
  }, [onRemoveChild]);

  const onSetTitle =  useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }, []);

  return (
    <StyledListItem>
      <div className={styles.FlexBlock}>
        {list.title}
        {list.id !== 1 && (
          <RemoveButton onClick={onHandleRemoveChild(list.id)}>Удалить</RemoveButton>
        )}
      </div>

      <div className={styles.FlexBlock}>
        <StyledInput
          type="text"
          value={title}
          onChange={onSetTitle}
          placeholder="Введите название..."
        />
        <AddButton onClick={handleAddChild}>Добавить</AddButton>
      </div>

      {!!list.children.length && (
        <div className={styles.ListItems}>
          {list.children.map((child) => (
            <ListItem key={child.id} list={child} onAddChild={onAddChild} onRemoveChild={onRemoveChild} />
          ))}
        </div>
      )}
    </StyledListItem>
  );
})
