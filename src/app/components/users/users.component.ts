import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users!: User[];

  constructor() { }

  ngOnInit(): void {
    this.users = [
      {
        firstName: 'Seth',
        lastName: 'Lew',
        age: 22,
        address: {
            street: '3 e 4th',
            city: 'Boston',
            state: 'MA'
        }
    },
    {
      firstName: 'Karen',
      lastName: 'Jones',
      age: 52,
      address: {
          street: '233 e 22th',
          city: 'Boston',
          state: 'MA'
      }
    },
    {
      firstName: 'Rosie',
      lastName: 'Donnel',
      age: 26,
      address: {
          street: '233 e 47th',
          city: 'Boston',
          state: 'MA'
      }
    }
    ];

    this.addUser({
      firstName: 'David',
      lastName: 'Jackson',
      age: 28,
      address: {
          street: '12 wake street',
          city: 'Boston',
          state: 'MA'
      }
    })
  }

  addUser(user: User) {
    this.users.push(user)
  }

}
