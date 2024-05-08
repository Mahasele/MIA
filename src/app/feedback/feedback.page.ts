import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage {

  feedback: string = '';
  email: string = '';

  constructor(private navController: NavController, private toastController: ToastController) { }

  async submitFeedback() {
    const toast = await this.toastController.create({
      message: 'Feedback submitted successfully!',
      duration: 2000,
      position: 'bottom'
    });
    toast.present();

    this.feedback = '';
    this.email = '';
  }
  
  navigateToDashboard() {
    this.navController.navigateBack('/dashboard'); 
  }

}
