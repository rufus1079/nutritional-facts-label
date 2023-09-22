# Nutritional Facts Label Coding Exercise

The goal of this exercise is to build a "Nutritional Facts Label" component with React.  Specifically, the "Standard Vertical Label" format as described by the FDA and [demonstrated here](https://www.nutritionfacts-labels.com/labels/standard-vertical).

![Nutritional Facts Label](https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/US_Nutritional_Fact_Label_2.svg/1200px-US_Nutritional_Fact_Label_2.svg.png)

**Background, Resources & Inspiration**

- https://www.fda.gov/food/new-nutrition-facts-label/how-understand-and-use-nutrition-facts-label

- https://www.nutritionfacts-labels.com/


## Considerations

- The component should be able to accept a variety of named properties and render a label with the appropriate values.  
- The component should be able to handle missing or invalid data gracefully.


### SVG vs HTML

When creating the markup that will *render* the actual Nutritional Facts Label - spacing, font treatements, and sizing can be very important.  For this reason, there are two options for rendering the label: SVG or HTML.   SVG provides more control over the final output, but HTML is easier to work with.  You can choose whichever approach you prefer.  

*Note: If you choose to use SVG, you may find the resources in the `assets` folder helpful.*

### Assets

There's a folder in this repo called `assets` that contains a few resources that you may find useful. You are not required to use these assets, but they are available if you'd like to use them.

### Stretch Goals

- Look into supporting different label formats (e.g. a "Vertical Display with Micronutrients Listed Side-by-Side", "Tabular Format", or [any other formats referenced](https://www.nutritionfacts-labels.com/labels)).


