import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { USER_DATA } from "../model/mock";

@Injectable({
  providedIn : 'root'
})
export class DataService {

  constructor(private httpClient : HttpClient){}

  getData(){
    return USER_DATA;
  }

  getApiData(){
    this.httpClient.get("https://jsonplaceholder.typicode.com/todos")
      .subscribe(response => {
        console.log(response)
      })
  }

}
