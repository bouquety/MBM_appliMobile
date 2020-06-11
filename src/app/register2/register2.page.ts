import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register2',
  templateUrl: './register2.page.html',
  styleUrls: ['./register2.page.scss'],
})
export class Register2Page implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {
  }
  
  doRegister3(form): void {
    this.navController.navigateForward('register3');
  }
  goRegister3(form): void {
    this.navController.navigateForward('register3');
  }

}
