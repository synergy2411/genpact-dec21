import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { USER_DATA } from "../model/mock";
import { Observable } from "rxjs";
import { IUser } from "../model/user.model";

@Injectable({
  providedIn : 'root'
})
export class DataService {

  constructor(private httpClient : HttpClient){}

  // getData(){
  //   return USER_DATA;
  // }

  getApiData(): Observable<Array<IUser>>{
    return this.httpClient.get<Array<IUser>>("assets/data/users.json")
  }

  createPost(){
    this.httpClient.post("https://jsonplaceholder.typicode.com/todos", {
      title : "...",
      completed : false
    }).subscribe(response => console.log(response))
  }

}
