import {Directive, ElementRef, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appMouvement]'
})
export class MouvementDirective {

 @HostBinding('style.backgroundColor') background = 'pink';
  @Input('appMouvement') couleur!: string;
  constructor(private el: ElementRef) {
    //el.nativeElement.style.backgroundColor = 'red';

  }
 @HostListener('mouseenter') onMouseEnter() {
    this.changerCouleur(this.couleur);
  }
 @HostListener('mouseleave') onMouseLeave() {
    this.changerCouleur('white');
  }
  changerCouleur(couleur: string) {
    //this.el.nativeElement.style.backgroundColor = couleur;
    this.background = couleur;
  }


}
