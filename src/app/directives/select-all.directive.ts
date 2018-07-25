import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSelectAll]'
})
export class SelectAllDirective {
  isFocused = false;
  constructor(private el: ElementRef) {}

  @HostListener('focus')
  onMouseEnter() {
    if (!this.isFocused) {
      this.el.nativeElement.select();
      this.isFocused = true;
    }
  }

  @HostListener('blur')
  onMouseLeave() {
    this.isFocused = false;
  }
}
