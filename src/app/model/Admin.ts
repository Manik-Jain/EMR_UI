export class Admin{
    first_name : string;
    last_name: string;
    dob: string;
    email: string;
    id: string;
    status : string;

    constructor(first_name  : string, 
        last_name: string,
        dob: string,
        email: string,
        id: string,
        status : string) {

            this.first_name = first_name;
            this.last_name = last_name;
            this.dob = dob;
            this.email = email;
            this.id = id;
            this.status = status;

    }
}