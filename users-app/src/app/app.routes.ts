import { Routes } from '@angular/router';
import { DirectiveDemoComponent } from './components/directive-demo/directive-demo.component';
import { LifeCycleDemoComponent } from './components/life-cycle-demo/life-cycle-demo.component';
import { LoginComponent } from './components/login/login.component';
import { ObservableDemoComponent } from './components/observable-demo/observable-demo.component';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';
import { OverviewComponent } from './components/product/overview/overview.component';
import { ProductComponent } from './components/product/product.component';
import { SpecificationComponent } from './components/product/specification/specification.component';
import { RegisterComponent } from './components/register/register.component';
import { UsersComponent } from './components/users/users.component';
import { RouteGaurdService } from './services/route-gaurd.service';

export const APP_ROUTES: Routes = [
  {
    path: 'login', // http://localhost:4200/login
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate : [RouteGaurdService]
  },
  {
    path: 'pipe-demo',
    component: PipeDemoComponent,
  },
  {
    path: 'observable-demo',
    component: ObservableDemoComponent,
  },
  {
    path: 'directive-demo',
    component: DirectiveDemoComponent,
  },
  {
    path: 'life-cycle',
    component: LifeCycleDemoComponent,
  },
  {
    path: 'product', // http://localhost:4200/product
    component: ProductComponent,
    children: [
      { path: 'overview/:id/:prodName', component: OverviewComponent }, // http://localhost:4200/product/overview
      { path: 'spec', component: SpecificationComponent }, // http://localhost:4200/product/spec
    ],
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];
