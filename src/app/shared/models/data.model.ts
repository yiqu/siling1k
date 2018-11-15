export interface DataResponse {
  total_count: number;
  items: Item;
}

export interface Item {
  gd: ItemDetail[];
  prax: ItemDetail[];
  nom: ItemDetail[];
}

export class ItemDetail {
  date: string;
  balance: number;
  age: number;
  profit: number;
  profitPercent: number;

  constructor(date, balance) {
    this.date = date;
    this.balance = balance;
    this.age = 0;
    this.profit = 0;
    this.profitPercent = 0
  }
}