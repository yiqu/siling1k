export class Editable {
  constructor(public title: string, public id: string) {
  }
}

export class SilingDailyData {
  constructor(public date: string, public balance: number) {
  }
}

export class EditableSilingDailyData {
  constructor(public entryId: string, public data: SilingDailyData) {
  }
}

export class SilingEditable {
  date: string;
  balance: number;
  silingType: string;

  constructor(date: string, balance: number, silingType: string) {
    this.date = date;
    this.balance = balance;
    this.silingType = silingType;
  }
}

export class SilingBankType {
  constructor(public title: string, public id: string) {
  }
}
