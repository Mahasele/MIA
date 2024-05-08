import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  requestData: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.requestData = this.route.snapshot.paramMap.get('requestData');
  }
}