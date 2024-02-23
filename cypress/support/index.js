import './commands';

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

Cypress.on('test:after:run', (test, runnable) => {
    if (test.state === 'failed') {
      console.log(`Test failed: ${test.title}`);
      console.log(test.err.message);
    } else if (test.state === 'passed') {
      console.log(`Test passed: ${test.title}`);
    }
});

