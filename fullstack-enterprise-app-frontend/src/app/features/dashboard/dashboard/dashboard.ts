import { Component } from '@angular/core';
import { DashboardService } from '../../../core/services/dashboard';
import { AuthService } from '../../../core/services/auth-service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  message = '';

  constructor(private dashboardService: DashboardService, private authService: AuthService) {

    this.message = this.dashboardService.getDashboardData();

  }


login(){

 this.authService.login();

}

logout(){

 this.authService.logout();   
}
  

}
