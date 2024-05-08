import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth'; // Import AngularFireAuth
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { first } from 'rxjs/operators';


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
    private firestore: AngularFirestore
  
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
        const userDoc = await this.firestore.collection('donors').doc(userId).get().pipe(first()).toPromise();
        if (userDoc && userDoc.exists) {
          const userData = userDoc.data() as { userType: string };
          if (userData && userData.userType === 'donor') {
            this.router.navigate(['/dashboard']); // Navigate to donor dashboard
            return;
          } else if (userData && userData.userType === 'hospital') {
            this.router.navigate(['/dash']); // Navigate to hospital dashboard
            return;
          } else {
            console.error("Unknown user type:", userData.userType);
          }
        }

        // Check if the user is in the 'hospitals' collection
        const hospitalDoc = await this.firestore.collection('hospitals').doc(userId).get().pipe(first()).toPromise();
        if (hospitalDoc && hospitalDoc.exists) {
          // Navigate to hospital dashboard
          this.router.navigate(['dash']);
          return;
        }

        console.error("User data not found in Firestore.");
      } else {
        console.error("User credential is null.");
      }
    } catch (error: any) {
      console.error('Error logging in:', error);
      if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        this.errorMessage = 'Invalid email or password';
      } else {
        this.errorMessage = 'Fill in all fields.';
      }
    }
  }

  gotoSignup() {
    // Navigate to the signup page
    this.router.navigate(['/register']);
  }
}