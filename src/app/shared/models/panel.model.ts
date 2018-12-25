import { ItemDetail } from "./data.model";

export class PanelItem {
  constructor(public title: string, public displayUrl: string, public dataArray: ItemDetail[],
    public hidden: boolean = false, public color: string = "black") {
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

  getHidden() {
    return this.hidden;
  }
}