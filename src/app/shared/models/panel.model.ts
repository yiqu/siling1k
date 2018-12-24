import { ItemDetail } from "./data.model";

export class PanelItem {
  constructor(public title: string, public displayUrl: string, public dataArray: ItemDetail[],
    public color?: string) {
  }

  getDisplayUrl() {
    return this.displayUrl;
  }

  getTitle() {
    return this.title;
  }

  getDataArray() {
    return this.dataArray;
  }

  getColor() {
    return this.color;
  }
}