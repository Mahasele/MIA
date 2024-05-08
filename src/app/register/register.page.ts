import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore'; // Import AngularFirestore

@Component({
  selector: 'app-signup',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

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

  constructor(
    public navCntrl: NavController,
    private auth: Auth,
    private firestore: AngularFirestore // Inject AngularFirestore
  ) {}

  async register() {
    this.registerClicked = true;
    if (
      this.userType === 'donor' &&
      (this.name === "" || this.email === "" || this.password === "" || 
      this.confirmPassword === "" || this.dob === "" || !this.gender || 
      !this.bloodGroup || !this.contacts)
    ) {
      return;
    }
    if (
      this.userType === 'hospital' &&
      (this.hospitalName === "" || this.email === "" || this.password === "" || 
      this.confirmPassword === "" || !this.district || !this.hospitalContact)
    ) {
      return;
    }
    if (this.password !== this.confirmPassword) {
      console.error("Passwords do not match");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        this.auth,
        this.email,
        this.password
      );
  
      // Save user data to Firestore
      if (this.userType === 'donor') {
        await this.firestore.collection('donors').doc(userCredential.user.uid).set({
          name: this.name,
          email: this.email,
          dob: this.dob,
          gender: this.gender,
          bloodGroup: this.bloodGroup,
          contacts: this.contacts,
          userType: this.userType // Include userType field
        });
      } else if (this.userType === 'hospital') {
        await this.firestore.collection('hospitals').doc(userCredential.user.uid).set({
          name: this.hospitalName,
          email: this.email,
          district: this.district,
          contact: this.hospitalContact,
          userType: this.userType // Include userType field
        });
      }
  
      // Reset form fields
      this.name = "";
      this.email = "";
      this.password = "";
      this.confirmPassword = "";
      this.dob = "";
      this.gender = "";
      this.bloodGroup = "";
      this.contacts = "";
      this.hospitalName = "";
      this.district = "";
      this.hospitalContact = "";
  
      // Redirect to login page
      this.navCntrl.navigateBack('login');
    } catch (error) {
      console.error("Error registering user:", error);
    }
  }
  

  gotoLogin() {
    this.navCntrl.navigateBack('login');
  }
}