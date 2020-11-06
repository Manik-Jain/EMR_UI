export class PatientBasicInfo {

    id: string;
    firstName: string;
    lastName: string;
    email: string;
    contactNumber: number;
    consentToShare: boolean;
    dob: string;
    age: number;

    constructor(id: string,
        firstName: string,
        lastName: string,
        email: string,
        contactNumber: number,
        consentToShare: boolean,
        dob: string,
        age: number) {

            this.id = id;
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.contactNumber = contactNumber;
            this.consentToShare = consentToShare;
            this.dob = dob;
            this.age = age;
            
    }

}