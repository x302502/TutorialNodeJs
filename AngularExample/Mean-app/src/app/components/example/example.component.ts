import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { DocsComponent } from '../docs/docs.component';
@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  listExample = [];
  constructor(private router: Router) {
  }

  ngOnInit() {
    for ( let i = 1 ; i < 7 ; i ++ ) {
      this.listExample.push('example' + i );
    }
  }

}
