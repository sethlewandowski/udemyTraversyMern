import { Component } from '@angular/core'

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent {
    // Properties
    firstName: string;
    lastName: string;
    age: number;
    address: object;

    foo: any;
    hasKids: boolean;
    numberArray: number[]; //array of numbers


    //Methods
    // Constructor will run before output in html 
    constructor() {
        this.firstName = "John";
        this.lastName = "Doe";
        this.age = 22;
        this.address = {
            street: '21 e 47th street',
            city: 'Boston',
            state: 'MA'
        }
        this.hasKids = true;
        this.numberArray = [1, 2, 3]
    }

    sayHello() {
        console.log(`Hello ${this.firstName}`)
    }

    hasBirthday() {
        this.age++ 
        console.log(this.age)
    }

    addNumbers(num1: number, num2: number): number {
        return num1 + num2
    }
}