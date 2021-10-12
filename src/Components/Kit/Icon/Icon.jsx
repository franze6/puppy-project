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
          width="24"
          height="24"
          viewBox="0 0 24 24"
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
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11 9H15V11H11V15H9V11H5V9H9V5H11V9ZM10 20C7.34784 20 4.8043 18.9464 2.92893 17.0711C1.05357 15.1957 0 12.6522 0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10C20 12.6522 18.9464 15.1957 17.0711 17.0711C15.1957 18.9464 12.6522 20 10 20ZM10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18Z"
            fill="white"
          />
        </svg>
      );
    }
    case 'left': {
      return (
        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0.200293 1.10636C-0.428118 0.51287 0.566865 -0.426818 1.19528 0.216126L5.80362 4.51891C6.06546 4.7662 6.06546 5.21131 5.80362 5.4586L1.19528 9.81084C0.566865 10.4043 -0.428118 9.46464 0.200293 8.87115L4.28496 5.01348L0.200293 1.10636Z"
            fill="#606F89"
          />
        </svg>
      );
    }
    case 'rigth': {
      return (
        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.75 0C6.16 0 0 6.16 0 13.75C0 21.34 6.16 27.5 13.75 27.5C21.34 27.5 27.5 21.34 27.5 13.75C27.5 6.16 21.34 0 13.75 0ZM13.75 20.625C12.9937 20.625 12.375 20.0063 12.375 19.25V13.75C12.375 12.9937 12.9937 12.375 13.75 12.375C14.5063 12.375 15.125 12.9937 15.125 13.75V19.25C15.125 20.0063 14.5063 20.625 13.75 20.625ZM15.125 9.625H12.375V6.875H15.125V9.625Z"
            fill="black"
            fillOpacity="0.5"
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
    'rigth',
    'home',
    'persons',
    'logo',
  ]).isRequired,
};

Icon.defaultProps = {
  className: '',
};

export default Icon;
