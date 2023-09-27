'use client'
import React from 'react';
import NutritionLabel from '../NutritionLabel/NutritionLabel';


const initialNutritionInfo = {
  servingsPerContainer: 0,
  servingSize: '0 cups',
  calories: 0,
  totalFat: [0, '0%'],
  transFat: 0,
  saturatedFat: [0, '0%'],
  unsaturatedFat: [0, '0%'],
  polyUnsaturatedFat: 0,
  monoUnsaturatedFat: 0,
  cholesterol: [0, '0%'],
  sodium: [0, '0%'],
  totalCarbohydrate: [0, '0%'],
  dietaryFiber: [0, '0%'],
  solubleFiber: 0,
  insolubleFiber: 0,
  totalSugars: 0,
  addedSugars: [0, '0%'],
  protein: 0,
  vitaminD: [0, '0%'],
  calcium: [0, '0%'],
  iron: [0, '0%'],
  potassium: [0, '0%'],
  vitaminA: [0, '0%'],
  vitaminC: [0, '0%'],
  thiamin: [0, '0%'],
  riboflavin: [0, '0%'],
  niacin: [0, '0%'],
  vitaminB6: [0, '0%'],
  folate: [0, '0%'],
  folicAcid: 0,
  vitaminB12: [0, '0%'],
  phosphorus: [0, '0%'],
  magnesium: [0, '0%'],
  zinc: [0, '0%'],
  choline: 0, 

}


function NutritionForm() {

  const [nutritionInfo, setNutritionInfo] = React.useState(initialNutritionInfo)
  const [labelType, setLabelType] = React.useState('StandardVertical')

  const handleEvent = (event) => {
    let result = nutritionInfo
    console.log(result)
    result['servingsPerContainer'] = event.target.value
    setNutritionInfo(result)
  }

  return (
  <div>
    <div>
      <h1>Nutrition Form </h1>
      <label>Servings Per Container</label>
      <input 
      type="text"
      value={nutritionInfo['servingsPerContainer']}
      onChange={(event) => {setNutritionInfo({...nutritionInfo, servingsPerContainer: event.target.value })}}
      />
      <label>Serving Size</label>
      <input 
      type="text"
      value={nutritionInfo['servingSize']}
      onChange={(event) => {setNutritionInfo({...nutritionInfo, servingSize: event.target.value })}}
      />
      <label>Calories</label>
      <input 
      type="text"
      value={nutritionInfo['calories']}
      onChange={(event) => {setNutritionInfo({...nutritionInfo, calories: event.target.value })}}
      />
    </div>
    <div>
      <label>Servings Per Container</label>
      <input 
      type="text"
      value={nutritionInfo['servingsPerContainer']}
      onChange={(event) => {setNutritionInfo({...nutritionInfo, servingsPerContainer: event.target.value })}}
      />
      <label>Serving Size</label>
      <input 
      type="text"
      value={nutritionInfo['servingSize']}
      onChange={(event) => {setNutritionInfo({...nutritionInfo, servingSize: event.target.value })}}
      />
      <label>Calories</label>
      <input 
      type="text"
      value={nutritionInfo['calories']}
      onChange={(event) => {setNutritionInfo({...nutritionInfo, calories: event.target.value })}}
      />
    </div>
    <NutritionLabel nutritionInfo={nutritionInfo} labelType={labelType}/>
  </div>
  )
}

export default NutritionForm;


