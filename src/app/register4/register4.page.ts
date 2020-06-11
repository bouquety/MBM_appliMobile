import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register4',
  templateUrl: './register4.page.html',
  styleUrls: ['./register4.page.scss'],
})
export class Register4Page implements OnInit {

  constructor(private navController: NavController) { }
  ngOnInit() {
  }

  doRegisterEnd(form): void {
    this.navController.navigateForward('home');
  }
  goRegister5(form): void {
    this.navController.navigateForward('register5');
  }
}
