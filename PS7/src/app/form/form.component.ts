import { Component } from '@angular/core';
import { NewsServiceService as NewsService} from './news-service.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  title = "Today's News";
  category: string;
  country: string;

  constructor(private newsService: NewsService, private form: FormBuilder) {}

  allNews = {
    author: '',
    title: '',
    description: '',
    date:'',
    url: ''
  };

  returned: JSON[];

  newsFormGroup = this.form.group({
    // categoryControl: ['business', Validators.required],
    countryControl: ['us', Validators.required],
    subform: this.form.group({
      detail: ['']
    })
  })


  getNews() {
    this.newsService.getNewsByFormGroup(this.newsFormGroup).subscribe(
      response => {
        this.allNews = response['main'];// similar to current.temp
        this.allNews = {
          author: response['articles']['0']['author'],
          title: response['articles']['0']['title'],
          description: response['articles']['0']['description'],
          date: response['articles']['0']['publishedAt'],
          url: response['articles']['0']['url']
        }
      }
    );
  }
  //
  // showINFO(title: string) {
  //   this.selectedNews = this.news.find(name => name.title === title);
  // }
}
