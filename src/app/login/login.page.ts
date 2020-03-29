import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { apiBaseUrl} from './../../models/api-base-url';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = "";
  password: string = "";
  constructor(private navController: NavController, private http: HttpClient) { }

  ngOnInit() {
  }

  doLogin(): void {
    console.log(this.email);
    // let user = {
    //   email: "mek@gmail.com",
    //   password: "mek"
    // }
    // let url = `${apiBaseUrl.url}/api/login`;
    // console.log(url);
    // this.http
    //   .post(url, user)
    //   .subscribe(result => {
    //     // console.log('result', result);
    //     this.navController.navigateForward(result);
    //   });
    // this.navController.navigateForward('login');
  }

}
