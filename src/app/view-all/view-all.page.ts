import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.page.html',
  styleUrls: ['./view-all.page.scss'],
})
export class ViewAllPage implements OnInit {

  upcomingEvents: any[] = [
    { 
      title: 'Blood Donation Camp', 
      date: 'April 20, 2024', 
      location: 'City Hospital', 
      image: 'assets/images/cam.jpg' 
    },
    { 
      title: 'Blood Drive at Red Cross', 
      date: 'May 10, 2024', 
      location: 'Red Cross Center', 
      image: 'assets/images/red.jpg' 
    },
    { 
      title: 'Community Blood Donation Event', 
      date: 'June 5, 2024', 
      location: 'Community Center', 
      image: 'assets/images/eve.jpg' 
    },
  
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  viewEventDetails(event: any) {
    this.router.navigate(['/event-details'], { state: { event: event } });
  }

  navigateTo(page: string) {
    this.router.navigate([`/${page}`]);
  }

}
