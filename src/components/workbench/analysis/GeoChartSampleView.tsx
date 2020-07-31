import React from 'react';
import Chart from "react-google-charts";

export default class GeoChartSampleView extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return(
      <div>
      <Chart
        width={'500px'}
        height={'300px'}
        chartType="GeoChart"
        data={[
          ['Country', 'Popularity'],
          ['Germany', 200],
          ['United States', 300],
          ['Brazil', 400],
          ['Canada', 500],
          ['France', 600],
          ['RU', 700],
        ]}
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        mapsApiKey="YOUR_KEY_HERE"
        rootProps={{ 'data-testid': '1' }}
      />
      <br/>
      <Chart
        width={'500px'}
        height={'300px'}
        chartType="GeoChart"
        data={[
          ['City', 'Population', 'Area'],
          ['Rome', 2761477, 1285.31],
          ['Milan', 1324110, 181.76],
          ['Naples', 959574, 117.27],
        ]}
        options={{
          region: 'IT',
          displayMode: 'markers',
          colorAxis: { colors: ['green', 'blue'] },
        }}
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        mapsApiKey="YOUR_KEY_HERE"
        rootProps={{ 'data-testid': '2' }}
      />
      <br/>
      <Chart
        width={'500px'}
        height={'300px'}
        chartType="GeoChart"
        data={[
          ['Country', 'Latitude'],
          ['Algeria', 36],
          ['Angola', -8],
          ['Benin', 6],
          ['Botswana', -24],
          ['Burkina Faso', 12],
          ['Burundi', -3],
          ['Cameroon', 3],
          ['Canary Islands', 28],
          ['Cape Verde', 15],
          ['Central African Republic', 4],
          ['Ceuta', 35],
          ['Chad', 12],
          ['Comoros', -12],
          ["Cote d'Ivoire", 6],
          ['Democratic Republic of the Congo', -3],
          ['Djibouti', 12],
          ['Egypt', 26],
          ['Equatorial Guinea', 3],
          ['Eritrea', 15],
          ['Ethiopia', 9],
          ['Gabon', 0],
          ['Gambia', 13],
          ['Ghana', 5],
          ['Guinea', 10],
          ['Guinea-Bissau', 12],
          ['Kenya', -1],
          ['Lesotho', -29],
          ['Liberia', 6],
          ['Libya', 32],
          ['Madagascar', null],
          ['Madeira', 33],
          ['Malawi', -14],
          ['Mali', 12],
          ['Mauritania', 18],
          ['Mauritius', -20],
          ['Mayotte', -13],
          ['Melilla', 35],
          ['Morocco', 32],
          ['Mozambique', -25],
          ['Namibia', -22],
          ['Niger', 14],
          ['Nigeria', 8],
          ['Republic of the Congo', -1],
          ['Réunion', -21],
          ['Rwanda', -2],
          ['Saint Helena', -16],
          ['São Tomé and Principe', 0],
          ['Senegal', 15],
          ['Seychelles', -5],
          ['Sierra Leone', 8],
          ['Somalia', 2],
          ['Sudan', 15],
          ['South Africa', -30],
          ['South Sudan', 5],
          ['Swaziland', -26],
          ['Tanzania', -6],
          ['Togo', 6],
          ['Tunisia', 34],
          ['Uganda', 1],
          ['Western Sahara', 25],
          ['Zambia', -15],
          ['Zimbabwe', -18],
        ]}
        options={{
          region: '002', // Africa
          colorAxis: { colors: ['#00853f', 'black', '#e31b23'] },
          backgroundColor: '#81d4fa',
          datalessRegionColor: '#f8bbd0',
          defaultColor: '#f5f5f5',
        }}
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        mapsApiKey="YOUR_KEY_HERE"
        rootProps={{ 'data-testid': '4' }}
      />
      </div>
    );
  }
}