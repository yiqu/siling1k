export class MarketIndex {
  constructor(public name: string = "Untitled", 
    public id: string = "none", 
    public description: string = "N/A",
    public facts?: MarketIndeFact[]) {

  } 

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getDescription() {
    return this.description;
  }

  getFacts() {
    return this.facts;
  }
}

export class MarketIndeFact {
  constructor(public text: string, public author: string) {
  }
}