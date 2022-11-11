import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appMouvement]'
})
export class MouvementDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'red';
  }

}
