import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseServiceService } from '../firebase.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.page.html',
  styleUrls: ['./view-all.page.scss'],
})
export class ViewAllPage implements OnInit {
  
  upcomingAppointments: any[] = []
  previousAppointments: any[] = []
  appointments: any[] = []
  user:any={}
  selected =''
  upcomingEvents: any[] = [
    { 
      title: 'Blood Donation Camp', 
      date: 'April 20, 2024', 
      location: 'City Hospital', 
      image: 'assets/images/cam.jpg' 
    },
    { 
      title: 'Blood Drive at Red Cross', 
      date: 'May 10, 2024', 
      location: 'Red Cross Center', 
      image: 'assets/images/red.jpg' 
    },
    { 
      title: 'Community Blood Donation Event', 
      date: 'June 5, 2024', 
      location: 'Community Center', 
      image: 'assets/images/eve.jpg' 
    },
  
  ];
id
  constructor(private router: Router, private fire: FirebaseServiceService) {
    this.id = this.router.url.slice(0, this.router.url.lastIndexOf('/')).slice(this.router.url.slice(0, this.router.url.lastIndexOf('/')).lastIndexOf('/') + 1) 
    console.log('id', this.id)
    fire.getUser(this.id).subscribe(user=>this.user=user)
    this.fire.getUserAppointments(this.id).subscribe(appointments => {
      appointments.map(app => {
        if (app.status === 'pending' && app.donorId && (new Date(app.appoimentDate).toISOString() < new Date().toISOString())) {
          this.fire.expireApp({
            donorid: app.donorId,
            recipientUid: app.recipientUid,
            allId: app.allId,
            recipientId:this.id,
            donorUid:app.id,
          })
          return app
        }
        if (app.status === 'pending' && !app.donorId && (new Date(app.appoimentDate).toISOString() < new Date().toISOString())) {
          this.fire.expireRecipient({
            donorid: this.id,
            recipientUid: app.recipientUid,
            allId: app.allId,
            recipientId: app.recipientId,
            donorUid: app.id
          })
          return app
        }
      })
      
      this.appointments = appointments.map(appointment => {
        return {
          ...appointment,
          appuestDate: this.fomatDate(appointment.appoimentDate)
        }
      })
      this.upcomingAppointments = this.appointments.filter(a => a.status === 'pending')
      this.previousAppointments = this.appointments.filter(a => a.status !== 'pending')
      console.log(appointments)

    }, err => {

      console.log('error occured')
    }, () => console.log('completed'))
  }

  ngOnInit() {
  }
  fomatDate(date: string): string {
    return date.replace('T', ' ')
  }
  viewEventDetails(event: any) {
    this.router.navigate(['/event-details'], { state: { event: event } });
  }

  navigateTo(selected: string) {
    this.selected=selected
  }
  cancelAppointment(app: any) {
    this.fire.cancelAppointment(app)
  }
  doneAppointment(app: any) {
    this.fire.doneAppointment(app)
  }

}
