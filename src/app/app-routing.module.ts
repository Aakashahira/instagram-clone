import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './Pages/feed/feed.component';
import { LoginComponent } from './Authentication/login/login.component';
import { ProfileComponent } from './Pages/profile/profile.component';
import { RegisterComponent } from './Authentication/register/register.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path : '',redirectTo :'feed',pathMatch:"full"
  },
  {
    path : 'feed',component : FeedComponent,canActivate :[AuthGuard]
  },
  {
    path : 'profile', component: ProfileComponent,canActivate :[AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./Authentication/auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
