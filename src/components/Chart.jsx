import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

const MyResponsiveBar = ({ data, keys }) => (
  <ResponsiveBar
    data={data}
    keys={keys}
    indexBy="category"
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    padding={0.3}
    valueScale={{ type: 'linear' }}
    indexScale={{ type: 'band', round: true }}
    valueFormat={{ format: ' >-', enabled: false }}
    colors={{ scheme: 'category10' }}
    defs={[
      {
        id: 'dots',
        type: 'patternDots',
        background: 'inherit',
        color: '#fff',
        size: 4,
        padding: 1,
        stagger: true,
      },
      {
        id: 'lines',
        type: 'patternLines',
        background: 'inherit',
        color: '#fff',
        rotation: -45,
        lineWidth: 6,
        spacing: 10,
      },
    ]}
    fill={[
      {
        match: {
          id: 'fries',
        },
        id: 'dots',
      },
      {
        match: {
          id: 'sandwich',
        },
        id: 'lines',
      },
    ]}
    borderRadius={4}
    borderWidth={0}
    borderColor={{ from: 'color', modifiers: [['darker', '1.7']] }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'CATEGORY',
      legendPosition: 'middle',
      legendOffset: 32,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'PROFITS ( $ )',
      legendPosition: 'middle',
      legendOffset: -40,
    }}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor="#fff"
    labelTextWeight="600"
    legends={[
      {
        dataFrom: 'keys',
        anchor: 'top',
        direction: 'row',
        justify: false,
        translateX: 28,
        translateY: -38,
        itemsSpacing: 2,
        itemWidth: 100,
        itemHeight: 20,
        itemDirection: 'left-to-right',
        itemOpacity: 0.85,
        symbolSize: 20,
        effects: [
          {
            on: 'hover',
            style: {
              itemOpacity: 0.7,
            },
          },
        ],
      },
    ]}
  />
);
export default MyResponsiveBar;
