import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { SilingModalConfig, ModalAction } from '../models/modal-config.model';

@Component({
  selector: 'siling-modal',
  templateUrl: 'siling-modal.component.html',
  styleUrls: ['./siling-modal.component.css']
})

export class SilingModalComponent implements OnInit {

  @Input()
  modalConfig: SilingModalConfig;

  @Output()
  onModalConfirm: EventEmitter<ModalAction> = new EventEmitter<ModalAction>();

  constructor() {}

  ngOnInit() {
    if (!this.modalConfig.confirmText) {
      this.modalConfig.confirmText = "Confirm";
    }
    if (!this.modalConfig.title) {
      this.modalConfig.title = "Warning";
    }
    if (!this.modalConfig.body) {
      this.modalConfig.body = "Are you sure you want to proceed?";
    }
  }

  confirm() {
    this.onModalConfirm.emit(this.modalConfig.action);
  }
}