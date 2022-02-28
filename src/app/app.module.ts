import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { StoriesComponent } from './Components/stories/stories.component';
import { PostComponent } from './Components/post/post.component';
import { FeedComponent } from './Pages/feed/feed.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SuggestedFollowerComponent } from './Components/suggested-follower/suggested-follower.component';
import { ProfileComponent } from './Pages/profile/profile.component';
import { MyPostsComponent } from './Components/my-posts/my-posts.component';
import { HttpClientModule} from '@angular/common/http'
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { LoginComponent } from './Authentication/login/login.component';
import { RegisterComponent } from './Authentication/register/register.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StoriesComponent,
    PostComponent,
    FeedComponent,
    SuggestedFollowerComponent,
    ProfileComponent,
    MyPostsComponent,
    LoginComponent,
    RegisterComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    InfiniteScrollModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    BrowserAnimationsModule
  ],
  exports :[
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
