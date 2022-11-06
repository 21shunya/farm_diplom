import activeIcon from '../assets/icons/check.svg';
import inactiveIcon from '../assets/icons/delete.svg';
import courierIcon from '../assets/icons/courier.svg';
import adminIcon from '../assets/icons/admin.svg';

export const colorFlags = {
  status: {
    width: 150,
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
    width: 130,
    courier: {
      bg: '#EFDDFA',
      icon: courierIcon,
    },
    admin: {
      bg: '#FCF1B5',
      icon: adminIcon,
    },
  },
};
