import React from 'react';
import AssessmentIcon from '@material-ui/icons/Assessment';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import TimelineIcon from '@material-ui/icons/Timeline';

import { BodyTemplateLeftMenu } from '../BodyTemplateLeft';
import GeoChartSampleView from './GeoChartSampleView';
import CalendarChartSampleView from './CalendarChartSampleView';

const title = "Geo Chart Sample";
const titleIcon = ( <AssessmentIcon fontSize="large"/>);
const geoChartMenuIcon = ( <BubbleChartIcon />);
const calendarChartMenuIcon = ( <TimelineIcon /> );

function renderGeoChartView (data: any) {
  return (
    <GeoChartSampleView />
  );
}

function renderCalendarChartView (data: any) {
  return (
    <CalendarChartSampleView />
  );
}

const subMenus = (data: any) => {
  const menus = new Array<BodyTemplateLeftMenu>();
  menus.push({menuName: "Geo Chart", makeIcon: geoChartMenuIcon, url: "link-1", selected: true,  renderView: renderGeoChartView });
  menus.push({menuName: "Calendar Chart", makeIcon: calendarChartMenuIcon,   url: "link-2", selected: false, renderView: renderCalendarChartView });

  return menus;
}

const data = {
  
}

const createAnalysisLeftMenu = (): any => {
  var left = {
    title: title,
    titleIcon: titleIcon,
    titleLink: "/tp2",
    subMenus: subMenus(data)  
  }
  return left;
}

export default createAnalysisLeftMenu;