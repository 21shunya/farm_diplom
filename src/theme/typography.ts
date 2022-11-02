export const types = {
  header1: { font_weight: 700, font_size: '30px' },
  header2: { font_weight: 700, font_size: '22px' },
  label: { font_weight: 700, font_size: '14px' },
  inputMedium: { font_weight: 500, font_size: '18px' },
  caption: { font_weight: 500, font_size: '12px' },
  tabsBold: { font_weight: 700, font_size: '18px' },
  tabsExtraBold: { font_weight: 900, font_size: '18px' },
  textBold: { font_weight: 700, font_size: '16px' },
  textRegular: { font_weight: 400, font_size: '16px' },
};

export const getTypography = (key: keyof typeof types): string => {
  const style = types[key];

  return `
    font-family: 'Mulish';
    font-style: normal;
    font-weight: ${style.font_weight};
    font-size: ${style.font_size};
    line-height: 20px;`;
};
