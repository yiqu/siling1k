export interface DataResponse {
  total_count: number;
  items: Item;
}

export interface Item {
  gd: ItemDetail[];
  prax: ItemDetail[];
  nom: ItemDetail[];
}

export interface ItemDetail {
  date: string;
  balance: number;
}