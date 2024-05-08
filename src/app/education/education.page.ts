import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'; 

@Component({
  selector: 'app-education',
  templateUrl: './education.page.html',
  styleUrls: ['./education.page.scss'],
})
export class EducationPage implements OnInit {

  constructor(private navController: NavController) { } 

  ngOnInit() {
  }

  
  navigateToDashboard() {
    this.navController.navigateBack('/dashboard'); 
  }


  submitQuestion() {
   
    console.log('Question submitted!');
  }

  
  openExternalLink() {
    const url = 'https://www.hhs.gov/givingequalsliving/giveblood/giving-process';
    window.open(url, '_blank');
  }

}


