import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';

@NgModule({
  declarations: [     // Components, Directives, Pipes
    AppComponent,
    UsersComponent
  ],
  imports: [          // Module - built-in / Custom module
    BrowserModule
  ],
  providers: [],      // Register the services
  bootstrap: [AppComponent]   // Loads component on index.html
})
export class AppModule { }
