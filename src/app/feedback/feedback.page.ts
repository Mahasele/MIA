import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { FirebaseServiceService } from '../firebase.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage {

  feedback: string = '';
  email: string = '';
id
user:any
  constructor(private navController: NavController, private toastController: ToastController,private fire: FirebaseServiceService,private router:Router) {
    this.id = this.router.url.slice(0, this.router.url.lastIndexOf('/')).slice(this.router.url.slice(0, this.router.url.lastIndexOf('/')).lastIndexOf('/') + 1) 
    fire.getUser(this.id).subscribe(user => {
      this.user = user
      this.email = this.user.name
    })
  }

 submitFeedback() {
   this.fire.sendFeedback(this.email,this.feedback)
    // const toast = await this.toastController.create({
    //   message: 'Feedback submitted successfully!',
    //   duration: 2000,
    //   position: 'bottom'
    // });
    // toast.present();

    this.feedback = '';
    this.email = '';
  }
  
  navigateToDashboard() {
    this.navController.navigateBack('/dashboard'); 
  }

}
