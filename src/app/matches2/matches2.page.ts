import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-matches2',
  templateUrl: './matches2.page.html',
  styleUrls: ['./matches2.page.scss'],
})
export class Matches2Page implements OnInit {
  groupedDonors: { bloodGroup: string, donors: any[] }[] = [];

  constructor(private router: Router, private firestore: AngularFirestore) { }

  ngOnInit() {
    this.groupDonorsByBloodGroup();
  }

  groupDonorsByBloodGroup() {
    this.firestore.collection('donors')
      .valueChanges({ idField: 'id' })
      .subscribe((donors: any[]) => {
        const groupedDonorsMap: { [key: string]: any[] } = {};

        donors.forEach(donor => {
          const bloodGroup = donor.bloodGroup;
          if (!groupedDonorsMap[bloodGroup]) {
            groupedDonorsMap[bloodGroup] = [];
          }
          groupedDonorsMap[bloodGroup].push(donor);
        });

        this.groupedDonors = Object.keys(groupedDonorsMap).map(bloodGroup => ({
          bloodGroup,
          donors: groupedDonorsMap[bloodGroup]
        }));
      });
  }

  navigateBack() {
    this.router.navigate(['/dash']);
  }

  navigateToRequests2() {
    this.router.navigate(['/requests2']);
  }
}
