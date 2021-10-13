import { v4 as uuidv4 } from 'uuid';
import avatar1 from '../images/avatar.png';

const transactionData = [
    {
        id: uuidv4(),
        avatar: avatar1,
        name: 'John Doe',
        date: '1 Jan 2021',
        amount: '$122.00',
        status: 'Approved',
    },

    {
        id: uuidv4(),
        avatar: avatar1,
        name: 'Angel Priya',
        date: '2 Jan 2021',
        amount: '$232.00',
        status: 'Declined',
    },

    {
        id: uuidv4(),
        avatar: avatar1,
        name: 'John Smith',
        date: '3 Jan 2021',
        amount: '$252.00',
        status: 'Pending',
    },

    {
        id: uuidv4(),
        avatar: avatar1,
        name: 'Angel Jorina',
        date: '5 Jan 2021',
        amount: '$352.00',
        status: 'Approved',
    },

    {
        id: uuidv4(),
        avatar: avatar1,
        name: 'Angel Priya',
        date: '2 Jan 2021',
        amount: '$232.00',
        status: 'Declined',
    },
];

export default transactionData;
