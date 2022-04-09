import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newQuote = new Quote(0,"","","","",new Date(),0,0);
  @Output() addQuote = new EventEmitter<Quote>();

  submitQuote(quoteForm: NgForm){
    this.addQuote.emit(this.newQuote); 
      }

  clearQuoteForm(quoteForm: NgForm){
    quoteForm.reset()
  }

  constructor() { }
  ngOnInit(): void {
  }

}
