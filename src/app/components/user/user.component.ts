import { Component, OnInit } from '@angular/core'

import { User } from '../../models/User'

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
    user!: User; // ! means user isn't initalized in constructor

    constructor() {
    }

    ngOnInit() {
        this.user = {
            firstName: 'Seth',
            lastName: 'Lew',
            age: 22,
            address: {
                street: '233 e 47th',
                city: 'Boston',
                state: 'MA'
            },
        }
    }
}