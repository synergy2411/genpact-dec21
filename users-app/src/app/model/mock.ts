import { IUser } from './user.model';

export const USER_DATA: Array<IUser> = [
  {
    id : 101,
    firstName: 'bill',
    lastName: 'gates',
    dob: new Date('Jan 1, 1965'),
    income: 50000,
    isWorking: true,
    company: 'Microsoft',
    image: './assets/images/bill.jpg',
    votes: 120,
  },
  {
    id : 102,
    firstName: 'steve',
    lastName: 'jobs',
    dob: new Date('Dec 10, 1965'),
    income: 0,
    isWorking: false,
    company: 'Apple',
    image: './assets/images/steve.jpg',
    votes: 180,
  },
  {
    id : 103,
    firstName: 'tim b.',
    lastName: 'lee',
    dob: new Date('Aug 21, 1965'),
    income: 30000,
    isWorking: true,
    company: 'World Wide Web',
    image: './assets/images/tim.jpg',
    votes: 140,
  },
];
