import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/model/user.model';
import { UserImageComponent } from '../user-image/user-image.component';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {
  @Input() user : IUser;
  userImg : UserImageComponent = new UserImageComponent();
  ngOnInit(){

  }
}
