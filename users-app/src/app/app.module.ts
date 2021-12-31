import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DirectiveDemoComponent } from './components/directive-demo/directive-demo.component';
import { LifeCycleDemoComponent } from './components/life-cycle-demo/life-cycle-demo.component';
import { LoginComponent } from './components/login/login.component';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';
import { RegisterComponent } from './components/register/register.component';
import { UserImageComponent } from './components/users/user-image/user-image.component';
import { UserInfoComponent } from './components/users/user-info/user-info.component';
import { UsersComponent } from './components/users/users.component';
import { CountryCodePipe } from './pipes/country-code.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { ObservableDemoComponent } from './components/observable-demo/observable-demo.component';
import { RequestInterceptorService } from './services/request-interceptor.service';
import { ResponseInterceptorService } from './services/response-interceptor.service';


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
    RegisterComponent,
    ObservableDemoComponent
  ],
  imports: [          // Module - built-in / Custom module
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ {
    provide : HTTP_INTERCEPTORS,
    useClass : RequestInterceptorService,
    multi : true
  },{
    provide : HTTP_INTERCEPTORS,
    useClass : ResponseInterceptorService,
    multi : true
  } ],      // Register the services
  bootstrap: [AppComponent]   // Loads component on index.html
})
export class AppModule { }
