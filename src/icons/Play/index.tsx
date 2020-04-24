import * as React from 'react';

export interface Props extends React.SVGProps<SVGSVGElement> {

}

const Play: React.FC<Props> = (props) => {
  return (
    <svg {...props} viewBox="0 0 18 18">
        <path d="M15.5615866,8.10002147 L3.87056367,0.225209313 C3.05219207,-0.33727727 2,0.225209313 2,1.12518784 L2,16.8748122 C2,17.7747907 3.05219207,18.3372773 3.87056367,17.7747907 L15.5615866,9.89997853 C16.1461378,9.44998927 16.1461378,8.55001073 15.5615866,8.10002147 L15.5615866,8.10002147 Z" />
    </svg>
  );
};

export default Play;
