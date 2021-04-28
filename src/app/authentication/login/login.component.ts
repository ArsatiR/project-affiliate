import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppDataService } from 'src/app/core/services/app-data.service';
import { FrequentDataService } from 'src/app/core/services/frequent-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private appDataService: AppDataService) { }

  ngOnInit() {
  }

  async onLogin(){
    let user = {
      name: "arsa"
    }
    this.appDataService.setAccessToken("asadasd", 1800)
    await this.appDataService.setUserInfo(user).then((response) => {
      this.router.navigateByUrl('/marketplace')
    })
  }

}
