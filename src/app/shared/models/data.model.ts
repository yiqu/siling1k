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

  constructor(public id: string = "untitled", 
    public description: string = "None", 
    public title: string = "Untitled",
    public facts: AboutItemFact[]) {
  }

  public getId() {
    return this.id;
  }

  getDescription() {
    return this.description;
  }

  getTitle() {
    return this.title;
  }

  getFacts() {
    return this.facts;
  }
}

export class AboutItemFact {
  constructor(public text: string, public author: string) {
  }
}