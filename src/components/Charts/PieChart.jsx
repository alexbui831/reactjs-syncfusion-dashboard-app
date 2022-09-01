import React from 'react'
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationLegend, AccumulationTooltip, AccumulationSeriesDirective, PieSeries, Inject, AccumulationDataLabel } from '@syncfusion/ej2-react-charts';

import { pieChartData } from '../../data/dummy';

import { useStateContext } from '../../contexts/ContextProvider';

const PieChart = ({ id, data, legendVisibility, height}) => {

  const { currentMode } = useStateContext();

  return (
    <AccumulationChartComponent 
      id={id} 
      legendSettings={{visible: legendVisibility, backGround: 'white'}} 
      height={height} 
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      tooltip={{ enable: true }}>
      <Inject services={[PieSeries, AccumulationLegend, AccumulationTooltip, AccumulationDataLabel]}></Inject>
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective 
          name="Sale"
          dataSource={pieChartData}
          xName="x"
          yName="y"
          innerRadius="40%"
          startAngle={0}
          endAngle={360}
          radius="90%"
          explode
          explodeOffset="10%"
          explodeIndex={2}
          dataLabel={{
            visible: true,
            name: 'text',
            position: 'Inside',
            font: {
              fontWeight: '600',
              color: '#fff',
            },}}>
        </AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  )
}

export default PieChart