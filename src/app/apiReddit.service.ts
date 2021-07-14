import { Injectable } from "@angular/core";
import{HttpClient} from "@angular/common/http";
import { ThisReceiver } from "@angular/compiler";

@Injectable()
export class ApiReddit{
    apiUrl: string = "https://www.reddit.com/r/aww/.json"
    constructor(private http: HttpClient){}

    getResults(){
        return this.http.get(this.apiUrl);
    }
}