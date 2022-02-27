import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StoriesComponent } from './stories/stories.component';
import { PostComponent } from './post/post.component';
import { FeedComponent } from './feed/feed.component';
import { FormsModule } from '@angular/forms';
import { SuggestedFollowerComponent } from './suggested-follower/suggested-follower.component';
import { ProfileComponent } from './profile/profile.component';
import { MyPostsComponent } from './my-posts/my-posts.component';
import { HttpClientModule} from '@angular/common/http'
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
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
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
