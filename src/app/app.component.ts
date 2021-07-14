import { Component } from '@angular/core';
import {ApiReddit} from './apiReddit.service';
import{Reddit} from "./reddit";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiReddit]
})
export class AppComponent {
  title = 'RedditAPI';
  reddit: Reddit | null = null;
  constructor(private api: ApiReddit){}

  callReddit(){
  let response = this.api.getResults();

  response.subscribe(
    (data: Reddit) => this.reddit = {title:data.title , thumbnail:data.thumbnail}
  );
  }
}
