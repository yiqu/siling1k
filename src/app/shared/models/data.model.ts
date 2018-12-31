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

export class AboutItem {
  //id: string;
  //description: string

  constructor(public id: string, public description: string, public title: string) {
  }

  getId() {
    return this.id;
  }

  getDescription() {
    return this.description;
  }

  getTitle() {
    return this.title;
  }
}