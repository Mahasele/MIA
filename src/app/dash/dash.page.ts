import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.page.html',
  styleUrls: ['./dash.page.scss'],
})
export class DashPage {

  constructor(private router: Router) { }

  navigateToSettings() {
    this.router.navigate(['/settings']);
  }

  navigateToUsers() {
    this.router.navigate(['/users']);
  }

  navigateToRequests() {
    this.router.navigate(['/requests2']);
  }

  navigateToEducation() {
    this.router.navigate(['/education2']);
  }

  navigateToMatches() {
    this.router.navigate(['/matches2']);
  }
}

