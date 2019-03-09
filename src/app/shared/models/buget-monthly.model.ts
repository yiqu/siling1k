export interface IBudgetMonthly {
  personal: IBudgetPersonal;
  house: IBudgetHouse;
  tith: IBudgetTith;
  income: IBudgetIncome;
  summary: IBudgetSaving;
}

export interface IBudgetPersonal {
  food: ISpent[];
  transport: ISpent[];
  cat: ISpent[];
  other: ISpent[];
  melaleuca: ISpent[];
  massage: ISpent[];
  cellphone: ISpent[];
  carPayment: ISpent[];
}

export interface IBudgetHouse {
  bge: ISpent[];
  water: ISpent[];
  internet: ISpent[];
  frontFoot: ISpent[];
  hoa: ISpent[];
  homeImprovment: ISpent[];
  mortgage: ISpent[];
}

export interface IBudgetTith {
  tith: ISpent[];
}

export interface IBudgetIncome {
  income: ISpent[]
}

export interface IBudgetSaving {
  saving: number | string;
}
/**
 * Basic budget object.
 * Name and amount spent
 */
export interface ISpent {
  name: string;
  spent: string | number;
}


