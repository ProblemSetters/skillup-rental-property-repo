# React: Filter Button

## Environment

- React Version: 18.2.0
- Node Version: 18(LTS)
- Default Port: 8000

## Application Demo:

![](https://hrcdn.net/s3_pub/istreet-assets/P7Fitzf2ETkf0GnqqNFmjA/filter-button.gif)

## Functionality Requirements

- Filter Modal:
  - Clicking the filter button on the navbar should open the FilterModal.
  - It should contain three categories for filtering: Price Range, Rating, and Amenities.
  - The modal should include "Apply" and "Clear" buttons.
- Price Range:
  - There should be two input fields for minimum and maximum prices.
  - Properties that fall within this range should be displayed in the same order as they appear in data/properties.json.
  - The filter should be inclusive, meaning properties at the minimum and maximum prices should also be shown.
- Rating Filter: 
  - Five buttons for rating ranges:
    - 0 - 1 Stars
    - 1 - 2 Stars
    - 2 - 3 Stars
    - 3 - 4 Stars
    - 4+ Stars
  - Clicking a button and then "Apply" should display properties matching the selected rating.
- Amenities Filter:
  - Initially display five amenities in the order from data/properties.json.
  - A "Show More Amenities" button should reveal all amenities.
  - Multiple amenities can be selected, and clicking an amenity should filter properties to show only those that include the selected amenities.
- Filter Application:
  - The "Apply Filters" button should apply all selected filters, close the modal, and display the filtered properties.
  - Users should be able to apply all three filters individually or in combination.
  - The "Clear Filters" button should reset all filters to their default state, close the modal, and display all properties.

## Project Specifications

**Read Only Files**

- `src/test/*`
- `src/data/*`
- `src/index.js`

**Commands**

- run:

```bash
npm start
```

- install:

```bash
npm install
```

- test:

```bash
npm install && npm run test:task5
```
