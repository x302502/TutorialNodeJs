import { Component, OnInit } from '@angular/core';
// add code jquery
declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Mean App';
  listMenu = ['features', 'docs', 'resources', 'event', 'blog', 'example'];
  constructor() {
  }
}

