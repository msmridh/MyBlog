import { Component, OnInit } from '@angular/core';
import { userContent } from '../interfaces/content';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  userBlog: userContent[];

  constructor() {
    this.userBlog=[];
   }

  ngOnInit(): void {
    const records = localStorage.getItem('userBlog')

    if(records!==null){
      this.userBlog = JSON.parse(records);
    }
  }

}
