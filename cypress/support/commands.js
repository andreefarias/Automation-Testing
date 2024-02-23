Cypress.Commands.add('blockAds', () => {
    cy.intercept('GET', '**/googleads.g.doubleclick.net/**', (req) => {
        req.reply('');
    });
});

Cypress.Commands.add('selectOneProduct', (number) => {
    cy.get(`.post-${number} > .button`).click()
});

Cypress.Commands.add('goToCart', () => {
    cy.reload();
    cy.get('i[class*="shopping-cart"]').click()
});

Cypress.Commands.add('proceedToCheckout', () => {
    cy.contains('a', 'Proceed to Checkout').click()
});

Cypress.Commands.add('fillBillingDetails', (firstName, lastName, company, email, phone, address1, address2, city, postcode) => {
    cy.get('#billing_first_name').type(firstName)
    cy.get('#billing_last_name').type(lastName)
    cy.get('#billing_company').type(company)
    cy.get('#billing_email').type(email)
    cy.get('#billing_phone').type(phone)
    cy.get('#billing_address_1').type(address1)
    cy.get('#billing_address_2').type(address2)
    cy.get('#billing_city').type(city)
    cy.get('#billing_postcode').type(postcode)
    
    cy.get('#place_order').click();
});

Cypress.Commands.add('orderReceived', () => {
    cy.get('.woocommerce-thankyou-order-received').should('contain.text', 'Thank you. Your order has been received.');
});