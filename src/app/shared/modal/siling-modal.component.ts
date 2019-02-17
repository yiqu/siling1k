import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'siling-modal',
  templateUrl: 'siling-modal.component.html',
  styleUrls: ['./siling-modal.component.css']
})

export class SilingModalComponent implements OnInit {

  @Input()
  modalTitle: string;

  @Input()
  confirmText: string;

  @Input()
  modalBodyText: string;

  @Output()
  onModalConfirm: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {
    if (!this.confirmText) {
      this.confirmText = "Confirm";
    }
    if (!this.modalTitle) {
      this.modalTitle = "Warning";
    }
    if (!this.modalBodyText) {
      this.modalBodyText = "Are you sure you want to proceed?";
    }
  }

  confirm() {
    this.onModalConfirm.emit(true);
  }
}