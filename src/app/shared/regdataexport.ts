

export class RegUser {
    constructor(
        public email: string,
        public password: string,
        public name: string,
        public gender: string,
        public dob: Date,
        public address: string,
        public country: string,
        public phone: string,
    ) {

    }
}
