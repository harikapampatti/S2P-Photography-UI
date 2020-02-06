import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'S2P-Photography-UI';

  constructor(private router:Router) {

  }
  gotoAbout(){
    this.router.navigate(['/about']);
  }
  gotoTeam(){

  }
  gotoPortfolio(){

  }
  gotoFilms(){

  }
  gotoStories(){

  }
  gotoContact(){

  }
  gotoFaq(){

  }
}
