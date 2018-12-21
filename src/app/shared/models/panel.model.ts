import { ItemDetail } from "./data.model";

export class PanelItem {
  constructor(public title: string, public displayUrl: string, public dataArray: ItemDetail[]) {
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
}