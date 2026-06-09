import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {

  getDashboardData() {

    // Simulate fetching dashboard data from an API
    return "Welcome to your dashboard!";

  }
  
}
