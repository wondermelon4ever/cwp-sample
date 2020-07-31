import AccessibilityIcon from '@material-ui/icons/Accessibility';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import AssessmentIcon from '@material-ui/icons/Assessment';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import CodeIcon from '@material-ui/icons/Code';
import HomeIcon from '@material-ui/icons/Home';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import WorkIcon from '@material-ui/icons/Work';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

const mainMenuItems = [
  {
    type: "ListItem",
    name: 'Home',
    link: '/tp1',
    state: {},
    Icon: HomeIcon, 
  },
  {
    type: "ListItem",
    name: 'My Projects',
    link: '/tp1',
    state: { viewId: 'examplePane1ContentView' },
    Icon: AssignmentIndIcon,
  },
  {
    type: "Divider",
    name: ""
  },
  {
    type: "ListItem",
    name: 'Task',
    link: '/tp2',
    state: { leftMenuKey: "examplesLeftMenu", fromTemplate: true },
    Icon: WorkIcon,
    items: [
     {
      type: "ListItem",
       name: 'Counter',
       link: '/tp2',
       state: { leftMenuKey: "examplesLeftMenu", fromTemplate: true, selectedName: 'Counter' },
     },
     {
      type: "ListItem",
      name: 'TEST-21',
      link: '/tp2',
      state: { leftMenuKey: "examplesLeftMenu", fromTemplate: true, selectedName: 'TEST-21' },
     }
    ]
  },
  {
    type: "ListItem",
    name: 'Job',
    link: '/tp1',
    state: { viewId: 'examplePane1ContentView2' },
    Icon: AssignmentTurnedInIcon,
  },
  {
    type: "ListItem",
    name: 'Script',
    Icon: CodeIcon,
  },
  {
    type: "Divider",
    name: ""
  },
  {
    type: "ListItem",
    name: 'Cooperation',
    Icon: GroupWorkIcon,
  },
  {
    type: "ListItem",
    name: 'Analysis',
    link: '/tp2',
    Icon: AssessmentIcon,
    state: { leftMenuKey: "analysisLeftMenu", fromTemplate: true, selectedName: 'Geo Chart' },
    items: [
      {
       type: "ListItem",
        name: 'Geo Chart',
        link: '/tp2',
        state: { leftMenuKey: "analysisLeftMenu", fromTemplate: true, selectedName: 'Geo Chart' },
      },
      {
       type: "ListItem",
       name: 'Calendar Chart',
       link: '/tp2',
       state: { leftMenuKey: "analysisLeftMenu", fromTemplate: true, selectedName: 'Calendar Chart' },
      }
     ]
  },
  {
    type: "Divider",
    name: ""
  },
  {
    type: "ListItem",
    name: 'Announcement',
    Icon: AnnouncementIcon,
  },
  {
    type: "ListItem",
    name: 'Notification',
    Icon: NotificationsIcon,
  },
  {
    type: "Divider",
    name: ""
  },
  {
    type: "ListItem",
    name: 'Support',
    Icon: AccessibilityIcon,
  },
  {
    type: "ListItem",
    name: 'User Manual',
    Icon: MenuBookIcon,
  },
  {
    type: "Divider",
    name: ""
  },
  {
    type: "ListItem",
    name: 'Setting',
    Icon: SettingsIcon,
  },
  {
    type: "ListItem",
    name: 'Administration',
    Icon: SupervisedUserCircleIcon,
  },
  {
    type: "Divider",
    name: ""
  },
  {
    type: "ListItem",
    name: 'CWP Sample',
    link: '/tp2',
    state: { leftMenuKey: "cwpSampleLeftMenu", fromTemplate: true },
    Icon: AccountBalanceIcon,
    items: [
     {
      type: "ListItem",
       name: 'Cwp Sample',
       link: '/tp2',
       state: { leftMenuKey: "cwpSampleLeftMenu", fromTemplate: true, selectedName: 'Cwp Sample' },
     },
    ]
  },
]

export { 
  mainMenuItems
}