import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'; 

@Component({
  selector: 'app-matching',
  templateUrl: './matching.page.html',
  styleUrls: ['./matching.page.scss'],
})
export class MatchingPage implements OnInit {
  donors: any[] = []; 
  requests: any[] = [];
  matchedDonors: any[] = [];

  constructor(private navController: NavController) { }

  ngOnInit() {
    
    this.donors = [
      { name: 'John Doe', bloodType: 'A+', contact: '123-456-7890', location: 'City Hospital' },
      { name: 'Jane Smith', bloodType: 'B-', contact: '987-654-3210', location: 'Local Blood Bank' },
      
    ];

    this.requests = [
      { bloodType: 'A+', location: 'City Hospital' },
      { bloodType: 'B+', location: 'Local Blood Bank' },
      
    ];

   
    this.matchDonorsWithRequests();
  }

  matchDonorsWithRequests() {
    this.matchedDonors = [];
    for (const donor of this.donors) {
      for (const request of this.requests) {
        if (donor.bloodType === request.bloodType && donor.location === request.location) {
          this.matchedDonors.push(donor);
          
          break;
        }
      }
    }
  }

  
  navigateToBloodPage() {
    this.navController.navigateForward('/blood');
  }

}

