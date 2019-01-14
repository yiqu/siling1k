export class MarketIndex {
  constructor(public title: MarketIndexValue = new MarketIndexValue(), 
    public id: MarketIndexValue = new MarketIndexValue(), 
    public description: MarketIndexValue = new MarketIndexValue("Description here.."),
    public facts?: MarketIndexValue[]) {

  } 

  getId() {
    return this.id;
  }

  getName() {
    return this.title;
  }

  getDescription() {
    return this.description;
  }

  getFacts() {
    return this.facts;
  }
}

export class MarketIndexValue {
  constructor(public value: any = null, public required: boolean = false, public label: string = "Label",
    defaultValue: string = "default") {
    
  }
}