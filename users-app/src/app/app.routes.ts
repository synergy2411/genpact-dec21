import { Routes } from '@angular/router';
import { DirectiveDemoComponent } from './components/directive-demo/directive-demo.component';
import { LifeCycleDemoComponent } from './components/life-cycle-demo/life-cycle-demo.component';
import { LoginComponent } from './components/login/login.component';
import { ObservableDemoComponent } from './components/observable-demo/observable-demo.component';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';
import { RegisterComponent } from './components/register/register.component';
import { UsersComponent } from './components/users/users.component';

export const APP_ROUTES : Routes = [
  {
    path : "login",           // http://localhost:4200/login
    component : LoginComponent
  },{
    path : "register",
    component : RegisterComponent
  },{
    path : "users",
    component : UsersComponent
  },{
    path : "pipe-demo",
    component : PipeDemoComponent
  },{
    path : "observable-demo",
    component : ObservableDemoComponent
  },{
    path : "directive-demo",
    component : DirectiveDemoComponent
  },{
    path : "life-cycle",
    component : LifeCycleDemoComponent
  },{
    path: "**",
    redirectTo : "login"
  }
]
