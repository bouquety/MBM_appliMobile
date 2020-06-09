import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register3',
  templateUrl: './register3.page.html',
  styleUrls: ['./register3.page.scss'],
})
export class Register3Page implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  doRegisterEnd(form): void {
    this.navController.navigateForward('home');
  }
  goRegister4(form): void {
    this.navController.navigateForward('register4');
  }

}
