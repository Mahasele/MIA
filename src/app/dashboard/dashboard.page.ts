import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  upcomingEvents: any[] = [];
   

  constructor(private router: Router) { }

  ngOnInit() {
    
    this.upcomingEvents = [
      { title: 'Blood Donation Camp',image: 'assets/images/mm.jpg', date: 'April 20, 2024', location: 'City Hospital' },
      { title: 'Blood Drive at Red Cross',image: 'assets/images/kk.jpg', date: 'May 10, 2024', location: 'Red Cross Center' },
     
    ];
  }

  viewEventDetails(event: any) {
   
    this.router.navigate(['/request'], { state: { event: event } });
  }

  createEvent() {
   
    this.router.navigate(['/create-event']);
  }

  navigateTo(page: string) {
   
    this.router.navigate([`/${page}`]);
  }

}