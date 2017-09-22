import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  //public pageTitle: string = 'Welcome';
  pageTitle:string="Welcome page";
  constructor() { }

  ngOnInit() {
  }

}
