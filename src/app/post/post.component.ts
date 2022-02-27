import { Component, Input, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
 comment = ""
 isComment = false;
 posts;
  constructor(private utilityService : UtilityService) { }

  ngOnInit(): void {
  this.getPosts();
  }
  getPosts()
   {
     this.utilityService.getPosts().subscribe((x :any) => {
      this.posts = x.results;
      console.log("mydata",this.posts);
     })
   }
  addComment()
   {
     if(this.comment == "")
      {
         this.isComment = true;
      }
      else {
        this.isComment = true;
      }
   }
   postComment()
    {
      
    }
    onScrollDown(ev: any) {
      console.log("scrolled down!!", ev);
    }
}
