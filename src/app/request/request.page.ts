import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseServiceService } from '../firebase.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.page.html',
  styleUrls: ['./request.page.scss'],
})

export class RequestPage {
  name: string = "";
  email: string = "";
  bloodType: string = "";
  message: string = "";
  requestBlood:string='';
  date: string = '';
id
user:any={}
  constructor(private router: Router, private fire : FirebaseServiceService) {
    this.id = this.router.url.slice(0, this.router.url.lastIndexOf('/')).slice(this.router.url.slice(0, this.router.url.lastIndexOf('/')).lastIndexOf('/') + 1)
    console.log(this.id)
    fire.getUser(this.id).subscribe(e=>{
      this.user=e
      this.name = this.user.name
      this.email = this.user.email
      if (this.user.userType==='individual') {
        this.bloodType = this.user.bloodGroup
      }
      console.log(e)
    })
   }

  submitForm() {
    let request ={
      name:this.name,
      email: this.email,
      bloodType: this.bloodType,
      requestLocation:this.message,
      requestDate: this.date,
      requestType: this.requestBlood,
      contact: this.user.contacts || this.user.contact,
      userType: this.user.userType
    }
    
    console.log("Form submitted");
    console.log("Name:", this.name);
    console.log("Email:", this.email);
    console.log("Blood Type:", this.bloodType);
    console.log("Message:", this.message);
    console.log("Request Blood:", this.requestBlood);
    console.log("Offer Blood to Match:", this.date);

    if (this.requestBlood==='donor') {
      this.fire.donationSubmit(request,this.id)
      return
    } 
    this.fire.requestSubmit(request,this.id)
  }

  formValid(): boolean {
    return this.name.trim() !== "" && this.email.trim() !== "" && this.bloodType.trim() !== "" && this.date.trim() !== "" && this.message.trim() !== "" && this.requestBlood.trim() !== "";
  }
}