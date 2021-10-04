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
    default:
      return null;
  }
});

Icon.displayName = 'Icon';

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.oneOf(['clear', 'union']).isRequired,
};

Icon.defaultProps = {
  className: '',
};

export default Icon;
