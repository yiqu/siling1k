export class ToggleAction {
  private actionId: string;
  private itemId: string;

  constructor(actionId: string, itemId: string) {
    this.actionId = actionId;
    this.itemId = itemId;
  }

  public setActionId(actionId: string) {
    this.actionId = actionId;
  }

  public setItemId(itemId: string) {
    this.itemId = itemId;
  }

  public getActionId() {
    return this.actionId;
  }
  
  public getItemId() {
    return this.itemId;
  }

  toString() {
    return "Item " + this.itemId + " has changed to " + this.actionId;
  }
}