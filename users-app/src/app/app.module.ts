import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserImageComponent } from './components/users/user-image/user-image.component';
import { UserInfoComponent } from './components/users/user-info/user-info.component';

@NgModule({
  declarations: [     // Components, Directives, Pipes
    AppComponent,
    UsersComponent,
    UserImageComponent,
    UserInfoComponent
  ],
  imports: [          // Module - built-in / Custom module
    BrowserModule,
    FormsModule
  ],
  providers: [],      // Register the services
  bootstrap: [AppComponent]   // Loads component on index.html
})
export class AppModule { }
