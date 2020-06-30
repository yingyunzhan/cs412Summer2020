import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  // baseURL: string = "https://newsapi.org/v2/top-headlines?"
  constructor(private http: HttpClient) { }
  //
  // getNews(language: string, category: string, country: string) {
  //   return this.http.get(this.baseURL + 'category=' + category + '&country=' + country + '&apiKey=ad2ba230d39c4cedb0195548c7d3d5ab');
  // }

  getNewsByFormGroup(form: FormGroup) {
    // let category = form.value.categoryControl;
    let country = form.value.countryControl;
    return this.http.get('http://localhost:3000/ps4?country=' + country);
  }
}
