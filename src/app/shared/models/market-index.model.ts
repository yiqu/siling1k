export class MarketIndex {
  constructor(public name: MarketIndexValue = new MarketIndexValue(), 
    public id: MarketIndexValue = new MarketIndexValue(), 
    public description: MarketIndexValue = new MarketIndexValue("Description here.."),
    public facts?: MarketIndexValue[]) {

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
  constructor(public text: MarketIndexValue = new MarketIndexValue(), 
    public author: MarketIndexValue = new MarketIndexValue()) {
  }
}

export class MarketIndexValue {
  constructor(public value: any = null, public required: boolean = false, public label: string = "Label",
    defaultValue: string = "default") {
    
  }
}