import { Directive, ElementRef, OnInit, HostListener,
  Input, Renderer2 } from "@angular/core";

  /**
   * The highlight attribute directive
   * 
   * usage: <p highlight="red">
   */
@Directive({
  selector: "[hightlight]",
})
export class HighlightDirective implements OnInit {
  @Input() 
  hightlight: string;

  @Input()
  innerHTMLOnly: boolean

  @HostListener('mouseover') 
  onMouseEnter() {
    this.setColor(this.hightlight);
  }

  @HostListener('mouseout') 
  onMouseOut() {
    this.setColor("");
  }

  constructor(public elementRef: ElementRef, public renderer: Renderer2) {
  }
 
  ngOnInit() {
  }

  setColor(color: string, innerHtmlOnly: boolean = false) {
    if (this.innerHTMLOnly) {
      this.renderer.setStyle(this.elementRef.nativeElement, "color", color);
    } else {
      this.renderer.setStyle(this.elementRef.nativeElement, "background-color", color);
    }
  }

}