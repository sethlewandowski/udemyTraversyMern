import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users: User[];

  constructor() {
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
  ];}

    getUsers(): User[] {
      return this.users;
    }

    addUser(user: User) {
      this.users.unshift(user);
    }
   
}
