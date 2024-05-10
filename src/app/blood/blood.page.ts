import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FirebaseServiceService } from '../firebase.service';

@Component({
  selector: 'app-blood',
  templateUrl: './blood.page.html',
  styleUrls: ['./blood.page.scss'],
})
export class BloodPage implements OnInit {
  requests: any[] = [];
  filteredRequests: any[] = [];
  searchBloodType: string = ''; 
id
  selectedType = {
    i: 0,
    value: 'all'
  }
  registrationTypes = [
    {
      title: 'All',
      value: 'all'
    },
    {
      title: 'Donors',
      value: 'donor'
    },
    {
      title: 'Recipients',
      value: 'recipient'
    }
  ]
  user:any={}
  constructor(private navCtrl: NavController, private router: Router, private fire: FirebaseServiceService,private alertCtr: AlertController) {
    this.id = this.router.url.slice(0, this.router.url.lastIndexOf('/')).slice(this.router.url.slice(0, this.router.url.lastIndexOf('/')).lastIndexOf('/') + 1) 
    
    fire.getUser(this.id).subscribe( user =>{
      this.user=user
      this.checkSelectedType(this.selectedType)
    }

    )
    
  }

  ngOnInit() {
    
  }

  searchRequests() {
    if (this.searchBloodType) {
      this.filteredRequests = this.requests.filter(request => 
        request.bloodType.toLowerCase().includes(this.searchBloodType.toLowerCase())
      );
    } else {
      this.filteredRequests = this.requests;
    }
  }

  showProfile(request: any) {
    this.router.navigate(['dashboard',this.id,'profile'], { state: { requestData: request } });
  }

  navigateToRequestPage() {
    this.router.navigate(['dashboard', this.id, 'request']); 
  }
  
  checkSelectedType(check: any) {
    this.selectedType = check
    this.fire.getRequests().subscribe(requests => {
      requests.map(req => {
        if (req.status === 'pending' && req.requestType === 'donor' && (new Date(req.requestDate).toISOString() < new Date().toISOString())) {
          this.fire.expireDonor({ allId: req.allId, requestId: req.id, donorId: req.donorId })
          return req
        }
        if (req.status === 'pending' && req.requestType !== 'donor' && (new Date(req.requestDate).toISOString() < new Date().toISOString())) {
          this.fire.expireRecipient({ allId: req.allId, requestId: req.id, recipientId: req.recipientId })
          return req
        }
      })
      if (this.selectedType.value === 'all') {
        this.filteredRequests = requests.filter((request: any) => {
          if (this.user.userType === 'indivdual' && this.user.bloodGroup !== 'AB+' && this.user.bloodGroup !== 'AB-' && this.user.bloodGroup !== 'O-' && this.user.bloodGroup !== 'O-'){
            return (request.donorId !== this.id || request.recipientId !== this.id) && (request.bloodType.slice(0, (request.bloodType).length - 1) === this.user.bloodGroup.slice(0, (this.user.bloodGroup).length - 1) || request.bloodType === 'O+' || request.bloodType === 'O-' || request.bloodType === 'AB+' || request.bloodType === 'AB-') && request.status === 'pending' && (new Date(request.requestDate).toISOString() > new Date().toISOString())
          }
          return (request.donorId !== this.id || request.recipientId !== this.id) && request.status === 'pending' && (new Date(request.requestDate).toISOString() > new Date().toISOString())
          
        })
      } else {
        
        this.filteredRequests = requests.filter((request:any)=> {
          if (this.user.userType === 'indivdual' && this.user.bloodGroup !== 'AB+' && this.user.bloodGroup !== 'AB-' && this.user.bloodGroup !== 'O-' && this.user.bloodGroup !== 'O-') {
            return request.requestType === this.selectedType?.value && (request.bloodType.slice(0, (request.bloodType).length - 1) === this.user.bloodGroup.slice(0, (this.user.bloodGroup).length - 1) || request.bloodType === 'O+' || request.bloodType === 'O-' || request.bloodType === 'AB+' || request.bloodType === 'AB-') && request.status === 'pending' && (new Date(request.requestDate).toISOString() > new Date().toISOString()) && (request.donorId !== this.id || request.recipientId !== this.id) 
        }
          return request.status === 'pending' && (new Date(request.requestDate).toISOString() > new Date().toISOString()) && request.requestType === this.selectedType?.value && (request.donorId !== this.id || request.recipientId !== this.id)
        })
      }

      this.filteredRequests = this.filteredRequests.map((request: any) => {
        return {
          ...request,
          requestDate: this.fomatDate(request.requestDate)
        }
      })

    }, (err:any) => {
      console.log('error occured')
    }, () => console.log('completed'))
  }
  fomatDate(date: string): string {
    return date.replace('T', ' ')
  }
  donate(donations: any) {
    const donation = {
      appoimentDate: donations.requestDate,
      appointmentLocation: donations.requestLocation,
      recipient: donations.name,
      donor:this.user.name,
      bloodType: donations.bloodType,
      recipientId: donations.recipientId,
      donorId: this.id,
      recipientType: donations.userType,
      donorType: this.user.userType,
      requestId: donations.id,
      allId: donations.allId
    }
    this.alertCtr.create({
      header: 'Alert',
      message: `Are you sure you want to donate blood to ${donation.recipient}, and read and understand terms and conditions`,
      buttons: [
        {
          text: 'No',
          role: 'cancel'
        },
        {
          text: 'Yes',
          handler: () => {
            this.fire.donate(donation, this.id)

          }
        }
      ]
    }).then((e:any) => e.present())
  }
  requestBlood(donations: any) {
    const donation = {
      appoimentDate: donations.requestDate,
      appointmentLocation: donations.requestLocation,
      recipient: this.user.name,
      donor: donations.name,
      bloodType: donations.bloodType,
      recipientId: this.id,
      donorId: donations.donorId,
      recipientType: this.user.userType,
      donorType: donations.userType,
      requestId: donations.id,
      allId: donations.allId
    }
    this.alertCtr.create({
      header: 'Alert',
      message: `Are you sure you want to request blood from ${donation.donor}, and read and understand terms and conditions`,
      buttons: [
        {
          text: 'No',
          role: 'cancel'
        },
        {
          text: 'Yes',
          handler: () => {
            this.fire.requestBlood(donation, this.id)
            console.log(donation)
          }
        }
      ]
    }).then((e:any )=> e.present())
  }
  phone(phone: string) {
    this.alertCtr.create({
      header: 'Phone',
      message: phone,
      buttons: ['okay'
      ]
    }).then((e:any) => e.present())
  }

}

