import React from 'react';

import createAnalysisLeftMenu from './analysis/AnalysisViewerHelper';
import createExamplesLeftMenu from './examples/ExamplesViewerHelper';
import createCwpSamplesLeftMenu from './cwp-sample/CwpSampleViewerHelper';

const createLeftMenus = (key: string): any => {
  switch(key) {
    case "examplesLeftMenu" :
      return createExamplesLeftMenu();
    case "cwpSampleLeftMenu": 
      return createCwpSamplesLeftMenu();
    case "analysisLeftMenu":
      return createAnalysisLeftMenu();
    default :
      break;
  }
}

export default createLeftMenus;