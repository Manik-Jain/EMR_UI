export class NewPatient {
    firstName: string;
    lastName: string;
    email: string;
    contactNumber: number;
    consentToShare: boolean;
    dob: string;
    age: number;

    constructor(
        firstName: string,
        lastName: string,
        email: string,
        contactNumber: number,
        consentToShare: boolean,
        dob: string,
        age: number) {

            
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.contactNumber = contactNumber;
            this.consentToShare = consentToShare;
            this.dob = dob;
            this.age = age;
            
    }
}