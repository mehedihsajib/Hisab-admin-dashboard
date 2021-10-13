import { v4 as uuidv4 } from 'uuid';
import avatar1 from '../images/avatar.png';

const activeUsers = [
    {
        id: uuidv4(),
        avatar: avatar1,
        name: 'John Doe',
        title: 'Software Engineer',
    },

    {
        id: uuidv4(),
        avatar: avatar1,
        name: 'John Smith',
        title: 'Software Engineer',
    },

    {
        id: uuidv4(),
        avatar: avatar1,
        name: 'Angel Priya',
        title: 'Tiktoker',
    },

    {
        id: uuidv4(),
        avatar: avatar1,
        name: 'Md Rony',
        title: 'Digital Marketer',
    },

    {
        id: uuidv4(),
        avatar: avatar1,
        name: 'Angel Riya',
        title: 'Tikoker',
    },
];

export default activeUsers;
