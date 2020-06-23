import { Component, OnInit } from '@angular/core';
import { NEWS } from './data/newsMOCK';
import { ANEWS } from './data/news';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '23 June TOP NEWS (Mock Data)';
  news: ANEWS[] = NEWS;
  selectedNews: ANEWS;
  constructor() { }
  ngOnInit(): void {
  }
  showINFO(title: string) {
    this.selectedNews = this.news.find(name => name.title === title);
  }
}
