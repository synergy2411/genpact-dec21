import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/model/user.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector : "app-users",
  templateUrl : `./users.component.html`,
  styleUrls : [`./users.component.css`]
})
export class UsersComponent implements OnInit{
  @Input() title : string;

  users: Array<IUser>;

  constructor(private dataService : DataService){}

  ngOnInit(): void {
    // this.users = this.dataService.getData()
    this.dataService.getApiData()
    // .subscribe(result => this.users = result)
      .subscribe({
        next : (result : Array<IUser>) => this.users = result,
        error : err => console.error(err),
        complete : () => console.log("[Completed]")
      })
  }

  onMoreInfo(usr : IUser){
    alert(`This is ${usr.lastName}, ${usr.firstName}`)
  }

}
