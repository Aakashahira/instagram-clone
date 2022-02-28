import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suggested-follower',
  templateUrl: './suggested-follower.component.html',
  styleUrls: ['./suggested-follower.component.css']
})
export class SuggestedFollowerComponent implements OnInit {
  names = ["vanilla","strawberry","choclate","mango"];
  constructor() { }

  ngOnInit(): void {
  }

}
