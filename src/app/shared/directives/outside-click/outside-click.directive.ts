import { Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appOutsideClick]'
})
export class OutsideClickDirective {

  constructor(private elementRef: ElementRef) { }

  @Output() clickOutside: EventEmitter<any> = new EventEmitter();

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement) {
    if (!this.elementRef.nativeElement.contains(targetElement)) {
      this.clickOutside.emit();
    }
  }
}
