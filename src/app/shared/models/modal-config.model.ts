export class SilingModalConfig {
  constructor(public title: string = "Warning", public confirmText: string = "Confirm", 
    public body: string = "Proceed?", public action: ModalAction = ModalAction.NONE ) {

  }
}

export enum ModalAction {
  UPDATE_ACTION = "UPDATE",
  DELETE_ACTION = "DELETE",
  NONE = "NONE"
}