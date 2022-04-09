import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

    quotes:Quote[] = [
      new Quote(1,'Let us go invent tomorrow instead of worrying about what happened yesterday.Let us go invent tomorrow instead of worrying about what happened yesterday.','Steve Jobs','Emma','Inspire',new Date(2020,5,23),23,4),
      new Quote(1,'Never let a computer know you are in a hurry.','Author Unknown','Kamau','Humor',new Date(2021,4,21),6,7),
      new Quote(1,'Let us go invent tomorrow instead of worrying about what happened yesterday.','Steve Jobs','Emma','Inspire',new Date(2020,5,23),23,4),
      new Quote(1,'Never let a computer know you are in a hurry.','Author Unknown','Kamau','Humor',new Date(2021,4,21),6,7),
      new Quote(1,'Let us go invent tomorrow instead of worrying about what happened yesterday.','Steve Jobs','Emma','Inspire',new Date(2020,5,23),23,4),
      new Quote(1,'Never let a computer know you are in a hurry.','Author Unknown','Kamau','Humor',new Date(2021,4,21),6,7),
    ]

  constructor() { }

  ngOnInit(): void {
  }

}