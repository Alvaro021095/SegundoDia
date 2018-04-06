import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyHightLight]'
})
export class MyHightLightDirective {

  constructor(private elementRef: ElementRef) {
      elementRef.nativeElement.style.backgroundColor = 'yellow';
  }

}
