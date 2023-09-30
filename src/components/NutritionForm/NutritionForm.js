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

  return (
    <div>
      <div className='lg:grid lg:grid-cols-3 gap-4'>
        <div className='w-full mt-5'>
          <h1>Nutrition Form </h1>
          <label>Servings Per Container</label>
          <input
            className='label-inputs rounded-r'
            type="text"
            value={nutritionInfo['servingsPerContainer']}
            onChange={(event) => { setNutritionInfo({ ...nutritionInfo, servingsPerContainer: event.target.value }) }}
          />
          <label>Serving Size</label>
          <input
            className='label-inputs rounded-r'
            type="text"
            value={nutritionInfo['servingSize']}
            onChange={(event) => { setNutritionInfo({ ...nutritionInfo, servingSize: event.target.value }) }}
          />
          <label>Calories</label>
          <input
            className='label-inputs rounded-r'
            type="text"
            value={nutritionInfo['calories']}
            onChange={(event) => { setNutritionInfo({ ...nutritionInfo, calories: event.target.value }) }}
          />
          {labelType === 'VerticalLabelVoluntaryNutrients'?
          <>
          <label>Calories</label>
          <input
            className='label-inputs rounded-r'
            type="text"
            value={nutritionInfo['calories']}
            onChange={(event) => { setNutritionInfo({ ...nutritionInfo, calories: event.target.value }) }}
          />
          <label>Calories</label>
          <input
            className='label-inputs rounded-r'
            type="text"
            value={nutritionInfo['calories']}
            onChange={(event) => { setNutritionInfo({ ...nutritionInfo, calories: event.target.value }) }}
          />
          <label>Calories</label>
          <input
            className='label-inputs rounded-r'
            type="text"
            value={nutritionInfo['calories']}
            onChange={(event) => { setNutritionInfo({ ...nutritionInfo, calories: event.target.value }) }}
          />
          <label>Calories</label>
          <input
            className='label-inputs rounded-r'
            type="text"
            value={nutritionInfo['calories']}
            onChange={(event) => { setNutritionInfo({ ...nutritionInfo, calories: event.target.value }) }}
          />
          </>
          :<></>}
        </div>
        <div className='w-full mt-5'>
          <label>Total Fat</label>
          <input
            className='label-inputs rounded-r'
            type="text"
            value={nutritionInfo['totalFat'][0]}
            onChange={(event) => { setNutritionInfo({ ...nutritionInfo, totalFat: [event.target.value, nutritionInfo['totalFat'][1]] }) }}
          />
          <input
            className='label-inputs rounded-r'
            type="text"
            value={nutritionInfo['totalFat'][1]}
            onChange={(event) => { setNutritionInfo({ ...nutritionInfo, totalFat: [nutritionInfo['totalFat'][0], event.target.value] }) }}
          />
          <label>Saturated Fat</label>
          <input
            className='label-inputs rounded-r'
            type="text"
            value={nutritionInfo['saturatedFat'][0]}
            onChange={(event) => { setNutritionInfo({ ...nutritionInfo, saturatedFat: [event.target.value, nutritionInfo['saturatedFat'][1]] }) }}
          />
          <input
            className='label-inputs rounded-r'
            type="text"
            value={nutritionInfo['saturatedFat'][1]}
            onChange={(event) => { setNutritionInfo({ ...nutritionInfo, saturatedFat: [nutritionInfo['saturatedFat'][0], event.target.value] }) }}
          />
          <label>Trans Fat</label>
          <input
            className='label-inputs rounded-r'
            type="text"
            value={nutritionInfo['transFat']}
            onChange={(event) => { setNutritionInfo({ ...nutritionInfo, transFat: event.target.value }) }}
          />
          <label>Cholesterol</label>
          <input
            className='label-inputs rounded-r'
            type="text"
            value={nutritionInfo['cholesterol'][0]}
            onChange={(event) => { setNutritionInfo({ ...nutritionInfo, cholesterol: [event.target.value, nutritionInfo['cholesterol'][1]] }) }}
          />
          <input
            className='label-inputs rounded-r'
            type="text"
            value={nutritionInfo['cholesterol'][1]}
            onChange={(event) => { setNutritionInfo({ ...nutritionInfo, cholesterol: [nutritionInfo['cholesterol'][0], event.target.value] }) }}
          />
          <label>Sodium</label>
          <input
            className='label-inputs rounded-r'
            type="text"
            value={nutritionInfo['sodium'][0]}
            onChange={(event) => { setNutritionInfo({ ...nutritionInfo, sodium: [event.target.value, nutritionInfo['sodium'][1]] }) }}
          />
          <input
            className='label-inputs rounded-r'
            type="text"
            value={nutritionInfo['sodium'][1]}
            onChange={(event) => { setNutritionInfo({ ...nutritionInfo, sodium: [nutritionInfo['sodium'][0], event.target.value] }) }}
          />
          <label>Total Carbohydrate</label>
          <input
            className='label-inputs rounded-r'
            type="text"
            value={nutritionInfo['totalCarbohydrate'][0]}
            onChange={(event) => { setNutritionInfo({ ...nutritionInfo, totalCarbohydrate: [event.target.value, nutritionInfo['totalCarbohydrate'][1]] }) }}
          />
          <input
            className='label-inputs rounded-r'
            type="text"
            value={nutritionInfo['totalCarbohydrate'][1]}
            onChange={(event) => { setNutritionInfo({ ...nutritionInfo, totalCarbohydrate: [nutritionInfo['totalCarbohydrate'][0], event.target.value] }) }}
          />
          <label>Dietary Fiber</label>
          <input
            className='label-inputs rounded-r'
            type="text"
            value={nutritionInfo['dietaryFiber'][0]}
            onChange={(event) => { setNutritionInfo({ ...nutritionInfo, dietaryFiber: [event.target.value, nutritionInfo['dietaryFiber'][1]] }) }}
          />
          <input
            className='label-inputs rounded-r'
            type="text"
            value={nutritionInfo['dietaryFiber'][1]}
            onChange={(event) => { setNutritionInfo({ ...nutritionInfo, dietaryFiber: [nutritionInfo['dietaryFiber'][0], event.target.value] }) }}
          />
          <label>Total Sugars</label>
          <input
            className='label-inputs rounded-r'
            type="text"
            value={nutritionInfo['totalSugars'][0]}
            onChange={(event) => { setNutritionInfo({ ...nutritionInfo, totalSugars: [event.target.value, nutritionInfo['totalSugars'][1]] }) }}
          />
          <label>Added Sugars</label>
          <input
            className='label-inputs rounded-r'
            type="text"
            value={nutritionInfo['addedSugars'][0]}
            onChange={(event) => { setNutritionInfo({ ...nutritionInfo, addedSugars: [event.target.value, nutritionInfo['addedSugars'][1]] }) }}
          />
          <input
            className='label-inputs rounded-r'
            type="text"
            value={nutritionInfo['addedSugars'][1]}
            onChange={(event) => { setNutritionInfo({ ...nutritionInfo, addedSugars: [nutritionInfo['addedSugars'][0], event.target.value] }) }}
          />
          <label>Protein</label>
          <input
            className='label-inputs rounded-r'
            type="text"
            value={nutritionInfo['protein'][0]}
            onChange={(event) => { setNutritionInfo({ ...nutritionInfo, protein: [event.target.value, nutritionInfo['protein'][1]] }) }}
          />
          <label>Select Label Type</label>
          <select
          value={labelType}
          onChange={(event) => {
            setLabelType(event.target.value)
          }}
          >
            <option value={'StandardVertical'}>Standard Vertical</option>
            <option value={'VerticalLabelNutrientsSideBySide'}>Vertical Label Nutrients Side By Side</option>
            <option value={'VerticalLabelVoluntaryNutrients'}>Vertical Label Voluntary Nutrients</option>
            <option value={'TabularFormat'}>Tabular Format</option>
            <option value={'AggregateDisplay'}>Aggregate Display</option>
          </select>
          </div>
          <div className='w-full mt-5'>
            <label>Vitamin D</label>
            <input
              className='label-inputs rounded-r'
              type="text"
              value={nutritionInfo['vitaminD'][0]}
              onChange={(event) => { setNutritionInfo({ ...nutritionInfo, vitaminD: [event.target.value, nutritionInfo['vitaminD'][1]] }) }}
            />
            <input
              className='label-inputs rounded-r'
              type="text"
              value={nutritionInfo['vitaminD'][1]}
              onChange={(event) => { setNutritionInfo({ ...nutritionInfo, vitaminD: [nutritionInfo['vitaminD'][0], event.target.value] }) }}
            />
            <label>Calcium</label>
            <input
              className='label-inputs rounded-r'
              type="text"
              value={nutritionInfo['calcium'][0]}
              onChange={(event) => { setNutritionInfo({ ...nutritionInfo, calcium: [event.target.value, nutritionInfo['calcium'][1]] }) }}
            />
            <input
              className='label-inputs rounded-r'
              type="text"
              value={nutritionInfo['calcium'][1]}
              onChange={(event) => { setNutritionInfo({ ...nutritionInfo, calcium: [nutritionInfo['calcium'][0], event.target.value] }) }}
            />
            <label>Iron</label>
            <input
              className='label-inputs rounded-r'
              type="text"
              value={nutritionInfo['iron'][0]}
              onChange={(event) => { setNutritionInfo({ ...nutritionInfo, iron: [event.target.value, nutritionInfo['iron'][1]] }) }}
            />
            <input
              className='label-inputs rounded-r'
              type="text"
              value={nutritionInfo['iron'][1]}
              onChange={(event) => { setNutritionInfo({ ...nutritionInfo, iron: [nutritionInfo['iron'][0], event.target.value] }) }}
            />
            <label>Potassium</label>
            <input
              className='label-inputs rounded-r'
              type="text"
              value={nutritionInfo['potassium'][0]}
              onChange={(event) => { setNutritionInfo({ ...nutritionInfo, potassium: [event.target.value, nutritionInfo['potassium'][1]] }) }}
            />
            <input
              className='label-inputs rounded-r'
              type="text"
              value={nutritionInfo['potassium'][1]}
              onChange={(event) => { setNutritionInfo({ ...nutritionInfo, potassium: [nutritionInfo['potassium'][0], event.target.value] }) }}
            />
            {labelType === 'VerticalLabelVoluntaryNutrients'?
          <>
          <label>Calories</label>
          <input
            className='label-inputs rounded-r'
            type="text"
            value={nutritionInfo['calories']}
            onChange={(event) => { setNutritionInfo({ ...nutritionInfo, calories: event.target.value }) }}
          />
          <label>Calories</label>
          <input
            className='label-inputs rounded-r'
            type="text"
            value={nutritionInfo['calories']}
            onChange={(event) => { setNutritionInfo({ ...nutritionInfo, calories: event.target.value }) }}
          />
          <label>Calories</label>
          <input
            className='label-inputs rounded-r'
            type="text"
            value={nutritionInfo['calories']}
            onChange={(event) => { setNutritionInfo({ ...nutritionInfo, calories: event.target.value }) }}
          />
          <label>Calories</label>
          <input
            className='label-inputs rounded-r'
            type="text"
            value={nutritionInfo['calories']}
            onChange={(event) => { setNutritionInfo({ ...nutritionInfo, calories: event.target.value }) }}
          />
          <label>Calories</label>
          <input
            className='label-inputs rounded-r'
            type="text"
            value={nutritionInfo['calories']}
            onChange={(event) => { setNutritionInfo({ ...nutritionInfo, calories: event.target.value }) }}
          />
          <label>Calories</label>
          <input
            className='label-inputs rounded-r'
            type="text"
            value={nutritionInfo['calories']}
            onChange={(event) => { setNutritionInfo({ ...nutritionInfo, calories: event.target.value }) }}
          />
          <label>Calories</label>
          <input
            className='label-inputs rounded-r'
            type="text"
            value={nutritionInfo['calories']}
            onChange={(event) => { setNutritionInfo({ ...nutritionInfo, calories: event.target.value }) }}
          />
          <label>Calories</label>
          <input
            className='label-inputs rounded-r'
            type="text"
            value={nutritionInfo['calories']}
            onChange={(event) => { setNutritionInfo({ ...nutritionInfo, calories: event.target.value }) }}
          />
          <label>Calories</label>
          <input
            className='label-inputs rounded-r'
            type="text"
            value={nutritionInfo['calories']}
            onChange={(event) => { setNutritionInfo({ ...nutritionInfo, calories: event.target.value }) }}
          />
          <label>Calories</label>
          <input
            className='label-inputs rounded-r'
            type="text"
            value={nutritionInfo['calories']}
            onChange={(event) => { setNutritionInfo({ ...nutritionInfo, calories: event.target.value }) }}
          />
          <label>Calories</label>
          <input
            className='label-inputs rounded-r'
            type="text"
            value={nutritionInfo['calories']}
            onChange={(event) => { setNutritionInfo({ ...nutritionInfo, calories: event.target.value }) }}
          />
          <label>Calories</label>
          <input
            className='label-inputs rounded-r'
            type="text"
            value={nutritionInfo['calories']}
            onChange={(event) => { setNutritionInfo({ ...nutritionInfo, calories: event.target.value }) }}
          />
          <label>Calories</label>
          <input
            className='label-inputs rounded-r'
            type="text"
            value={nutritionInfo['calories']}
            onChange={(event) => { setNutritionInfo({ ...nutritionInfo, calories: event.target.value }) }}
          />
          <label>Calories</label>
          <input
            className='label-inputs rounded-r'
            type="text"
            value={nutritionInfo['calories']}
            onChange={(event) => { setNutritionInfo({ ...nutritionInfo, calories: event.target.value }) }}
          />
          </>

          :<></>}
          </div>
      </div>
      <NutritionLabel nutritionInfo={nutritionInfo} labelType={labelType} />
    </div>
  )
}

export default NutritionForm;


