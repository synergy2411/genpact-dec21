import { Component, Input, OnInit } from '@angular/core';
import { USER_DATA } from 'src/app/model/mock';

@Component({
  selector : "app-users",
  templateUrl : `./users.component.html`,
  styleUrls : [`./users.component.css`]
})
export class UsersComponent implements OnInit{
  @Input() title : string;

  user: any;

  ngOnInit(): void {
    this.user = USER_DATA;
  }

  onMoreInfo(usr : any){
    alert(`This is ${usr.lastName}, ${usr.firstName}`)
  }

}
