import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
  requestBlood: boolean = true;
  offerBlood: boolean = true;

  constructor(private router: Router) { }

  submitForm() {
    console.log("Form submitted");
    console.log("Name:", this.name);
    console.log("Email:", this.email);
    console.log("Blood Type:", this.bloodType);
    console.log("Message:", this.message);
    console.log("Request Blood:", this.requestBlood);
    console.log("Offer Blood to Match:", this.offerBlood);

    if (this.requestBlood) {
      this.router.navigate(['/blood'], { state: { requestData: { name: this.name, email: this.email, bloodType: this.bloodType, message: this.message } } });
    } else if (this.offerBlood) {
      this.router.navigate(['/matching']);
    }
  }

  formValid(): boolean {
    return this.name.trim() !== "" && this.email.trim() !== "";
  }
}