import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: '',
  };
  users!: User[];
  showExtended: boolean = true;
  loading: boolean = true;
  enableAdd: boolean = false;
  showUserForm: boolean = false;

  constructor() { }

  ngOnInit() {
      this.users = [
        {
          firstName: 'Seth',
          lastName: 'Lew',
          email: 'seth@gmail.com',
          isActive: true,
          registered: new Date('01/02/2021 08:30:00'),
        hide: false
      },
      {
        firstName: 'Karen',
        lastName: 'Jones',
        email: 'karen@gmail.com',
        isActive: false,
        registered: new Date('01/23/2021 08:30:00'),
        hide: true
      },
      {
        firstName: 'Rosie',
        lastName: 'Donnel',
        email: 'rosie@gmail.com',
        isActive: true,
        registered: new Date('06/02/2021 08:30:00'),
        hide: true
      }
      ];

      this.loading = false;
    }

    onSubmit(e) {
      console.log(123)
    }

    // addUser(){
    //   this.user.isActive = true;
    //   this.user.registered = new Date();
    //   this.users.unshift(this.user);

    //   this.user = {
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //   }
    // }
    
  }

