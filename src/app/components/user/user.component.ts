import { Component } from '@angular/core'

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent {
    // Properties
    firstName: string = 'Seth';
    lastName = 'Lew';
    age = 30;

    //Methods
    constructor() {
        this.sayHello()
        this.hasBirthday()
    }

    sayHello() {
        console.log(`Hello ${this.firstName}`)
    }

    hasBirthday() {
        this.age++ 
        console.log(this.age)
    }
}