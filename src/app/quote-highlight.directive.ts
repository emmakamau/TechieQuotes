import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appQuoteHighlight]'
})
export class QuoteHighlightDirective {

  constructor(private elem:ElementRef) { 
    this.elem.nativeElement.style.color="#FF8C32";
  }
  
}
