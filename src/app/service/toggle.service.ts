import { Injectable } from '@angular/core';
import { ToggleAction } from '../shared/models/toggle-action.model';

@Injectable()
export class ToggleService {

  currentToggledPanel: ToggleAction = null;

  constructor() {
  }
  
}