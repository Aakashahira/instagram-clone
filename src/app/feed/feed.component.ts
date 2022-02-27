import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  mydata;
  constructor(private utilityService : UtilityService) { }

  ngOnInit(): void {
    this.getPosts();
  }
  getPosts()
   {
     this.utilityService.getPosts().subscribe(x => {
      this.mydata = x;
     })
   }
}
