import React from 'react';

function StandardVerticalLabel({ nutritionInfo }) {
  return (
    <div className="container mx-auto mt-5 px-4">
      <svg xmlns="http://www.w3.org/2000/svg" id="svg" className="w-full lg:w-[40%] wd:w-[70%] mx-auto" viewBox="0 0 218.9 554.5" data-nosnippet="true"  >
      <rect x="0.3pt" y="0.3pt" width="218.1" height="406.2" ></rect>
      <line x1="5.3" y1="29.7" x2="213.3" y2="29.7"></line>
      <line x1="5.1" y1="70.3" x2="213.5" y2="70.3" className="thickest-line"></line>
      <line x1="5.2" y1="117.2" x2="213.5" y2="117.2" className="thicker-line"></line>
      <line x1="5.2" y1="135.8" x2="213.4" y2="135.8"></line>
      <line x1="5.2" y1="151.7" x2="213.4" y2="151.7" ></line>
      <line x1="5.2" y1="167.65" x2="213.4" y2="167.65" ></line>
      <line x1="5.2" y1="183.6" x2="213.4" y2="183.6" ></line>
      <line x1="5.2" y1="199.6" x2="213.4" y2="199.6" ></line>
      <line x1="5.2" y1="215.55" x2="213.4" y2="215.55" ></line>
      <line x1="5.2" y1="231.55" x2="213.4" y2="231.55" ></line>
      <line x1="5.2" y1="247.5" x2="213.4" y2="247.5" ></line>
      <line x1="32.4" y1="263.5" x2="213.4" y2="263.5" ></line>
      <line x1="5.2" y1="279.45" x2="213.4" y2="279.45" ></line>
      <line x1="5.1" y1="300.1" x2="213.5" y2="300.1" className="thickest-line" ></line>
      <line x1="5.2" y1="320.6" x2="213.4" y2="320.6" ></line>
      <line x1="5.2" y1="336.6" x2="213.4" y2="336.6" ></line>
      <line x1="5.2" y1="352.55" x2="213.4" y2="352.55" ></line>
      <line x1="5.2" y1="370.5" x2="213.5" y2="370.5" className="thicker-line"></line>
      <text x="3.2" y="24.4" className="helvetica-black text-[20pt]" textLength="124.5" fill="black">Nutrition</text>
      <text x="136.7" y="24.4" className="helvetica-black text-[20pt]" textLength="78.5" fill="black">Facts</text>
      <text x="4.8" y="44.65" className="helvetica text-[10pt]" fill="black">{nutritionInfo['servingsPerContainer']} servings per container</text>
      <text x="4.45" y="59.55" className="helvetica-black text-[10pt]" fill="black">Serving size</text>
      <text x="214.5" y="59.55" className="helvetica-black text-[10pt]" textAnchor="end" fill="black">{nutritionInfo['servingSize']}</text>
      <text x="4.45" y="88" className="helvetica-black text-[6pt]" fill="black">Amount per serving</text>
      <text x="4.8" y="108.7" className="helvetica-black text-[16pt]" fill="black">Calories</text>
      <text x="214.8" y="108.6" className="helvetica-black text-[22pt] tracking-[-0.1px]" text-anchor="end" fill="black">{nutritionInfo['calories']}</text>
      <text x="149" y="130.1" className="helvetica-black text-[6pt]" fill="black">% Daily Value*</text>
      <text x="5.7" y="147.3" className="helvetica-black text-[8pt]" fill="black">Total Fat</text>
      <text x="61.9" y="147.3" className="helvetica text-[8pt]" fill="black">{nutritionInfo['totalFat'][0]}g</text>
      <text x="213.3" y="147.6" className="helvetica-black text-[8pt]" text-anchor="end" fill="black">{nutritionInfo['totalFat'][1]}</text>
      <text x="19" y="163.3" className="helvetica text-[8pt]" fill="black">Saturated Fat</text>
      <text x="86.5" y="163.3" className="helvetica text-[8pt]" fill="black">{nutritionInfo['saturatedFat'][0]}g</text>
      <text x="213.3" y="163.6" className="helvetica-black text-[8pt]" text-anchor="end" fill="black">{nutritionInfo['saturatedFat'][1]}</text>
      <text x="19.1" y="179.3" className="helvetica text-[8pt] italic" fill="black">Trans</text>
      <text x="49.1" y="179.3" className="helvetica text-[8pt]" fill="black">Fat</text>
      <text x="67.6" y="179.3" className="helvetica text-[8pt]" fill="black">{nutritionInfo['transFat']}g</text>
      <text x="5.7" y="195.2" className="helvetica-black text-[8pt]" fill="black">Cholesterol</text>
      <text x="76" y="195.2" className="helvetica text-[8pt]" fill="black">{nutritionInfo['cholesterol'][0]}</text>
      <text x="213.3" y="195.5" className="helvetica-black text-[8pt]" text-anchor="end" fill="black">{nutritionInfo['cholesterol'][1]}</text>
      <text x="5.7" y="211.2" className="helvetica-black text-[8pt]" fill="black">Sodium</text>
      <text x="52.3" y="211.2" className="helvetica text-[8pt]" fill="black">{nutritionInfo['sodium'][0]}mg</text>
      <text x="213.3" y="211.5" className="helvetica-black text-[8pt]" text-anchor="end" fill="black">{nutritionInfo['sodium'][1]}</text>
      <text x="5.7" y="227.1" className="helvetica-black text-[8pt]" fill="black">Total Carbohydrate</text>
      <text x="121.7" y="227.1" className="helvetica text-[8pt]" fill="black">{nutritionInfo['totalCarbohydrate'][0]}g</text>
      <text x="213.3" y="227.4" className="helvetica-black text-[8pt]" text-anchor="end" fill="black">{nutritionInfo['totalCarbohydrate'][1]}</text>
      <text x="19.1" y="243.1" className="helvetica text-[8pt]" fill="black">Dietary Fiber</text>
      <text x="83" y="243.1" className="helvetica text-[8pt]" fill="black">{nutritionInfo['dietaryFiber'][0]}g</text>
      <text x="213.3" y="243.4" className="helvetica-black text-[8pt]" text-anchor="end" fill="black">{nutritionInfo['dietaryFiber'][1]}</text>
      <text x="19.1" y="259.1" className="helvetica text-[8pt]" fill="black">Total Sugars</text>
      <text x="82.3" y="259.1" className="helvetica text-[8pt]" fill="black">{nutritionInfo['totalSugars']}g</text>
      <text x="32.2" y="275.1" className="helvetica text-[8pt]" fill="black">Includes {nutritionInfo['addedSugars'][0]}g Added Sugars</text>
      <text x="213.3" y="275.3" className="helvetica-black text-[8pt]" text-anchor="end" fill="black">{nutritionInfo['addedSugars'][1]}</text>
      <text x="5.7" y="291.2" className="helvetica-black text-[8pt]" fill="black">Protein</text>
      <text x="51.2" y="291.2" className="helvetica text-[8pt]" fill="black">{nutritionInfo['protein']}g</text>
      <text x="5.7" y="316.5" className="helvetica text-[8pt]" fill="black">Vitamin D</text>
      <text x="54.6" y="316.5" className="helvetica text-[8pt]" fill="black">{nutritionInfo['vitaminD'][0]}mcg</text>
      <text x="213.4" y="316.5" className="helvetica text-[8pt]" text-anchor="end" fill="black">{nutritionInfo['vitaminD'][1]}</text>
      <text x="5.7" y="332.45" className="helvetica text-[8pt]" fill="black">Calcium</text>
      <text x="47" y="332.45" className="helvetica text-[8pt]" fill="black">{nutritionInfo['calcium'][0]}mg</text>
      <text x="213.4" y="332.45" className="helvetica text-[8pt]" text-anchor="end" fill="black">{nutritionInfo['calcium'][1]}</text>
      <text x="5.7" y="348.4" className="helvetica text-[8pt]" fill="black">Iron</text>
      <text x="26.9" y="348.4" className="helvetica text-[8pt]" fill="black">{nutritionInfo['iron'][0]}mg</text>
      <text x="213.4" y="348.4" className="helvetica text-[8pt]" text-anchor="end" fill="black">{nutritionInfo['iron'][1]}</text>
      <text x="5.7" y="364.35" className="helvetica text-[8pt]" fill="black">Potassium</text>
      <text x="58.5" y="364.35" className="helvetica text-[8pt]" fill="black">{nutritionInfo['potassium'][0]}mg</text>
      <text x="213.4" y="364.35" className="helvetica text-[8pt]" text-anchor="end" fill="black">{nutritionInfo['potassium'][1]}</text>
      <text x="4.2" y="381.9" className="helvetica text-[6pt]" textLength="203.8" lengthAdjust="spacing" fill="black">* The % Daily Value (DV) tells you how much a nutrient in</text>
      <text x="9.5" y="391" className="helvetica text-[6pt]" textLength="202.3" lengthAdjust="spacing" fill="black">a serving of food contributes to a daily diet. 2,000 calories</text>
      <text x="9.5" y="400.4" className="helvetica text-[6pt]" textLength="145.6" lengthAdjust="spacing" fill="black">a day is used for general nutrition advice.</text>
      </svg>

    </div>
  )
}

export default StandardVerticalLabel;
