import { Component, OnInit, animate } from '@angular/core';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.openNav();
  }
  openNav() {
    document.getElementById('mySidenav').style.width = '18%';
    document.getElementById('main').style.width = '82%';
    document.getElementById('main').style.marginLeft = '18%';
  }
  closeNav() {
    document.getElementById('mySidenav').style.width = '0%';
    document.getElementById('main').style.marginLeft = '0%';
    document.getElementById('main').style.width = '100%';
    document.body.style.backgroundColor = 'white';
  }
}
