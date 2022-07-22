import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { userContent } from '../interfaces/content';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  userContent: userContent;  

  constructor(private router: Router) { 
    this.userContent= new userContent();
  }

  ngOnInit(): void {
  }


  getUserId() {

    const oldRecords = localStorage.getItem('userBlog');
    if(oldRecords!==null){
      const userBlog = JSON.parse(oldRecords);
      return userBlog.length + 1
    }else{
      return 1;
     }
  }


  cancel() {
    location.reload()
  }


  postBlog() {

    const latestId= this.getUserId();
    this.userContent.userID = latestId;
   const oldRecords = localStorage.getItem('userBlog');
   
   if(oldRecords !== null){
    if(this.userContent.userTitle  === undefined || this.userContent.userDescription ===undefined){
      alert('Invalid');
    }else{
    const userBlog = JSON.parse(oldRecords);
    userBlog.push(this.userContent)
    localStorage.setItem('userBlog', JSON.stringify(userBlog))
    alert('New Blog Added');
    this.router.navigateByUrl('/');
    }
   }
   else{
    if(this.userContent.userTitle === undefined || this.userContent.userDescription === undefined){
      alert('Please fill the Title and Description ');
    }else{
    const userArr = [];
    userArr.push(this.userContent)
    localStorage.setItem('userBlog', JSON.stringify(userArr))
    alert('Your New Blog Added');
   this.router.navigateByUrl('/');
    }
   }
  }


}
