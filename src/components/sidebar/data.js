import { FiSun, FiUser, FiHome } from 'react-icons/fi';
import { FaRegCalendarAlt as CalendarIcon } from 'react-icons/fa';

export const sidebarData = [
  {
    id: 1,
    title: 'Home',
    Icon: FiHome,
    path: '/home',
    color: '#fa877f',
  },
  {
    id: 2,
    title: 'Today',
    Icon: FiSun,
    path: '/home/today',
    color: '#f8fa7f',
  },
  {
    id: 3,
    title: 'Calendar',
    Icon: CalendarIcon,
    path: '/home/Calendar',
    color: '#7ffafa',
  },
  {
    id: 4,
    title: 'Assigned',
    Icon: FiUser,
    path: '/home/assigned',
    color: '#9cfa7f',
  },
];
