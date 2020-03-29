import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  doRegister2(form): void {
    this.navController.navigateForward('register2');
  }

}
