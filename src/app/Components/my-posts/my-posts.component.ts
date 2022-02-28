import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css']
})
export class MyPostsComponent implements OnInit {
  myposts = [
    "https://picsum.photos/300/300?random=1",
    "https://picsum.photos/300/300?random=2",
    "https://picsum.photos/300/300?random=3",
    "https://picsum.photos/300/300?random=5",
    "https://picsum.photos/300/300?random=4",
  ]
  constructor() { }

  ngOnInit(): void {
  }
  
}
