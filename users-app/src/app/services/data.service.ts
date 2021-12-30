import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { USER_DATA } from "../model/mock";

@Injectable({
  providedIn : 'root'
})
export class DataService {

  constructor(private httpClient : HttpClient){}

  // getData(){
  //   return USER_DATA;
  // }

  getApiData(){
    return this.httpClient.get("assets/data/users.json")
  }

  createPost(){
    this.httpClient.post("https://jsonplaceholder.typicode.com/todos", {
      title : "...",
      completed : false
    }).subscribe(response => console.log(response))
  }

}
