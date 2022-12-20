import { AppDispatch } from '../../store';
import { setTitle } from './CrumbSlice';

const path = 'path';

export const setNewLocation = (location: string) => (dispatch: AppDispatch) => {
  const oldPath = localStorage.getItem(path);
  if (oldPath === null) {
    localStorage.setItem(path, location);
  } else if (!oldPath.includes(location)) {
    localStorage.setItem(path, `${oldPath} • ${location}`);
  }
  dispatch(setTitle(location));
};

export const returnLocation = () => {
  localStorage.removeItem(path);
};
