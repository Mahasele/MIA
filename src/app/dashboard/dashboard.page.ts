import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseServiceService } from '../firebase.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  upcomingEvents: any[] = [];
   
  userId
  constructor(private router: Router, private activatedRoute: ActivatedRoute,private fire:FirebaseServiceService) {
    this.userId = activatedRoute.snapshot.params['userId']
    console.log(this.userId)
   }

  ngOnInit() {
    
    this.upcomingEvents = [
      { title: 'Blood Donation Camp',image: 'assets/images/mm.jpg', date: 'April 20, 2024', location: 'City Hospital' },
      { title: 'Blood Drive at Red Cross',image: 'assets/images/kk.jpg', date: 'May 10, 2024', location: 'Red Cross Center' },
     
    ];
  }

  viewEventDetails(event: any) {
   
    this.router.navigate(['dashboard/', this.userId,'/request'], { state: { event: event } });
  }

  createEvent() {
    this.router.navigate(['dashboard/',this.userId,'/create-event']);
  }

  navigateTo(page: string) {
   
    this.router.navigate([`/${page}`]);
  }
  logout(){
    this.fire.logout()
  }

}