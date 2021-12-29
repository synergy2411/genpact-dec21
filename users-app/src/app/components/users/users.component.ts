import { Component, Input, OnInit } from '@angular/core';
import { USER_DATA } from 'src/app/model/mock';
import { IUser } from 'src/app/model/user.model';

@Component({
  selector : "app-users",
  templateUrl : `./users.component.html`,
  styleUrls : [`./users.component.css`]
})
export class UsersComponent implements OnInit{
  @Input() title : string;

  users: Array<IUser>;

  ngOnInit(): void {
    this.users = USER_DATA;
  }

  onMoreInfo(usr : IUser){
    alert(`This is ${usr.lastName}, ${usr.firstName}`)
  }

}
