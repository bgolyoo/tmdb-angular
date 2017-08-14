import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';
import { Utils } from '../../classes/utils';
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @Input() search: string;
  @Input() text: string;
  @Input() classToApply: string;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    if (typeof this.classToApply === 'undefined') {
      this.classToApply = '';
    }

    if (typeof this.search === 'undefined') {
      this.renderer.setProperty(this.el.nativeElement, 'innerHTML', this.text);
      return;
    }

    const search = Utils.escapeStringRegexp(this.search.toString());
    this.renderer.setProperty(this.el.nativeElement, 'innerHTML', this.replace(this.text, search));
  }

  private replace(txt: string, search: string) {
    const searchRgx = new RegExp('(' + search + ')', 'gi');

    return txt.replace(searchRgx, `<span class="${this.classToApply}">$1</span>`);
  }
}
