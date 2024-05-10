import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseServiceService } from '../firebase.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  requestData: any;
  name: string = "";
  email: string = "";
  password: string = "";
  confirmPassword: string = "";
  dob: string = "";
  gender: string = "";
  bloodGroup: string = "";
  contacts: string = "";
  hospitalName: string = "";
  district: string = "";
  hospitalContact: string = "";
  registerClicked: boolean = false;
  userType: string = ''; // Add this line
id
user:any
  constructor(private route: ActivatedRoute, private router: Router, private fire: FirebaseServiceService) {
    this.id = this.router.url.slice(0, this.router.url.lastIndexOf('/')).slice(this.router.url.slice(0, this.router.url.lastIndexOf('/')).lastIndexOf('/') + 1)
    console.log(this.id)
    fire.getUser(this.id).subscribe(e => {
      this.user = e
      
      if (this.user.userType === 'individual') {
        this.bloodGroup = this.user.bloodGroup
        this.name = this.user.name
        this.email = this.user.email
        this.gender=this.user.gender
        this.dob = this.user.dob
        this.contacts = this.user.contacts
        this.userType=this.user.userType
        return
      }
      this.hospitalName = this.user.name
      this.email = this.user.email
      this.userType = this.user.userType
      this.hospitalContact=this.user.contact
      this.district = this.user.district
    })
}

  ngOnInit() {
    this.requestData = this.route.snapshot.paramMap.get('requestData');
  }
}