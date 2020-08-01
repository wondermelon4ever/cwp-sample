import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

import { colorNamedCode, getRealColor, IconProps } from './IconHelper';

const defaultWidth = "24.000000pt";
const defaultHeight= "24.000000pt";

class SampleIcon extends React.Component<IconProps> {
  constructor(props: IconProps) {
    super(props);
  }

  render() {
    const { color, style } = this.props;
    var _color: string = getRealColor(color);
    var _width: string = "";
    var _height: string = "";

    if(style !== undefined) {
      if(style.color !== undefined) _color = style.color;
      if(style.width !== undefined) _width = style.width;
      if(style.height !== undefined) _height = style.height;
    }

    if(_width === undefined)  _width  = defaultWidth;
    if(_height === undefined) _height = defaultHeight;
    return(
      <SvgIcon {...this.props }>
        <svg 
          version="1.0" 
          xmlns="http://www.w3.org/2000/svg" 
          width={ _width } 
          height={ _height } 
          viewBox="0 0 24.000000 24.000000"
          // enable-background="new 0 0 512 512"
          preserveAspectRatio="xMidYMid meet">
          <g transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
            <path style={{ fill: _color}} d="M59 223 c-78 -48 -77 -160 1 -206 37 -22 184 -20 174 3 -8 17 -7 28
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
      </SvgIcon>
    );
  }
}

export default SampleIcon;