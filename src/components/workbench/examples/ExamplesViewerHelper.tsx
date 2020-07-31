import React from 'react';
import AlarmIcon from '@material-ui/icons/Alarm';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import WorkIcon from '@material-ui/icons/Work';

import { BodyTemplateLeftMenu } from '../BodyTemplateLeft';
import ExampleContentView from './ExampleContentView';

const title = "Task";
const titleIcon = ( <WorkIcon fontSize="large"/>)
const countMenuIcon = ( <AlarmIcon />)
const subMenuIcon = ( <WorkIcon />)

const exapmpleCounterName = "Example Counter";
function renderExampleView (data: any) {
  // const { name } = data.counterName;
  return (
    <ExampleContentView name= { exapmpleCounterName }/>
  );
}

function contentView2 (data: any) {
  return (
    <table>
      <tr><td>Wonder Insoo Park { data }</td></tr>
    </table>
  );
}

const subMenus = (data: any) => {
  const menus = new Array<BodyTemplateLeftMenu>();
  menus.push({menuName: "Counter", makeIcon: countMenuIcon, url: "link-1", selected: true,  renderView: renderExampleView });
  menus.push({menuName: "TEST-21", makeIcon: subMenuIcon,   url: "link-2", selected: false, renderView: contentView2 });

  return menus;
}

const data = {
  counterName: "Example Counter" 
}

const createExamplesLeftMenu = (): any => {
  var left = {
    title: title,
    titleIcon: titleIcon,
    titleLink: "/tp2",
    subMenus: subMenus(data)  
  }
  return left;
}

export default createExamplesLeftMenu;