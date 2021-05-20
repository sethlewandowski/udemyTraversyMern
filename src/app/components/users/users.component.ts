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
    address: {
      street: '',
      city: '',
      state: ''
    }
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
          // age: 22,
          address: {
              street: '3 e 4th',
              city: 'Boston',
              state: 'MA'
          },
          isActive: true,
          registered: new Date('01/02/2021 08:30:00'),
        hide: false
      },
      {
        firstName: 'Karen',
        lastName: 'Jones',
        age: 52,
        address: {
            street: '233 e 22th',
            city: 'Boston',
            state: 'MA'
        },
        isActive: false,
        registered: new Date('01/23/2021 08:30:00'),
        hide: true
      },
      {
        firstName: 'Rosie',
        lastName: 'Donnel',
        age: 26,
        address: {
            street: '233 e 47th',
            city: 'Boston',
            state: 'MA'
        },
        isActive: true,
        registered: new Date('06/02/2021 08:30:00'),
        hide: true
      }
      ];

      this.loading = false;
    }

    onSubmit() {
      console.log(123)
    }

    addUser(){
      this.user.isActive = true;
      this.user.registered = new Date();
      this.users.unshift(this.user);

      this.user = {firstName: '',
      lastName: '',
      address: {
        street: '',
        city: '',
        state: ''
      }
    }
  }
    
  }

