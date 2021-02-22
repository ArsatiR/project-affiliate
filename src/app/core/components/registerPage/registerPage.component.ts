import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from 'src/app/animations';

@Component({
  selector: 'app-registerPage',
  templateUrl: './registerPage.component.html',
  styleUrls: ['./registerPage.component.scss'],
  animations:[slideInAnimation]
})
export class RegisterPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
