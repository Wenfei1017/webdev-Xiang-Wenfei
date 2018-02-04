import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './view/user/views/user/login/login.component';
import {RegisterComponent} from './view/user/views/user/register/register.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: LoginComponent},
  {path: 'rigister', component: RegisterComponent},

];

export const routing = RouterModule.forRoot(appRoutes);
