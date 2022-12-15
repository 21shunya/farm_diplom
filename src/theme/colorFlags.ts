import activeIcon from '../assets/icons/check.svg';
import inactiveIcon from '../assets/icons/delete.svg';
import courierIcon from '../assets/icons/courier.svg';
import adminIcon from '../assets/icons/admin.svg';

export const colorFlags = {
  status: {
    width: 118,
    active: {
      bg: '#CBFCD0',
      icon: activeIcon,
    },
    inactive: {
      bg: '#FEC6C6',
      icon: inactiveIcon,
    },
  },
  role: {
    width: 98,
    Courier: {
      bg: '#EFDDFA',
      icon: courierIcon,
    },
    Admin: {
      bg: '#FCF1B5',
      icon: adminIcon,
    },
    SAdmin: {
      bg: '#FCF1B5',
      icon: adminIcon,
    },
  },
};
