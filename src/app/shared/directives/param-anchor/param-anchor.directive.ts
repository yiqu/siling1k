import { Directive, ElementRef, OnInit, HostListener,
  Input, Renderer2, Host } from "@angular/core";
import { Router, ActivatedRoute, UrlSegment } from "@angular/router";

  /**
   * The Webpage Anchor directive
   * 
   * usage: <p paramAnchor="anchor1">
   */
@Directive({
  selector: "[paramAnchor]",
})
export class ParamAnchorDirective implements OnInit {
  @Input() 
  paramAnchor: string;

  @HostListener('click') 
  onMouseClick() {
    console.log(this.paramAnchor);
    this.setAnchor(this.paramAnchor);
  }

  @HostListener('mouseover')
  onMouseEnter() {
    this.displayAnchorText(this.paramAnchor);
  }

  @HostListener('mouseout') 
  onMouseOut() {
    this.resetAnchorText();
  }

  constructor(public el: ElementRef, public renderer: Renderer2, public router: Router,
    private route: ActivatedRoute ) {
  }
 
  ngOnInit() {
  }

  displayAnchorText(anchor: string) {
    this.renderer.setProperty(this.el.nativeElement, 'innerHTML', (anchor + '#'));
  }

  resetAnchorText() {
    this.renderer.setProperty(this.el.nativeElement, 'innerHTML', (this.paramAnchor));
  }

  setAnchor(anchor: string) {
    let urlSegment: UrlSegment[] = this.route.snapshot.url;
    let currentPath: string = urlSegment[0].path;
    this.router.navigate([ currentPath ], { fragment: this.paramAnchor });
  }


}