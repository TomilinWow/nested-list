export interface IListItem {
  id: number;
  title: string;
  children: IListItem[];
}
