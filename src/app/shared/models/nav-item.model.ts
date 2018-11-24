export class NavItem {
  display: string;
  url: string;

  constructor(display: string, url: string = "#") {
    this.display = display;
    this.url = url;
  }
}