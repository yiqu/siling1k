export class NavItem {
  display: string;
  url: string;
  disabled: boolean;

  constructor(display: string, url: string = "#", disabled: boolean = false) {
    this.display = display;
    this.url = url;
    this.disabled = disabled;
  }
}