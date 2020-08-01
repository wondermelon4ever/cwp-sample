import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

interface SampleIconProps {
  fontSize?: "small" | "inherit" | "default" | "large" | undefined
  color?: "inherit" | "disabled" | "action" | "primary" | "secondary" | "error" | undefined
  htmlColor?: string | undefined
  style: {
    width: string
    height: string
  }
}

class SampleIcon extends React.Component<any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return(
      // <SvgIcon color={this.props.color} fontSize={ this.props.fontSize } htmlColor='#FFFFFF'>
      <SvgIcon {...this.props}>
        <svg 
          version="1.0" 
          xmlns="http://www.w3.org/2000/svg" 
          // width={ this.props.style.width} 
          // height={ this.props.style.height} 
          viewBox="0 0 24.000000 24.000000"
          preserveAspectRatio="xMidYMid meet">
          <g transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
            <path d="M59 223 c-78 -48 -77 -160 1 -206 37 -22 184 -20 174 3 -8 17 -7 28
              2 84 16 97 -94 171 -177 119z m91 -13 c0 -5 -13 -10 -30 -10 -16 0 -30 5 -30
              10 0 6 14 10 30 10 17 0 30 -4 30 -10z m-90 -50 c0 -13 -7 -20 -20 -20 -22 0
              -23 1 -14 24 9 23 34 20 34 -4z m100 0 c0 -17 -7 -20 -40 -20 -33 0 -40 3 -40
              20 0 17 7 20 40 20 33 0 40 -3 40 -20z m50 16 c0 -2 3 -11 6 -20 4 -12 0 -16
              -15 -16 -14 0 -21 6 -21 20 0 11 7 20 15 20 8 0 15 -2 15 -4z m-150 -76 c0
              -13 -7 -20 -20 -20 -13 0 -20 7 -20 20 0 13 7 20 20 20 13 0 20 -7 20 -20z
              m100 0 c0 -17 -7 -20 -40 -20 -33 0 -40 3 -40 20 0 17 7 20 40 20 33 0 40 -3
              40 -20z m60 0 c0 -13 -7 -20 -20 -20 -13 0 -20 7 -20 20 0 13 7 20 20 20 13 0
              20 -7 20 -20z m-150 -56 c0 -14 -3 -14 -15 -4 -8 7 -15 14 -15 16 0 2 7 4 15
              4 8 0 15 -7 15 -16z m83 -4 c-4 -14 -14 -20 -33 -20 -19 0 -29 6 -33 20 -4 17
              0 20 33 20 33 0 37 -3 33 -20z m51 4 c8 -21 3 -26 -18 -18 -9 3 -16 12 -16 20
              0 19 26 18 34 -2z"/>
          </g>
        </svg>
    {/* <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/> */}
      </SvgIcon>
    );
  }
}

// const SampleIcon = (props: SampleIconProps) => (
//   <SvgIcon color="primary">
//     <svg 
//       version="1.0" 
//       xmlns="http://www.w3.org/2000/svg" 
//       width="15.000000pt" 
//       height="15.000000pt" 
//       viewBox="0 0 24.000000 24.000000"
//       preserveAspectRatio="xMidYMid meet">
//       <g transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
//         <path d="M59 223 c-78 -48 -77 -160 1 -206 37 -22 184 -20 174 3 -8 17 -7 28
//           2 84 16 97 -94 171 -177 119z m91 -13 c0 -5 -13 -10 -30 -10 -16 0 -30 5 -30
//           10 0 6 14 10 30 10 17 0 30 -4 30 -10z m-90 -50 c0 -13 -7 -20 -20 -20 -22 0
//           -23 1 -14 24 9 23 34 20 34 -4z m100 0 c0 -17 -7 -20 -40 -20 -33 0 -40 3 -40
//           20 0 17 7 20 40 20 33 0 40 -3 40 -20z m50 16 c0 -2 3 -11 6 -20 4 -12 0 -16
//           -15 -16 -14 0 -21 6 -21 20 0 11 7 20 15 20 8 0 15 -2 15 -4z m-150 -76 c0
//           -13 -7 -20 -20 -20 -13 0 -20 7 -20 20 0 13 7 20 20 20 13 0 20 -7 20 -20z
//           m100 0 c0 -17 -7 -20 -40 -20 -33 0 -40 3 -40 20 0 17 7 20 40 20 33 0 40 -3
//           40 -20z m60 0 c0 -13 -7 -20 -20 -20 -13 0 -20 7 -20 20 0 13 7 20 20 20 13 0
//           20 -7 20 -20z m-150 -56 c0 -14 -3 -14 -15 -4 -8 7 -15 14 -15 16 0 2 7 4 15
//           4 8 0 15 -7 15 -16z m83 -4 c-4 -14 -14 -20 -33 -20 -19 0 -29 6 -33 20 -4 17
//           0 20 33 20 33 0 37 -3 33 -20z m51 4 c8 -21 3 -26 -18 -18 -9 3 -16 12 -16 20
//           0 19 26 18 34 -2z"/>
//       </g>
//     </svg>
//     {/* <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/> */}
//   </SvgIcon>
// );

export default SampleIcon;
