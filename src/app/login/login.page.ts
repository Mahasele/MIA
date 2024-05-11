import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth'; // Import AngularFireAuth
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { first } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';
import { FirebaseError } from 'firebase/app';


@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {

  email: string;
  password: string;
  errorMessage: string;

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private tost: ToastController
  
  ) {
    this.email = '';
    this.password = '';
    this.errorMessage = '';
  }

  async login() {
    try {
      const userCredential = await this.afAuth.signInWithEmailAndPassword(this.email, this.password);
      if (userCredential.user) {
        const userId = userCredential.user.uid;
        // Check if the user is in the 'users' collection
        const userDoc = await this.firestore.collection('users').doc(userId).get().pipe(first()).toPromise();
        if (userDoc && userDoc.exists) {
          const userData = userDoc.data() as { userType: string };
          if (userData) {
            this.router.navigate(['/dashboard',userId]); // Navigate to donor dashboard
            return;
          } else {
            this.router.navigate(['/home']);
          }
        }
      } else {
        
      }
    } catch (error:any) { 
      
      if (error.code === 'auth/invalid-credential') {
        console.log("User credential is null.");
        this.tost.create({
          duration:2000,
          position:'bottom',
          message:'Invalid email or password'
        }).then(e=>e.present())
        this.errorMessage = 'Invalid email or password';
      } else {
        this.tost.create({
          duration: 2000,
          position: 'bottom',
          message: 'Fill in all fields.'
        }).then(e => e.present())
      
      }
    }
  }

  gotoSignup() {
    // Navigate to the signup page
    this.router.navigate(['/register']);
  }
}