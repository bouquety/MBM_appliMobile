import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  goToLogin(): void {
    this.navController.navigateForward('login');
  }

  goToRegister(): void {
    this.navController.navigateForward('register');
  }

}
