import {Component, EventEmitter, Injectable, Input, Output} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ANEWS } from '../structure/news';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class ResultComponent {

  @Input() returned: JSON;
  // baseURL: string = "https://newsapi.org/v2/top-headlines?"
  //
  // constructor(private http: HttpClient) { }
  //
  // xxxxxx: ANEWS;
  //
  // // getNews(form: FormGroup) {
  // //   let category = form.value.categoryControl;
  // //   let country = form.value.countryControl;
  // //   return this.http.get(this.baseURL + 'category=' + category + '&country=' + country + '&apiKey=ad2ba230d39c4cedb0195548c7d3d5ab');
  // // }
  //
  // getNewsByFormGroup(form: FormGroup) {
  //   let category = form.value.categoryControl;
  //   let country = form.value.countryControl;
  //   return this.http.get(this.baseURL + 'category=' + category + '&country=' + country + '&apiKey=ad2ba230d39c4cedb0195548c7d3d5ab');
  // }

  ngOnInit(): void {
  }
}
