import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

    //Generates instances of class Quote
    quotes:Quote[] = [
      new Quote(1,'Let us go invent tomorrow instead of worrying about what happened yesterday.Let us go invent tomorrow instead of worrying about what happened yesterday.','Steve Jobs','Emma','Inspire',new Date(2020,5,23),23,4),
      new Quote(1,'Never let a computer know you are in a hurry.','Author Unknown','Kamau','Humor',new Date(2021,4,21),6,7),
      new Quote(1,'Let us go invent tomorrow instead of worrying about what happened yesterday.','Steve Jobs','Emma','Inspire',new Date(2020,5,23),21,4),
      new Quote(1,'Never let a computer know you are in a hurry.','Author Unknown','Kamau','Humor',new Date(2021,4,21),6,7),
      new Quote(1,'Let us go invent tomorrow instead of worrying about what happened yesterday.','Steve Jobs','Emma','Inspire',new Date(2020,5,23),90,4),
      new Quote(1,'Never let a computer know you are in a hurry.','Author Unknown','Kamau','Humor',new Date(2021,4,21),6,7),
    ]

    //Toggle effect to show delete btn and uploaded by
    toggleDetails(index){
      this.quotes[index].showDescription = !this.quotes[index].showDescription;
    }

    //Add a new quote
    addNewQuote(quote){
      let quoteLen = this.quotes.length;
      quote.id = quoteLen+1;
      quote.entryDate = new Date()
      this.quotes.push(quote)
    }

    //Deletes the quote
    deleteQuote(isComplete, index){
      if (isComplete) {
        let toDelete = confirm(`Are you sure you want to delete the quote?`)
  
        if (toDelete){
          this.quotes.splice(index,1)
        }
      }
    }

    //Onclick add one to up votes
    upVoteQuote(index){
      let upVoteQuote=this.quotes[index].upVote+1
      this.quotes[index].upVote = upVoteQuote
    }

    //Onclick add one to down votes
    downVoteQuote(index){
      let downVoteQuote=this.quotes[index].downVote+1
      this.quotes[index].downVote = downVoteQuote
    }

    //Get Quote with the highest upvotes in the Quote array
    arr:number[] = this.quotes.map(quote => quote.upVote)
    highest = Math.max(...this.arr)

  constructor() { }
  ngOnInit(): void {
  }

}
