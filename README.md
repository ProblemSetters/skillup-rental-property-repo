# React: User Profile Management

## Environment

- React Version: 18.2.0
- Node Version: 18(LTS)
- Default Port: 8000

## Application Demo:

![](https://hrcdn.net/s3_pub/istreet-assets/SY23i6UiWPU7K7n7E_eNcw/user-profile.gif)

## Functionality Requirements

- User Modal:
  - Clicking the UserButton in the navbar should open the UserModal.
  - Initially display the Login section and the Contact Us section.
- Login Functionality:
  - Clicking Login should navigate to the /login page.
  - Users must enter their email and password, and log in using the Submit button.
  - User data is validated against data/users.json.
  - Error messages for incorrect states:
    - "Please enter your email"
    - "Please enter your password"
    - "Please enter both email and password"
    - "Invalid email"
    - "Invalid password"
  - On successful login, a success toast notification should display with "<user name> is logged in".
  - After 2 seconds, the user should be redirected to the / page.
- User Modal After Login:
  - Clicking the UserButton should open the UserModal with User Profile and Logout sections.
  - Clicking User Profile should navigate to /user-profile, displaying a user card with the user's name, email, date of birth (DOB), and current address.
  - Should Include a Back to Home button that navigates to the home page (/).
- Logout Functionality:
  - Clicking Logout in the User Modal should log the user out.
  - The User Modal should revert to displaying the Login section.


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
npm install && npm run test:task7
```
