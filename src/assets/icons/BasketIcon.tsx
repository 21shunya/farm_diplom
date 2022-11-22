import React from 'react';
import { colors } from '../../theme/colors';

interface IIcon {
  color?: string;
}

const BasketIcon: React.FC<IIcon> = ({ color }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.37704 3.25264C9.32812 3.18672 9.26668 3.13108 9.19625 3.0889H9.195C9.12458 3.0467 9.04654 3.01879 8.96533 3.00675C8.88412 2.99472 8.80134 2.9988 8.72171 3.01877C8.64208 3.03873 8.56716 3.07419 8.50124 3.12311C8.43532 3.17204 8.37968 3.23347 8.3375 3.3039L4.77125 9.25015H2.625C2.45924 9.25015 2.30027 9.316 2.18306 9.43321C2.06585 9.55042 2 9.70939 2 9.87515V11.1252C2 11.2909 2.06585 11.4499 2.18306 11.5671C2.30027 11.6843 2.45924 11.7502 2.625 11.7502H3.40375L5.71 19.8202C5.76601 20.0162 5.88442 20.1887 6.04729 20.3114C6.21015 20.4341 6.40858 20.5004 6.6125 20.5002H17.3888C17.5927 20.5004 17.7911 20.4341 17.954 20.3114C18.1168 20.1887 18.2352 20.0162 18.2913 19.8202L20.5963 11.7502H21.375C21.5408 11.7502 21.6997 11.6843 21.8169 11.5671C21.9342 11.4499 22 11.2909 22 11.1252V9.87515C22 9.70939 21.9342 9.55042 21.8169 9.43321C21.6997 9.316 21.5408 9.25015 21.375 9.25015H19.2288L15.66 3.3039C15.5748 3.16168 15.4366 3.05913 15.2758 3.01881C15.115 2.97849 14.9447 3.0037 14.8025 3.0889C14.6603 3.17411 14.5577 3.31231 14.5174 3.47313C14.4771 3.63394 14.5023 3.80418 14.5875 3.9464L17.7712 9.25015H6.22875L9.41125 3.9464C9.45345 3.87599 9.48137 3.79795 9.4934 3.71674C9.50544 3.63553 9.50135 3.55275 9.48139 3.47312C9.46142 3.39348 9.42597 3.31857 9.37704 3.25264ZM7.36612 13.3666C7.1317 13.601 7 13.919 7 14.2505V16.7505C7 17.082 7.1317 17.4 7.36612 17.6344C7.60054 17.8688 7.91848 18.0005 8.25 18.0005C8.58152 18.0005 8.89946 17.8688 9.13388 17.6344C9.3683 17.4 9.5 17.082 9.5 16.7505V14.2505C9.5 13.919 9.3683 13.601 9.13388 13.3666C8.89946 13.1322 8.58152 13.0005 8.25 13.0005C7.91848 13.0005 7.60054 13.1322 7.36612 13.3666ZM11.1161 13.3666C10.8817 13.601 10.75 13.919 10.75 14.2505V16.7505C10.75 17.082 10.8817 17.4 11.1161 17.6344C11.3505 17.8688 11.6685 18.0005 12 18.0005C12.3315 18.0005 12.6495 17.8688 12.8839 17.6344C13.1183 17.4 13.25 17.082 13.25 16.7505V14.2505C13.25 13.919 13.1183 13.601 12.8839 13.3666C12.6495 13.1322 12.3315 13.0005 12 13.0005C11.6685 13.0005 11.3505 13.1322 11.1161 13.3666ZM14.8661 13.3666C14.6317 13.601 14.5 13.919 14.5 14.2505V16.7505C14.5 17.082 14.6317 17.4 14.8661 17.6344C15.1005 17.8688 15.4185 18.0005 15.75 18.0005C16.0815 18.0005 16.3995 17.8688 16.6339 17.6344C16.8683 17.4 17 17.082 17 16.7505V14.2505C17 13.919 16.8683 13.601 16.6339 13.3666C16.3995 13.1322 16.0815 13.0005 15.75 13.0005C15.4185 13.0005 15.1005 13.1322 14.8661 13.3666Z"
        fill={color || colors.dark_grey}
      />
    </svg>
  );
};

export default BasketIcon;
