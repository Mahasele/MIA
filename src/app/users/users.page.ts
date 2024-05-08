import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage {
  users: any[] = [
    { name: 'User 1' },
    { name: 'User 2' },
    { name: 'User 3' },
    // Add more mock users as needed
  ];

  constructor() {}

  // No need for ngOnInit or fetchUsers method

  // No changes needed in checkRequests and checkMatches methods
  checkRequests() {
    // Add navigation logic here
  }

  checkMatches() {
    // Add navigation logic here
  }
}
