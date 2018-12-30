import { Injectable,  } from '@angular/core';
import { Title } from '@angular/platform-browser';

const APP_TITLE: string = "SiLing1k";
const APP_TITLE_SEP: string = " | ";
const SPACE: string = " ";

@Injectable()
export class TitleService {

  constructor(private titleService: Title) {
  }

  /**
   * Foo | SiLing1k
   */
  getSepPlusTitle(): string {
    return SPACE + APP_TITLE_SEP + APP_TITLE;
  }

  setPageTitle(title: string) {
    this.titleService.setTitle(title + this.getSepPlusTitle());
  }
}