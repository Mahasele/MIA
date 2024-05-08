import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  selectedTheme: string = 'light'; // Define selectedTheme property
  fontSize: number = 3; // Define fontSize property

  constructor() { }

  ngOnInit() {
  }

  editProfile() {
    // Logic for editing profile
  }
}
