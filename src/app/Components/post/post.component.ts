import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/Services/auth.service';
import { UtilityService } from '../../Services/utility.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit,OnDestroy {
 comment = []
 isComment = false;
 posts = [];
 private subs : Subscription;
 currentUser;
 limit = 10;
 page = 1;
 isLoading = false;
  constructor(private utilityService : UtilityService,
              private authService : AuthService) {
                this.currentUser = this.authService.currentUserValue;
               }

  ngOnInit(): void {
  this.getPosts();
  }
  getPosts()
   {
     this.isLoading = true;
   this.subs =  this.utilityService.getPosts(this.limit,this.page).
     subscribe((x :any) => {
       x.results.forEach(y => {
        this.posts.push({posts : y,like : false,coments : [],saved : false});
        this.isLoading = false;
       })
   })
  
  }
 
    onScrollDown(ev: any) {
      this.limit = this.limit + 10;this.page++;
      this.getPosts();
    }
    ngOnDestroy()
     {
       this.subs.unsubscribe();
     }
     toggleLike(post : any)
      {
        post.like = !post.like
      }
      postComment(i)
       {
        this.posts[i].coments.push(this.comment[i]);
        this.comment = [];
        console.log(this.posts);
      }
      toggleSaved(post :any)
       {
        post.saved = ! post.saved
       }
}
