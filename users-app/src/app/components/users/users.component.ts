import { Component } from '@angular/core';

@Component({
  selector : "app-users",
  templateUrl : `./users.component.html`,
  styleUrls : [`./users.component.css`]
})
export class UsersComponent{
  user = {
    firstName : "bill",
    lastName : "gates",
    dob : new Date("Jan 1, 1965"),
    income : 50000,
    isWorking : true,
    company : "Microsoft"
  }
}
