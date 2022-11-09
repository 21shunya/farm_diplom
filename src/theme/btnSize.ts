import { pxToEm } from '../utils/Converting';

export const btnSize = {
  small: {
    padding: `0 ${pxToEm(24, 16)}em`,
    height: `${pxToEm(32, 16)}em`,
  },
  medium: {
    padding: `0 ${pxToEm(38, 16)}em`,
    height: `${pxToEm(42, 16)}em`,
  },
  large: {
    padding: `0 ${pxToEm(46, 16)}em`,
    height: `${pxToEm(48, 16)}em`,
  },
};
