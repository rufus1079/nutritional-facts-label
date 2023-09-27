import React from 'react';
import AggregateDisplay from '../AggregateDisplay/AggregateDisplay';
import StandardVerticalLabel from '../StandardVerticalLabel/StandardVerticalLabel';
import TabularFormat from '../TabularFormat/TabularFormat';
import VerticalLabelNutrientsSideBySide from '../VerticalLabelNutrientsSideBySide/VerticalLabelNutrientsSideBySide';
import VerticalLabelVoluntaryNutrients from '../VerticalLabelVoluntaryNutrients/VerticalLabelVoluntaryNutrients';

function NutritionLabel({nutritionInfo, labelType}) {

  return (
    <div>
      {labelType === 'StandardVertical'? <StandardVerticalLabel nutritionInfo={nutritionInfo}/>:<></>}
      {labelType === 'VerticalLabelNutrientsSideBySide'? <VerticalLabelNutrientsSideBySide nutritionInfo={nutritionInfo} />:<></>}
      {labelType === 'VerticalLabelVoluntaryNutrients'? <VerticalLabelVoluntaryNutrients nutritionInfo={nutritionInfo} />:<></>}
      {labelType === 'TabularFormat'? <TabularFormat nutritionInfo={nutritionInfo} />:<></>}
      {labelType === 'AggregateDisplay'? <AggregateDisplay nutritionInfo={nutritionInfo} />:<></>}
    </div>
  )
}

export default NutritionLabel;


