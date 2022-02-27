import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path : '',redirectTo :'feed',pathMatch:"full"
  },
  {
    path : 'feed',component : FeedComponent
  },
  {
    path : 'profile', component: ProfileComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }