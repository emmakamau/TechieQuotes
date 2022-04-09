import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'
import { QuoteFormComponent } from '../quote-form/quote-form.component';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

    //Generates instances of class Quote
    quotes:Quote[] = [
      new Quote(4,'The problem with troubleshooting is that trouble shoots back.','Author Unknown','Jane Doe','Humor Me',new Date(2020,5,23),143,4),
      new Quote(1,'Technology is nothing. What is important is that you have a faith in people, that they are basically good and smart,and if you give them tools, they will do wonderful things with them.','Steve Jobs','Emma','Inspire & motivate',new Date(2020,5,23),50,8),
      new Quote(2,'Man is a slow, sloppy and brilliant thinker; the machine is fast, accurate and stupid.','William M. Kelly','Kamau','Humor Me',new Date(2021,4,21),101,27),
      new Quote(3,'The technology you use impresses no one. The experience you create with it is everything.','Sean Gerety','Nancy','Inspire & motivate',new Date(2020,5,23),69,11),
      new Quote(6,'First we thought the PC was a calculator. Then we found out how to turn numbers into letters with ASCII — and we thought it was a typewriter. Then we discovered graphics, and we thought it was a television. With the World Wide Web, we have realized it iss a brochure.','Douglas Adams','Nathan','Humor Me',new Date(2021,4,21),6,7),
      new Quote(5,'Modern technology has become a total phenomenon for civilization, the defining force of a new social order in which efficiency is no longer an option but a necessity imposed on all human activity.','Jacques Ellul','John Doe','Inspire & motivate',new Date(2022,4,21),26,3),
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
