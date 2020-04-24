import * as React from 'react';

export interface Props extends React.SVGAttributes<any> {

}

const Pause: React.FC = (props) => {
  return (
    <svg {...props} viewBox="0 0 18 18">
      <path d="M6,1 L3,1 C2.4,1 2,1.4 2,2 L2,16 C2,16.6 2.4,17 3,17 L6,17 C6.6,17 7,16.6 7,16 L7,2 C7,1.4 6.6,1 6,1 L6,1 Z"></path>
      <path d="M12,1 C11.4,1 11,1.4 11,2 L11,16 C11,16.6 11.4,17 12,17 L15,17 C15.6,17 16,16.6 16,16 L16,2 C16,1.4 15.6,1 15,1 L12,1 Z"></path>
    </svg>
  );
};

export default Pause;
