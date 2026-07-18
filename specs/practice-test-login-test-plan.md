# Practice Test Automation Login Page Test Plan

## Application Overview

Detailed QA test plan for the Practice Test Automation login page, including functional, negative, and edge-case scenarios for authentication behavior, UI validation, and basic security/usability.

## Test Scenarios

### 1. Login Functionality

**Seed:** `tests/seed.spec.ts`

#### 1.1. Successful login with valid credentials

**File:** `specs/practice-test-login-test-plan.md`

**Steps:**
  1. Open the login page in a fresh browser session.
    - expect: The page loads successfully and displays the login form with Username, Password, and Submit controls.
  2. Enter the valid username student and the valid password Password123.
    - expect: The values appear correctly in the username and password fields.
  3. Click the Submit button.
    - expect: The application navigates to the logged-in success page.
    - expect: The success page displays a confirmation message such as Congratulations or successfully logged in.
    - expect: The Log out button is visible.

#### 1.2. Login with invalid username

**File:** `specs/practice-test-login-test-plan.md`

**Steps:**
  1. Open the login page in a fresh session.
    - expect: The login form is displayed.
  2. Enter an incorrect username such as incorrectUser and the correct password Password123.
    - expect: The values are accepted by the form fields.
  3. Click Submit.
    - expect: An error message is displayed.
    - expect: The error message text is Your username is invalid!

#### 1.3. Login with invalid password

**File:** `specs/practice-test-login-test-plan.md`

**Steps:**
  1. Open the login page.
    - expect: The login form is displayed.
  2. Enter the valid username student and an incorrect password such as incorrectPassword.
    - expect: The values are entered correctly.
  3. Click Submit.
    - expect: An error message is displayed.
    - expect: The error message text is Your password is invalid!

#### 1.4. Login with empty username and password

**File:** `specs/practice-test-login-test-plan.md`

**Steps:**
  1. Open the login page.
    - expect: The login form is displayed.
  2. Leave both fields empty.
    - expect: The fields remain empty.
  3. Click Submit.
    - expect: The form does not submit successfully.
    - expect: A validation or error message is shown, or the user is prevented from proceeding.

#### 1.5. Login with empty username only

**File:** `specs/practice-test-login-test-plan.md`

**Steps:**
  1. Open the login page.
    - expect: The form is displayed.
  2. Leave the username field empty and enter a valid password.
    - expect: The password field contains the entered value.
  3. Click Submit.
    - expect: Authentication is blocked.
    - expect: The user receives an appropriate validation message for the missing username.

#### 1.6. Login with empty password only

**File:** `specs/practice-test-login-test-plan.md`

**Steps:**
  1. Open the login page.
    - expect: The form is displayed.
  2. Enter a valid username and leave the password field empty.
    - expect: The username field contains the entered value.
  3. Click Submit.
    - expect: Authentication is blocked.
    - expect: The user receives an appropriate validation message for the missing password.

#### 1.7. Login with whitespace-only input

**File:** `specs/practice-test-login-test-plan.md`

**Steps:**
  1. Open the login page.
    - expect: The form is displayed.
  2. Enter whitespace characters in the username and password fields.
    - expect: The whitespace values are captured by the fields.
  3. Click Submit.
    - expect: The form is rejected or an error message is displayed.
    - expect: No successful login occurs.

#### 1.8. Login with long input values

**File:** `specs/practice-test-login-test-plan.md`

**Steps:**
  1. Open the login page.
    - expect: The form is displayed.
  2. Enter very long values in the username and password fields.
    - expect: The page handles the input without crashing or freezing.
  3. Click Submit.
    - expect: The application handles the input gracefully.
    - expect: The system either rejects the values with an error or prevents invalid submission.

#### 1.9. Login with special characters in credentials

**File:** `specs/practice-test-login-test-plan.md`

**Steps:**
  1. Open the login page.
    - expect: The form is displayed.
  2. Enter special characters such as !@#$%^&*() in the username and password fields.
    - expect: The characters are displayed correctly in the fields.
  3. Click Submit.
    - expect: The application responds consistently and does not break.
    - expect: The credentials are rejected unless the application explicitly supports them.

#### 1.10. Login with case-variation in credentials

**File:** `specs/practice-test-login-test-plan.md`

**Steps:**
  1. Open the login page.
    - expect: The form is displayed.
  2. Enter the username and password with altered casing, for example Student and Password123.
    - expect: The values appear as entered.
  3. Click Submit.
    - expect: The application behaves according to the expected case-sensitivity rules.
    - expect: If the system is case-sensitive, authentication should fail.

### 2. User Experience and Usability

**Seed:** `tests/seed.spec.ts`

#### 2.1. Keyboard navigation and form accessibility

**File:** `specs/practice-test-login-test-plan.md`

**Steps:**
  1. Open the login page.
    - expect: The username field can receive focus using the keyboard.
    - expect: The password field can receive focus using the keyboard.
    - expect: The Submit button can be activated using the keyboard.

#### 2.2. Browser refresh during form entry

**File:** `specs/practice-test-login-test-plan.md`

**Steps:**
  1. Enter partial credentials and refresh the browser.
    - expect: The form resets to a clean state or preserves behavior consistently based on the application design.

#### 2.3. Back and forward navigation after authentication attempt

**File:** `specs/practice-test-login-test-plan.md`

**Steps:**
  1. Attempt a login and then use the browser back and forward buttons.
    - expect: The application behaves consistently and does not enter an inconsistent state.

#### 2.4. Page layout and content validation

**File:** `specs/practice-test-login-test-plan.md`

**Steps:**
  1. Open the login page.
    - expect: All visible labels, headings, and instructional text are displayed correctly.
    - expect: The layout remains usable across common viewport sizes.

### 3. Security and Session Handling

**Seed:** `tests/seed.spec.ts`

#### 3.1. No authentication without valid credentials

**File:** `specs/practice-test-login-test-plan.md`

**Steps:**
  1. Attempt to access the success page directly without logging in.
    - expect: The system prevents unauthorized access or redirects the user appropriately.

#### 3.2. Logout behavior after successful login

**File:** `specs/practice-test-login-test-plan.md`

**Steps:**
  1. Log in successfully and then click Log out.
    - expect: The user is returned to a logged-out state and can no longer access protected content without re-authentication.

#### 3.3. Input handling for suspicious values

**File:** `specs/practice-test-login-test-plan.md`

**Steps:**
  1. Enter script-like or HTML-like values into the form fields.
    - expect: The application safely handles the input without breaking the page or executing unwanted scripts.

#### 3.4. Session persistence across tabs

**File:** `specs/practice-test-login-test-plan.md`

**Steps:**
  1. Log in successfully and open the page in another tab or window.
    - expect: The application maintains consistent authentication behavior and does not expose a broken or inconsistent session state.
