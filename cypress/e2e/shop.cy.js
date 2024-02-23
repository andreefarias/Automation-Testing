import '../support';

describe('Shop', () => {

  beforeEach(() => {
    cy.blockAds(); // Bloqueio de anúncios
  });

  it('Comprar um item ', () => {
    // Dado um usuário acessando a loja do site 
    cy.visit('https://practice.automationtesting.in/shop/')

    // e Dado a escolha do produto
    cy.selectOneProduct('170')

    // e Dado o carrinho de produtos com um item
    cy.goToCart()

    // Quando finalizar os detalhes de pagamento
    cy.proceedToCheckout()

    cy.fillBillingDetails('André', 'Farias', 'Automation', 'andre@farias.com', '00123456789', 'Street', '1000', 'New York', '12345')

    // Então afirme que a compra foi feita com sucesso
    cy.orderReceived()
  })
})
