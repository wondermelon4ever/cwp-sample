import * as React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import createSvgIcon from '@material-ui/icons/utils/createSvgIcon';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

function HomesIcon(props: any) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const createCustomSvgIcon = (iconName: string, path: string, displayName?: string) => createSvgIcon(
  <React.Fragment>
    <path fill='none' d='M0 0h24v24H0z' />
    'oWCDrNcv01.svg'
  </React.Fragment>,
  'TestIcon'
);

function TestIcon(props: any) {
  return (
    // <SvgIcon {...props}>
    //   <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" path="/oWCDrNcv01.svg"/>
    // </SvgIcon>
    <Icon>
      <img src="/oWCDrNcv01.svg" />
    </Icon>
  );
}

export default function SvgIconsColor() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <HomesIcon />
      <HomesIcon color="primary" />
      <HomesIcon color="secondary" />
      <HomesIcon color="action" />
      <HomesIcon color="disabled" />
      {/* <HomeIcon style={{ color: green[500] }} /> */}
    </div>
  );
}

const createCustomIcon = (path: string, displayName?: string, style?: {}) => {
  // const classes = useStyles();
  return (
    // <Icon classes={{root: classes.iconRoot}} style={style}>
    //   <img className={classes.imageIcon} src={path}/>
    <Icon >
       <img src={path}/>
    </Icon>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > svg': {
        margin: theme.spacing(2),
      },
    },
    imageIcon: {
      height: '100%'
    },
    iconRoot: {
      textAlign: 'center'
    },
  }),
);

export { 
  createCustomSvgIcon,
  createCustomIcon,
  TestIcon,
  HomesIcon
}