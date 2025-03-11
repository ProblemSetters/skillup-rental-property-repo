# React(Basic): Rental Property

## Environment

- React Version: 18.2.0
- Node Version: 18(LTS)
- Default Port: 8000

## Project Specifications

The Rental Property repository is a React-based application that allows users to browse, book, and manage rental properties efficiently. The repository includes several key functionalities: users can book properties with confirmation notifications [Task 1], like properties to track favorites [Task 2], and utilize a search bar to filter listings based on their queries [Task 3]. Additionally, users can apply discounts during the booking process [Task 4] and filter properties by price, rating, and amenities [Task 5]. The application also features a contact us page for user inquiries [Task 6] and allows for user profile management to update personal information [Task 7].

**Project Structure**
```
├── src/
│   ├── components/                 
│   │   ├── ContactUs.js             # Component for the contact us page
│   │   ├── HomePage.js              # Main page displaying the list of properties
│   │   ├── Login.js                 # Component for user login functionality
│   │   ├── Modals/                  # Contains modal components
│   │   │   ├── FilterModal.js       # Modal for filtering properties
│   │   │   └── UserModal.js         # Modal for user-related actions
│   │   ├── Navbar/                  # Contains navigation bar components
│   │   │   ├── FilterButton.js      # Button to open the filter modal
│   │   │   ├── Navbar.js            # Main navigation bar component
│   │   │   ├── SearchBar.js         # Search bar for filtering properties
│   │   │   └── UserButton.js        # Button for user actions
│   │   ├── PropertyCard.js          # Component for displaying individual property details
│   │   ├── PropertyDetails.js       # Component for showing detailed property information
│   │   └── UserProfile.js           # Component for displaying and managing user profile
│   ├── data/                        # Contains data files for properties and users
│   │   ├── properties.json          # JSON file containing property data
│   │   └── users.json               # JSON file containing user data
│   ├── test/                        # Contains test files for the application
│   └── App.js                       # Main application file that integrates all components and sets up routing
```
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
npm install && npm run test:task1
```

```bash
npm install && npm run test:task2
```

```bash
npm install && npm run test:task3
```

```bash
npm install && npm run test:task4
```

```bash
npm install && npm run test:task5
```

```bash
npm install && npm run test:task6
```

```bash
npm install && npm run test:task7
```
