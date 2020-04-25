import { uuid } from 'uuidv4';

class Appointments {
    id: string;

    provider: string;

    date: Date;

    constructor({ provider, date }: Omit<Appointments, 'id'>) {
        this.id = uuid();
        this.provider = provider;
        this.date = date;
    }
}

export default Appointments;
