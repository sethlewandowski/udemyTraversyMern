import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users: User[];
  data: Observable<any>;

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
  ];
}
    getData() {
      this.data = new Observable(observer => {
        setTimeout(() => {
          observer.next(1);
        }, 1000);
        setTimeout(() => {
          observer.next(2);
        }, 2000);
        setTimeout(() => {
          observer.next(3);
        }, 3000);
        setTimeout(() => {
          observer.next(4);
        }, 4000);
      });
      return this.data;
    }

    getUsers(): Observable<User[]> {
      return of(this.users);
    }

    addUser(user: User) {
      this.users.unshift(user);
    }
   
}
