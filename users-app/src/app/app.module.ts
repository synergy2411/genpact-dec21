import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserImageComponent } from './components/users/user-image/user-image.component';
import { UserInfoComponent } from './components/users/user-info/user-info.component';
import { LifeCycleDemoComponent } from './components/life-cycle-demo/life-cycle-demo.component';
import { DirectiveDemoComponent } from './components/directive-demo/directive-demo.component';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';
import { CountryCodePipe } from './pipes/country-code.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [     // Components, Directives, Pipes
    AppComponent,
    UsersComponent,
    UserImageComponent,
    UserInfoComponent,
    LifeCycleDemoComponent,
    DirectiveDemoComponent,
    PipeDemoComponent,
    CountryCodePipe,
    ReversePipe,
    LoginComponent,
    RegisterComponent
  ],
  imports: [          // Module - built-in / Custom module
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],      // Register the services
  bootstrap: [AppComponent]   // Loads component on index.html
})
export class AppModule { }
