import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blood',
  templateUrl: './blood.page.html',
  styleUrls: ['./blood.page.scss'],
})
export class BloodPage implements OnInit {
  requests: any[] = [
    { title: 'Urgent Blood Donation Needed', bloodType: 'O+', urgency: 'Urgent', location: 'City Hospital' },
    { title: 'Blood Donation Drive at Red Cross', bloodType: 'A-', urgency: 'Normal', location: 'Red Cross Center' },
    { title: 'Emergency Blood Supply Needed', bloodType: 'B+', urgency: 'Critical', location: 'Local Blood Bank' }
    
  ];
  filteredRequests: any[] = [];
  searchBloodType: string = ''; 

  constructor(private navCtrl: NavController, private router: Router) {}

  ngOnInit() {
    this.filteredRequests = this.requests; 
  }

  searchRequests() {
    if (this.searchBloodType) {
      this.filteredRequests = this.requests.filter(request => 
        request.bloodType.toLowerCase().includes(this.searchBloodType.toLowerCase())
      );
    } else {
      this.filteredRequests = this.requests;
    }
  }

  showProfile(request: any) {
    
    this.router.navigate(['/profile'], { state: { requestData: request } });
  }

  navigateToRequestPage() {
    this.router.navigate(['/request']); 
  }
}

