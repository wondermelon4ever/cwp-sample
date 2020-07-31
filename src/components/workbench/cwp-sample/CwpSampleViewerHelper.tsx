import React from 'react';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import MultilineChartIcon from '@material-ui/icons/MultilineChart';

import { BodyTemplateLeftMenu } from '../BodyTemplateLeft';
import CwpSampleContentView from './CwpSampleContentView';

const title = "Cwp Sample";
const titleIcon = ( <AccountBalanceIcon fontSize="large"/>)
const subMenuIcon = ( <MultilineChartIcon />)

const cwpSampleViewerName = "Cwp Sample Viwer";
function renderCwpSampleView (data: any) {
  return (
    <CwpSampleContentView name= { cwpSampleViewerName }/>
  );
}

const subMenus = (data: any) => {
  const menus = new Array<BodyTemplateLeftMenu>();
  menus.push({menuName: "Cwp Sample", makeIcon: subMenuIcon, url: "link-1", selected: true,  renderView: renderCwpSampleView });

  return menus;
}

const data = {
  cwpName: "Sample CWP" 
}

const createCwpSamplesLeftMenu = (): any => {
  var left = {
    title: title,
    titleIcon: titleIcon,
    titleLink: "/tp2",
    subMenus: subMenus(data)  
  }
  return left;
}

export default createCwpSamplesLeftMenu;