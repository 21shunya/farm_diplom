import { pxToRem } from '../utils/Converting';

export const textTypes = {
  header1: { font_weight: 700, font_size: 30 },
  header2: { font_weight: 700, font_size: 22 },
  label: { font_weight: 700, font_size: 14 },
  inputMedium: { font_weight: 500, font_size: 18 },
  caption: { font_weight: 500, font_size: 12 },
  tabsBold: { font_weight: 700, font_size: 18 },
  tabsExtraBold: { font_weight: 900, font_size: 18 },
  textBold: { font_weight: 700, font_size: 16 },
  textRegular: { font_weight: 400, font_size: 16 },
  numbers: { font_weight: 700, font_size: 22 },
};

export const getTypography = (key: keyof typeof textTypes): string => {
  const style = textTypes[key];

  return `
    font-family: 'Mulish';
    font-style: normal;
    font-weight: ${style.font_weight};
    font-size: ${pxToRem(style.font_size)}rem;
    line-height: 20px;`;
};
