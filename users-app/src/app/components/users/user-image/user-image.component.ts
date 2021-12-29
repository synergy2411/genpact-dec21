import { Component, Input, EventEmitter, Output } from '@angular/core';
import { IUser } from 'src/app/model/user.model';

@Component({
  selector: 'app-user-image',
  templateUrl: './user-image.component.html',
  styleUrls: ['./user-image.component.css']
})
export class UserImageComponent {

  @Input() user : IUser;

  @Output() childEvent = new EventEmitter<IUser>()

  onBtnClick(){
    this.childEvent.emit(this.user)
  }

}
