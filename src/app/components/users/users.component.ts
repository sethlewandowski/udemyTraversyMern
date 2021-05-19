import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users!: User[];
  showExtended: boolean = true;
  loading: boolean = true;
  enableAdd: boolean = true;

  constructor() { }

  ngOnInit() {
      this.users = [
        {
          firstName: 'Seth',
          lastName: 'Lew',
          age: 22,
          address: {
              street: '3 e 4th',
              city: 'Boston',
              state: 'MA'
          },
          image: 'https://placeimg.com/600/600/people/3'
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
        image: 'https://placeimg.com/600/600/people/2'

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
        image: 'https://placeimg.com/600/600/people/1'

      }
      ];

      this.loading = false;
    }
    
  }

