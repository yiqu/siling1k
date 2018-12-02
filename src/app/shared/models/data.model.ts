export interface DataResponse {
  total_count: number;
  items: any;
}

export class ItemDetail {
  date: string;
  balance: number;
  age: string;
  ageInDays: number;
  profit: number;
  profitPercent: number;

  constructor(date, balance) {
    this.date = date;
    this.balance = balance;
    this.profit = 0;
    this.profitPercent = 0
  }
}