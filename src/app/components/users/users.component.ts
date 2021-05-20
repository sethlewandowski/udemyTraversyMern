import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users!: User[];
  showExtended: boolean = false;
  loading: boolean = true;
  enableAdd: boolean = true;

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
          registered: new Date('01/02/2021 08:30:00')
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
        registered: new Date('01/23/2021 08:30:00')
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
        registered: new Date('06/02/2021 08:30:00')
      }
      ];

      this.loading = false;
    }


    addUser() {
      this.users.push({firstName: 'ted', lastName: 'jones'})
    }
    
  }

