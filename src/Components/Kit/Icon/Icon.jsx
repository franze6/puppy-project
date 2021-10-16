import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Icon = memo(({ name, className }) => {
  switch (name) {
    case 'clear':
      return (
        <svg
          className={className}
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.88196 6.0004L11.1498 1.73255C11.3938 1.48851 11.3938 1.09406 11.1498 0.850021C10.9058 0.605983 10.5107 0.605983 10.2673 0.850021L5.99943 5.11787L1.73157 0.850021C1.48754 0.605983 1.09308 0.605983 0.849044 0.850021C0.605006 1.09406 0.605006 1.48851 0.849044 1.73255L5.1169 6.0004L0.849044 10.2683C0.605006 10.5123 0.605006 10.9067 0.849044 11.1508C0.970751 11.2725 1.13053 11.3337 1.29031 11.3337C1.45009 11.3337 1.60987 11.2725 1.73157 11.1508L5.99943 6.88293L10.2673 11.1508C10.389 11.2725 10.5488 11.3337 10.7085 11.3337C10.8683 11.3337 11.0281 11.2725 11.1498 11.1508C11.3938 10.9067 11.3938 10.5123 11.1498 10.2683L6.88196 6.0004Z"
            fill="#2F3441"
          />
        </svg>
      );
    case 'union': {
      return (
        <svg
          className={className}
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 7C0 3.13 3.13 0 7 0C10.87 0 14 3.13 14 7C14 8.76212 13.3511 10.3708 12.2789 11.6005L15.7802 15.111C16.0337 15.3652 16.0332 15.7767 15.779 16.0302C15.5248 16.2837 15.1133 16.2832 14.8598 16.029L11.3373 12.4973C10.1453 13.4386 8.639 14 7 14C3.13 14 0 10.87 0 7ZM12.7 7C12.7 3.86 10.14 1.3 7 1.3C3.86 1.3 1.3 3.86 1.3 7C1.3 10.14 3.86 12.7 7 12.7C10.14 12.7 12.7 10.14 12.7 7Z"
            fill="#7B7E86"
          />
        </svg>
      );
    }
    case 'search': {
      return (
        <svg
          className={className}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.4097 14.8822C11.7399 16.1799 9.63851 16.7922 7.53338 16.5942C5.42824 16.3963 3.47766 15.403 2.07881 13.8166C0.679961 12.2303 -0.0619809 10.1701 0.00405863 8.05565C0.0700982 5.94118 0.939153 3.9314 2.43427 2.43552C3.92939 0.939633 5.93814 0.0701341 8.05152 0.00406071C10.1649 -0.0620127 12.224 0.680308 13.8096 2.07987C15.3951 3.47944 16.3879 5.43102 16.5857 7.53723C16.7836 9.64345 16.1717 11.7459 14.8745 13.4166L19.6936 18.2201C20.1016 18.6267 20.1022 19.2872 19.695 19.6946C19.2878 20.1021 18.6273 20.1017 18.2204 19.6939L13.4201 14.8822H13.4097ZM8.31916 14.5495C9.13773 14.5495 9.94829 14.3882 10.7045 14.0748C11.4608 13.7614 12.148 13.302 12.7268 12.7229C13.3056 12.1438 13.7647 11.4563 14.078 10.6996C14.3913 9.94298 14.5525 9.13201 14.5525 8.31302C14.5525 7.49403 14.3913 6.68306 14.078 5.92641C13.7647 5.16976 13.3056 4.48225 12.7268 3.90314C12.148 3.32402 11.4608 2.86465 10.7045 2.55123C9.94829 2.23782 9.13773 2.07651 8.31916 2.07651C6.66598 2.07651 5.08051 2.73356 3.91153 3.90314C2.74256 5.07271 2.08583 6.659 2.08583 8.31302C2.08583 9.96705 2.74256 11.5533 3.91153 12.7229C5.08051 13.8925 6.66598 14.5495 8.31916 14.5495Z"
            fill="#6F809E"
          />
        </svg>
      );
    }
    case 'edit': {
      return (
        <svg
          className={className}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.6342 0.605251C17.8284 -0.20175 16.5149 -0.20175 15.7091 0.605251L15.2852 1.02211L19.0162 4.75249L19.3668 4.39976C19.775 3.99359 20 3.4538 20 2.87127C20 2.28873 19.775 1.74895 19.3721 1.34278L18.6342 0.605251Z"
            fill="#7D90B2"
          />
          <path d="M13.4118 2.88729L17.1428 6.61765L18.2679 5.50068L14.5369 1.77032L13.4118 2.88729Z" fill="#7D90B2" />
          <path
            d="M1.76871 14.4899L0 20L5.5102 18.2043L16.3946 7.36589L12.6635 3.63551L1.76871 14.4899Z"
            fill="#7D90B2"
          />
        </svg>
      );
    }
    case 'saved': {
      return (
        <svg
          className={className}
          width="20"
          height="20"
          viewBox="3 3 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V7L17 3ZM19 19H5V5H16.17L19 7.83V19ZM12 12C10.34 12 9 13.34 9 15C9 16.66 10.34 18 12 18C13.66 18 15 16.66 15 15C15 13.34 13.66 12 12 12ZM6 6H15V10H6V6Z"
            fill="black"
          />
        </svg>
      );
    }
    case 'delete': {
      return (
        <svg
          className={className}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.1872 1.47368H12.9091V1.43158C12.9091 0.631579 12.2674 0 11.4545 0H8.54545C7.73262 0 7.09091 0.631579 7.09091 1.43158V1.47368H2.81283C2.36364 1.47368 2 1.83158 2 2.27368V3.07368C2 3.51579 2.36364 3.87368 2.81283 3.87368H17.1872C17.6364 3.87368 18 3.51579 18 3.07368V2.27368C18 1.83158 17.6364 1.47368 17.1872 1.47368Z"
            fill="#7D90B2"
          />
          <path
            d="M16.1177 4.96841H3.88238C3.64708 4.96841 3.47596 5.15789 3.49735 5.38947L4.09628 17.5789C4.16045 18.9263 5.29414 20 6.66313 20H13.3155C14.6845 20 15.8182 18.9474 15.8824 17.5789L16.4813 5.38947C16.5241 5.17894 16.3316 4.96841 16.1177 4.96841ZM8.67382 16.7368C8.67382 17.1158 8.37435 17.4105 7.98933 17.4105C7.6043 17.4105 7.30484 17.1158 7.30484 16.7368V8.25262C7.30484 7.87368 7.6043 7.57894 7.98933 7.57894C8.37435 7.57894 8.67382 7.87368 8.67382 8.25262V16.7368ZM12.6952 16.7368C12.6952 17.1158 12.3957 17.4105 12.0107 17.4105C11.6257 17.4105 11.3262 17.1158 11.3262 16.7368V8.25262C11.3262 7.87368 11.6257 7.57894 12.0107 7.57894C12.3957 7.57894 12.6952 7.87368 12.6952 8.25262V16.7368Z"
            fill="#7D90B2"
          />
        </svg>
      );
    }
    case 'plus': {
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <path
            d="M11 9H15V11H11V15H9V11H5V9H9V5H11V9ZM10 20C7.34784 20 4.8043 18.9464 2.92893 17.0711C1.05357 15.1957 0 12.6522 0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10C20 12.6522 18.9464 15.1957 17.0711 17.0711C15.1957 18.9464 12.6522 20 10 20ZM10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18Z"
            fill="white"
          />
        </svg>
      );
    }
    case 'right': {
      return (
        <svg
          width="6"
          height="10"
          viewBox="0 0 6 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <path
            d="M0.200293 1.10636C-0.428118 0.51287 0.566865 -0.426818 1.19528 0.216126L5.80362 4.51891C6.06546 4.7662 6.06546 5.21131 5.80362 5.4586L1.19528 9.81084C0.566865 10.4043 -0.428118 9.46464 0.200293 8.87115L4.28496 5.01348L0.200293 1.10636Z"
            fill="#606F89"
          />
        </svg>
      );
    }
    case 'left': {
      return (
        <svg
          width="6"
          height="10"
          viewBox="0 0 6 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <path
            d="M5.79971 1.10636C6.42812 0.51287 5.43313 -0.426818 4.80472 0.216126L0.196378 4.51891C-0.0654595 4.7662 -0.0654595 5.21131 0.196378 5.4586L4.80472 9.81084C5.43313 10.4043 6.42812 9.46464 5.79971 8.87115L1.71504 5.01348L5.79971 1.10636Z"
            fill="#606F89"
          />
        </svg>
      );
    }
    case 'home': {
      return (
        <svg
          className={className}
          width="30"
          height="28"
          viewBox="0 0 30 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.6965 25.4394V17.3144H18.1965V25.4394C18.1965 26.3331 18.9278 27.0644 19.8215 27.0644H24.6965C25.5903 27.0644 26.3215 26.3331 26.3215 25.4394V14.0644H29.084C29.8315 14.0644 30.189 13.1381 29.6203 12.6506L16.0353 0.414375C15.4178 -0.138125 14.4753 -0.138125 13.8578 0.414375L0.272759 12.6506C-0.279741 13.1381 0.0615093 14.0644 0.809009 14.0644H3.57151V25.4394C3.57151 26.3331 4.30276 27.0644 5.19651 27.0644H10.0715C10.9653 27.0644 11.6965 26.3331 11.6965 25.4394Z"
            fill="black"
            fillOpacity="0.5"
          />
        </svg>
      );
    }
    case 'persons': {
      return (
        <svg
          className={className}
          width="30"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 22C4 19.8783 4.84285 17.8434 6.34315 16.3431C7.84344 14.8429 9.87827 14 12 14C14.1217 14 16.1566 14.8429 17.6569 16.3431C19.1571 17.8434 20 19.8783 20 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13Z"
            fill="#7b7c7b"
          />
        </svg>
      );
    }
    case 'logo': {
      return (
        <svg
          className={className}
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M118.191 74.5143C110.178 106.657 77.6222 126.219 45.4752 118.204C13.3417 110.19 -6.22004 77.6324 1.79691 45.4918C9.80683 13.3451 42.3626 -6.21803 74.4997 1.79541C106.644 9.80884 126.205 42.3702 118.191 74.5149L118.191 74.5143H118.191Z"
            fill="#d1e2d1"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M67.5924 66.8022C67.1681 66.834 64.9761 66.9648 60.0866 66.9648C56.1976 66.9648 53.4364 66.8482 52.4677 66.8022C37.4385 66.1411 26.2205 63.5248 26.2205 60.3924C26.2205 57.26 37.4385 54.6473 52.4677 53.9756V64.1966C53.4506 64.2673 56.2648 64.4335 60.1538 64.4335C64.8206 64.4335 67.1575 64.239 67.5782 64.2001V53.9827C82.5756 54.6509 93.7689 57.2671 93.7689 60.3924C93.7689 63.5178 82.5792 66.134 67.5782 66.7987L67.5924 66.8022ZM67.5924 52.9256V43.7793H88.5223V29.832H31.5378V43.7793H52.4642V52.922C35.4551 53.7034 22.6638 57.0726 22.6638 61.1101C22.6638 65.1476 35.4551 68.5134 52.4642 69.2982V98.6071H67.5888V69.2876C84.559 68.5063 97.3291 65.1405 97.3291 61.1066C97.3291 57.0726 84.5696 53.7069 67.5888 52.922L67.5924 52.9256Z"
            fill="white"
          />
        </svg>
      );
    }
    case 'calendar': {
      return (
        <svg
          width="30px"
          height="30px"
          viewBox="0 0 30 30"
          id="_04_-_Calendar"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <path
            id="Path_219"
            d="M31,7.8a4,4,0,0,0-4-4H5a4,4,0,0,0-4,4V27a4,4,0,0,0,4,4H27a4,4,0,0,0,4-4V7.8Zm-2,0V27a2,2,0,0,1-2,2H5a2,2,0,0,1-2-2V7.8a2,2,0,0,1,2-2H27a2,2,0,0,1,2,2Z"
            transform="translate(-1 -1)"
            fillRule="evenodd"
          />
          <path
            id="Path_220"
            d="M8,2V7.6a1,1,0,1,0,2,0V2A1,1,0,0,0,8,2Z"
            transform="translate(-1 -1)"
            fillRule="evenodd"
          />
          <path id="Path_221" d="M2,14.2H30v-2H2Z" transform="translate(-1 -1)" fillRule="evenodd" />
          <path
            id="Path_222"
            d="M22,2V7.6a1,1,0,1,0,2,0V2a1,1,0,0,0-2,0Z"
            transform="translate(-1 -1)"
            fillRule="evenodd"
          />
          <circle id="Ellipse_2" cx="1.505" cy="1.505" r="1.505" transform="translate(5.795 15.595)" />
          <circle id="Ellipse_3" cx="1.505" cy="1.505" r="1.505" transform="translate(13.495 15.595)" />
          <circle id="Ellipse_4" cx="1.505" cy="1.505" r="1.505" transform="translate(21.195 15.595)" />
          <circle id="Ellipse_5" cx="1.505" cy="1.505" r="1.505" transform="translate(21.195 22.486)" />
          <circle id="Ellipse_6" cx="1.505" cy="1.505" r="1.505" transform="translate(13.495 22.486)" />
          <circle id="Ellipse_7" cx="1.505" cy="1.505" r="1.505" transform="translate(5.795 22.486)" />
        </svg>
      );
    }
    case 'mail': {
      return (
        <svg width="25" height="25" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z"
            fill="#ee7858"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.8 17.1754C12.8 17.1754 22.4595 22.653 24.3344 22.653C26.2995 22.653 35.8544 17.28 35.8544 17.28L35.8698 16.32C35.8698 15.2602 35.0096 14.4 33.9469 14.4H14.7219C13.6602 14.4 12.8 15.2602 12.8 16.32V17.1754ZM35.8544 20.16C35.8544 20.16 26.3898 25.293 24.3344 25.293C22.4595 25.293 12.8144 20.16 12.8154 20.16L12.8 31.68C12.8 32.7399 13.6611 33.6 14.7219 33.6H33.9469C35.0096 33.6 35.8698 32.7399 35.8698 31.68L35.8544 20.16Z"
            fill="white"
          />
        </svg>
      );
    }
    case 'phone': {
      return (
        <svg width="25" height="25" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
            fill="#ee7858"
          />
          <path
            d="M16.9714 12.049C17.2629 12.0245 17.5127 12.0955 17.6743 12.3625C18.0368 12.9502 18.4017 13.538 18.747 14.1404C19.1462 14.836 19.5135 15.5511 19.9054 16.2539C20.0058 16.4425 20.1454 16.614 20.2629 16.7952C20.3707 16.9666 20.4735 17.1429 20.5739 17.3144C20.7797 17.7038 20.7699 18.0956 20.4637 18.4066C20.0278 18.8524 19.5478 19.2662 19.0849 19.6899C18.698 20.045 18.2964 20.3854 17.9192 20.7479C17.6253 21.032 17.5494 21.3871 17.7478 21.7618C18.0539 22.3349 18.3576 22.9079 18.6931 23.4688C19.9372 25.5431 21.5266 27.3064 23.5348 28.6656C24.3087 29.1921 25.1144 29.6746 25.9275 30.135C26.694 30.5685 26.9928 30.495 27.5879 29.8313C28.1414 29.2166 28.6753 28.5921 29.2263 27.9725C29.3586 27.8231 29.5178 27.6909 29.6721 27.5635C29.9855 27.299 30.3284 27.2696 30.6884 27.4509C30.7888 27.4999 30.8966 27.5439 30.9847 27.6076C31.9398 28.2909 33.0076 28.7733 34.0166 29.3538C34.5579 29.6648 35.0844 29.9979 35.6158 30.3162C35.9024 30.4852 36.0175 30.7326 35.9979 31.073C35.944 32.0305 35.7848 32.971 35.2289 33.7791C34.9962 34.1147 34.6656 34.4085 34.3325 34.6461C33.4093 35.2926 32.3782 35.6918 31.2811 35.9367C30.2843 36.1596 29.29 36.0788 28.3349 35.78C26.4908 35.2118 24.6736 34.5604 23.0009 33.5734C21.4825 32.6746 20.1013 31.5897 18.8229 30.3775C17.2041 28.837 15.7592 27.157 14.591 25.2443C13.8293 24.0027 13.2857 22.6655 12.7934 21.3014C12.4946 20.4785 12.2007 19.663 12.0685 18.7911C11.9167 17.8042 12.022 16.854 12.3379 15.9184C12.622 15.0735 12.9771 14.2653 13.5134 13.5429C13.9346 12.9821 14.4612 12.5706 15.142 12.3869C15.6881 12.2425 16.2392 12.1273 16.7878 12C16.8588 12.0563 16.9151 12.0563 16.9714 12.049Z"
            fill="white"
          />
        </svg>
      );
    }
    case 'whatsApp': {
      return (
        <svg width="25" height="25" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z"
            fill="#25D366"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24.7911 37.3526H24.7852C22.3967 37.3517 20.0498 36.7525 17.9653 35.6155L10.4 37.6L12.4246 30.2049C11.1757 28.0406 10.5186 25.5855 10.5196 23.0703C10.5228 15.2017 16.9248 8.80005 24.7909 8.80005C28.6086 8.8017 32.1918 10.2879 34.8862 12.9855C37.5806 15.6829 39.0636 19.2684 39.0621 23.0816C39.059 30.9483 32.6595 37.3494 24.7911 37.3526ZM18.3159 33.0319L18.749 33.289C20.5702 34.3697 22.6578 34.9416 24.7863 34.9424H24.7911C31.3288 34.9424 36.6499 29.6212 36.6525 23.0807C36.6538 19.9113 35.4212 16.9311 33.1817 14.689C30.9422 12.4469 27.964 11.2116 24.7957 11.2105C18.2529 11.2105 12.9318 16.5312 12.9292 23.0711C12.9283 25.3124 13.5554 27.4952 14.7427 29.3837L15.0248 29.8325L13.8265 34.2096L18.3159 33.0319ZM31.4924 26.1541C31.7411 26.2743 31.9091 26.3555 31.9808 26.4752C32.0699 26.6239 32.0699 27.3378 31.7729 28.1709C31.4756 29.0038 30.051 29.764 29.3659 29.8664C28.7516 29.9582 27.9741 29.9965 27.1199 29.7251C26.602 29.5608 25.9379 29.3414 25.0871 28.9739C21.7442 27.5305 19.485 24.2904 19.058 23.6781C19.0281 23.6352 19.0072 23.6052 18.9955 23.5896L18.9927 23.5858C18.804 23.334 17.5395 21.6469 17.5395 19.9008C17.5395 18.2583 18.3463 17.3974 18.7177 17.0011C18.7432 16.9739 18.7666 16.9489 18.7875 16.9261C19.1144 16.5691 19.5007 16.4798 19.7384 16.4798C19.9761 16.4798 20.2141 16.482 20.4219 16.4924C20.4475 16.4937 20.4742 16.4936 20.5017 16.4934C20.7095 16.4922 20.9686 16.4907 21.2242 17.1046C21.3225 17.3408 21.4664 17.6911 21.6181 18.0605C21.9249 18.8075 22.264 19.6328 22.3236 19.7523C22.4128 19.9308 22.4722 20.1389 22.3533 20.377C22.3355 20.4127 22.319 20.4464 22.3032 20.4786C22.2139 20.6608 22.1483 20.7949 21.9967 20.9718C21.9372 21.0414 21.8756 21.1164 21.814 21.1914C21.6913 21.3408 21.5687 21.4902 21.4619 21.5966C21.2833 21.7744 21.0975 21.9673 21.3055 22.3243C21.5135 22.6813 22.2292 23.849 23.2892 24.7945C24.4288 25.8109 25.4192 26.2405 25.9212 26.4583C26.0192 26.5008 26.0986 26.5353 26.1569 26.5644C26.5133 26.743 26.7213 26.7131 26.9294 26.4752C27.1374 26.2372 27.8208 25.4339 28.0584 25.077C28.2961 24.7201 28.5339 24.7796 28.8607 24.8985C29.1877 25.0176 30.9408 25.8802 31.2974 26.0586C31.367 26.0935 31.4321 26.125 31.4924 26.1541Z"
            fill="#FDFDFD"
          />
        </svg>
      );
    }
    case 'telegram': {
      return (
        <svg width="25" height="25" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z"
            fill="url(#paint0_linear)"
          />
          <path d="M19.6 35C18.8225 35 18.9546 34.7064 18.6864 33.9661L16.4 26.4412L34 16" fill="#C8DAEA" />
          <path d="M19.6 34.9999C20.2 34.9999 20.4651 34.7255 20.8 34.3999L24 31.2883L20.0084 28.8813" fill="#A9C9DD" />
          <path
            d="M20.008 28.882L29.68 36.0278C30.7837 36.6368 31.5803 36.3215 31.8552 35.0031L35.7922 16.4505C36.1953 14.8344 35.1762 14.1015 34.1203 14.5808L11.0023 23.495C9.4243 24.128 9.4335 25.0084 10.7147 25.4006L16.6473 27.2523L30.3819 18.5873C31.0303 18.1941 31.6253 18.4055 31.1369 18.839"
            fill="url(#paint1_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="18.0024"
              y1="2.0016"
              x2="6.0024"
              y2="30"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#37AEE2" />
              <stop offset="1" stopColor="#1E96C8" />
            </linearGradient>
            <linearGradient
              id="paint1_linear"
              x1="20.9956"
              y1="25.4742"
              x2="23.56"
              y2="33.7692"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#EFF7FC" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
          </defs>
        </svg>
      );
    }
    case 'cake': {
      return (
        <svg
          className={className}
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          x="0"
          y="0"
          enableBackground="new 0 0 80 80"
          version="1.1"
          viewBox="0 0 80 80"
          xmlSpace="preserve"
        >
          <path fill="#8BB7F0" d="M34.5 43.5V26c0-1.93 1.57-3.5 3.5-3.5h4c1.93 0 3.5 1.57 3.5 3.5v17.5h-11z"></path>
          <path
            fill="#4E7AB5"
            d="M42 23c1.654 0 3 1.346 3 3v17H35V26c0-1.654 1.346-3 3-3h4m0-1h-4a4 4 0 00-4 4v18h12V26a4 4 0 00-4-4z"
          ></path>
          <path fill="#FFC49C" d="M8.5 51.5H71.5V69.5H8.5z"></path>
          <path fill="#A16A4A" d="M71 52v17H9V52h62m1-1H8v19h64V51z"></path>
          <path fill="#C2E8FF" d="M10 77.5c-4.136 0-7.5-3.364-7.5-7.5v-1.5h75V70c0 4.136-3.364 7.5-7.5 7.5H10z"></path>
          <path
            fill="#7496C4"
            d="M77 69v1c0 3.86-3.14 7-7 7H10c-3.86 0-7-3.14-7-7v-1h74m1-1H2v2a8 8 0 008 8h60a8 8 0 008-8v-2z"
          ></path>
          <path
            fill="#F78F8F"
            d="M40 19.5a5.506 5.506 0 01-5.5-5.5c0-2.386 3.651-8.342 5.5-11.109 1.849 2.768 5.5 8.724 5.5 11.109 0 3.033-2.467 5.5-5.5 5.5z"
          ></path>
          <path
            fill="#C74343"
            d="M40 3.795c2.204 3.367 5 8.279 5 10.205 0 2.757-2.243 5-5 5s-5-2.243-5-5c0-1.925 2.796-6.837 5-10.205M40 2s-6 8.7-6 12 2.7 6 6 6 6-2.7 6-6-6-12-6-12z"
          ></path>
          <path
            fill="#FFCFCF"
            d="M42.5 16.5c0-1.375-2.5-5-2.5-5s-2.5 3.625-2.5 5S38.625 19 40 19s2.5-1.125 2.5-2.5z"
          ></path>
          <path fill="#8BB7F0" d="M52.5 43.5V26c0-1.93 1.57-3.5 3.5-3.5h4c1.93 0 3.5 1.57 3.5 3.5v17.5h-11z"></path>
          <path
            fill="#4E7AB5"
            d="M60 23c1.654 0 3 1.346 3 3v17H53V26c0-1.654 1.346-3 3-3h4m0-1h-4a4 4 0 00-4 4v18h12V26a4 4 0 00-4-4z"
          ></path>
          <path
            fill="#F78F8F"
            d="M58 19.5a5.506 5.506 0 01-5.5-5.5c0-2.386 3.651-8.342 5.5-11.109 1.849 2.768 5.5 8.724 5.5 11.109 0 3.033-2.467 5.5-5.5 5.5z"
          ></path>
          <path
            fill="#C74343"
            d="M58 3.795c2.204 3.367 5 8.279 5 10.205 0 2.757-2.243 5-5 5s-5-2.243-5-5c0-1.925 2.796-6.837 5-10.205M58 2s-6 8.7-6 12 2.7 6 6 6 6-2.7 6-6-6-12-6-12z"
          ></path>
          <g>
            <path fill="#8BB7F0" d="M16.5 43.5V26c0-1.93 1.57-3.5 3.5-3.5h4c1.93 0 3.5 1.57 3.5 3.5v17.5h-11z"></path>
            <path
              fill="#4E7AB5"
              d="M24 23c1.654 0 3 1.346 3 3v17H17V26c0-1.654 1.346-3 3-3h4m0-1h-4a4 4 0 00-4 4v18h12V26a4 4 0 00-4-4z"
            ></path>
          </g>
          <g>
            <path
              fill="#F78F8F"
              d="M22 19.5a5.506 5.506 0 01-5.5-5.5c0-2.386 3.651-8.342 5.5-11.109 1.849 2.768 5.5 8.724 5.5 11.109 0 3.033-2.467 5.5-5.5 5.5z"
            ></path>
            <path
              fill="#C74343"
              d="M22 3.795c2.204 3.367 5 8.279 5 10.205 0 2.757-2.243 5-5 5s-5-2.243-5-5c0-1.925 2.796-6.837 5-10.205M22 2s-6 8.7-6 12 2.7 6 6 6 6-2.7 6-6-6-12-6-12z"
            ></path>
          </g>
          <g>
            <path
              fill="#FFEEA3"
              d="M40 60.5c-5.787 0-9.887-3.228-12.308-5.936l-.37-.415-.373.412C24.584 57.175 21.91 58.5 19 58.5c-6.451 0-10.055-6.731-10.5-7.616V49c0-3.033 2.467-5.5 5.5-5.5h52c3.033 0 5.5 2.467 5.5 5.5v1.884c-.445.885-4.049 7.616-10.5 7.616-2.91 0-5.584-1.325-7.949-3.938l-.373-.412-.37.415C49.887 57.272 45.787 60.5 40 60.5z"
            ></path>
            <path
              fill="#BA9B48"
              d="M66 44c2.757 0 5 2.243 5 5v1.764C70.401 51.916 66.953 58 61 58c-2.763 0-5.313-1.269-7.578-3.773l-.746-.825-.741.829C49.582 56.863 45.602 60 40 60s-9.582-3.137-11.935-5.769l-.741-.829-.746.825C24.313 56.731 21.763 58 19 58c-5.955 0-9.403-6.087-10-7.236V49c0-2.757 2.243-5 5-5h52m0-1H14a6 6 0 00-6 6v2s3.719 8 11 8c3.703 0 6.479-2.069 8.319-4.102C29.713 57.576 33.949 61 40 61s10.287-3.424 12.681-6.102C54.521 56.931 57.297 59 61 59c7.281 0 11-8 11-8v-2a6 6 0 00-6-6z"
            ></path>
          </g>
          <g>
            <path
              fill="#FFCFCF"
              d="M60.5 16.5c0-1.375-2.5-5-2.5-5s-2.5 3.625-2.5 5S56.625 19 58 19s2.5-1.125 2.5-2.5z"
            ></path>
          </g>
          <g>
            <path
              fill="#FFCFCF"
              d="M24.5 16.5c0-1.375-2.5-5-2.5-5s-2.5 3.625-2.5 5S20.625 19 22 19s2.5-1.125 2.5-2.5z"
            />
          </g>
        </svg>
      );
    }
    case 'notes': {
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15.5 5C16.9045 5 17.6067 5 18.1111 5.33706C18.3295 5.48298 18.517 5.67048 18.6629 5.88886C19 6.39331 19 7.09554 19 8.5V18C19 19.8856 19 20.8284 18.4142 21.4142C17.8284 22 16.8856 22 15 22H9C7.11438 22 6.17157 22 5.58579 21.4142C5 20.8284 5 19.8856 5 18V8.5C5 7.09554 5 6.39331 5.33706 5.88886C5.48298 5.67048 5.67048 5.48298 5.88886 5.33706C6.39331 5 7.09554 5 8.5 5"
            stroke="#FFFFFF"
            strokeWidth="2"
          />
          <path
            d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5C15 6.10457 14.1046 7 13 7H11C9.89543 7 9 6.10457 9 5Z"
            stroke="#FFFFFF"
            strokeWidth="2"
          />
          <path d="M9 12L15 12" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          <path d="M9 16L13 16" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    }
    default:
      return null;
  }
});

Icon.displayName = 'Icon';

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.oneOf([
    'clear',
    'union',
    'search',
    'plus',
    'edit',
    'delete',
    'saved',
    'left',
    'right',
    'home',
    'persons',
    'logo',
    'calendar',
    'mail',
    'phone',
    'whatsApp',
    'telegram',
    'cake',
    'notes',
  ]).isRequired,
};

Icon.defaultProps = {
  className: '',
};

export default Icon;
