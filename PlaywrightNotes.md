To run headless mode
    npx playwright test

To run specific test. Copy the relative path of a test.
    npx playwright test ./tests/firstTest.spec.ts

To run multiple tests
    npx playwright test firstTest.spec.ts secondTest.spec.ts
    or
    npx playwright test firstTest secondTest

To run in headed mode
    npx playwright test --headed
    or
    add Headless: false in playwright.config.ts

To run only in specific browser in headed mode
    npx playwright test firstTest --project=chromium --headed

To run in all the 3 browsers parallely
    npx playwright test workers 3

To run specific test function
    npx playwright test -g 'secondFunction'

To run in debug mode
    npx playwright test --project=chromium --debug

To autogenerate code
    npx playwright codegen