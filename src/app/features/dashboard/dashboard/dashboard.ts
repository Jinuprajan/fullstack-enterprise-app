import { Component } from '@angular/core';
import { DashboardService } from '../../../core/services/dashboard';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  message = '';

  constructor(private dashboardService: DashboardService) {

    this.message = this.dashboardService.getDashboardData();

  }

  

}
