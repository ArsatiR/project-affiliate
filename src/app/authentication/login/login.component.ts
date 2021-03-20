import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FrequentDataService } from 'src/app/core/services/frequent-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private freqData: FrequentDataService) { }

  ngOnInit() {
  }

  async onLogin(){
    await this.freqData.setUser('asd').then((response) => {
      this.router.navigateByUrl('/marketplace')
    })
  }

}
