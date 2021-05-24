import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  title = 'Quotes App';
  quotes: Quote [] = [
    new Quote (1,'Ashley','Human spirit','The human spirit must prevail over technology to allow humans be in charge.','Albert Einstein', new Date(2019,7,12),0,0),
    new Quote (2,'Tony', 'Inspirational','Live as if you were to die tomorrow. Learn as if you were to live forever.','Mahatma Gandhi', new Date(2019,7,12),0,0),
    new Quote (3,'Mike','Inspirational','That which does not kill us makes us stronger.','Friedrich Nietzsche', new Date(2019,7,12),0,0),
    new Quote (4,'Brian','Inspirational','Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind.','Bernard M. Baruch', new Date(2019,7,12),0,0),
    new Quote (5,'Jacob','Inspirational','We must not allow other people’s limited perceptions to define us.','Virginia Satir', new Date(2019,7,12),0,0),
    new Quote (6,'Samuel','Inspirational','Do what you can, with what you have, where you are.','Theodore Roosevelt', new Date(2019,7,12),0,0),
    new Quote (7,'Mellisa','Inspirational','This above all: to thine own self be true.','William Shakespeare', new Date(2019,7,12),0,0),
  ] 


  constructor() { }

  ngOnInit(): void {
  }

}
