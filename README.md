# React: Discount Coupons

## Environment

- React Version: 18.2.0
- Node Version: 18(LTS)
- Default Port: 8000

## Application Demo:

![](https://hrcdn.net/s3_pub/istreet-assets/simsi3VfaC9vbvTd4GJZCw/discount-coupons.gif)

## Functionality Requirements

- Click on any property card's image to navigate to the property details page.
- Click on the "Apply Discount" button to open a modal with a coupon input field, an "Apply" button, and a "Close" button.
- Support three coupon codes: 10OFF, 20OFF, and 30OFF, which should be case insensitive.
- If an incorrect coupon code is entered, an "Incorrect coupon" error message should appear on the "Apply" button click.
- If the input field is empty upon clicking the "Apply" button, an "Empty input field" message should be displayed.
- Upon entering a correct coupon code, the modal should close, and the discounted price should be displayed below the original price:
  - 10OFF provides a 10% discount.
  - 20OFF provides a 20% discount.
  - 30OFF provides a 30% discount.

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
npm install && npm run test:task4
```
