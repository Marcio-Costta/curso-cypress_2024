/// <reference types="cypress" />


describe('realizar cadastro no Automation Exercise', () => {
    before(() => {
        cy.visit('https://www.automationexercise.com/');

    })

    it('Clicando no Botão Signup/Login' , () => {
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()

        // Preenchendo campo Name
        cy.get('[data-qa="signup-name"]').type('Bob Esponja')
            .should('have.value' , 'Bob Esponja');

        // Preenchendo campo Email adress    
        cy.get('[data-qa="signup-email"]').type('bob_esponja@hotmail.com')
            .should('have.value' , 'bob_esponja@hotmail.com'); 
        
        // clicando no botão Signup    
        cy.get('[data-qa="signup-button"]').click();
        
        // Finalizando Cadastro Usuário

        // Selecionando botões de Gênero
        cy.get('#id_gender1').click()
            .should('be.checked');

        cy.get('#id_gender2').should('not.be.checked');
        
        // Preenchendo campo Password
        cy.get('[data-qa="password"]').type('123@calca')
            .should('have.value' , '123@calca');
        
        // Selecionando data Date of Birth
        cy.get('[data-qa="days"]').select('10').should('have.value' , '10');
        cy.get('[data-qa="months"]').select('December').should('have.value' , '12');
        cy.get('[data-qa="years"]').select('1997').should('have.value' , '1997');
        cy.get('#newsletter').click().should('be.checked');
        cy.get('#optin').should('not.be.checked');
        
        // Prrenchendo Adress Information
        cy.get('[data-qa="first_name"]').type('Bob Esponja').should('have.value' , 'Bob Esponja');
        cy.get('[data-qa="last_name"]').type('Calça Quadrada').should('have.value','Calça Quadrada');
        cy.get('[data-qa="company"]').type('Siri Cascudo').should('have.value' , 'Siri Cascudo');
        cy.get('[data-qa="address"]').type('Fenda do Biquini').should('have.value' , 'Fenda do Biquini');
        cy.get('[data-qa="country"]').select('Australia').should('have.value' , 'Australia');
        cy.get('[data-qa="state"]').type('Victoria').should('have.value' , 'Victoria');
        cy.get('[data-qa="city"]').type('Melborne').should('have.value' , 'Melborne');
        cy.get('[data-qa="zipcode"]').type('13').should('have.value' , '13');
        cy.get('[data-qa="mobile_number"]').type('21965662000').should( 'have.value', '21965662000');
        cy.get('[data-qa="create-account"]').click();

        // Validando criação da Conta
        cy.get('b').should('have.text' , 'Account Created!');
        
    })  

})

describe.only('Realizar Login' , () => {

    before(() => {
        cy.visit('https://www.automationexercise.com/');
    })

    it('realizar login com e-mail e senha corretos' , () => {
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
        cy.get('.login-form > h2').should('have.text' , 'Login to your account');
        cy.get('[data-qa="login-email"]').type('bob_esponja@hotmail.com').should('have.value' ,'bob_esponja@hotmail.com');
        cy.get('[data-qa="login-password"]').type('123@calca').should('have.value' ,'123@calca');
        cy.wait(2000);
        cy.get('[data-qa="login-button"]').click();
        cy.get(':nth-child(10) > a').should('have.text' , ' Logged in as Bob Esponja');
    })

    it('realizar login com e-mail e senha incorretos ' , () => {
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
        cy.get('.login-form > h2').should('have.text' , 'Login to your account');
        cy.get('[data-qa="login-email"]').type('bob_esponja@hotmail.com').should('have.value' ,'bob_esponja@hotmail.com');
        cy.get('[data-qa="login-password"]').type('124@calca').should('have.value' ,'124@calca');
        cy.wait(2000);
        cy.get('[data-qa="login-button"]').click();
        cy.get('.login-form > form > p').should('have.text' , 'Your email or password is incorrect!');

    })

    it('Realizar Logout' , () => {
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
        cy.get('.login-form > h2').should('have.text' , 'Login to your account');
        cy.get('[data-qa="login-email"]').type('bob_esponja@hotmail.com').should('have.value' ,'bob_esponja@hotmail.com');
        cy.get('[data-qa="login-password"]').type('123@calca').should('have.value' ,'123@calca');
        cy.wait(2000);
        cy.get('[data-qa="login-button"]').click();
        cy.get(':nth-child(10) > a').should('have.text' , ' Logged in as Bob Esponja');
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
        cy.get('.signup-form > h2').should('have.text' , 'New User Signup!');
    })

    it('Realizar Cadastro com email já existente' , () => {
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
        cy.get('[data-qa="signup-name"]').type('Bob Esponja').should('have.value' , 'Bob Esponja');
        cy.get('[data-qa="signup-email"]').type('bob_esponja@hotmail.com').should('have.value' , 'bob_esponja@hotmail.com');
        cy.get('[data-qa="signup-button"]').click();
        cy.get('.signup-form > form > p').should('have.text' , 'Email Address already exist!');
    })

    it('Contact Us' , () => {
        cy.get('.shop-menu > .nav > :nth-child(8) > a').click();
        cy.get('.col-sm-12 > .title').should('have.text' ,'Contact Us');
        cy.get('[data-qa="name"]').type('Bob Esponja').should('have.value' , 'Bob Esponja');
        cy.get('[data-qa="email"]').type('bob_esponja@hotmail.com').should('have.value','bob_esponja@hotmail.com');
        cy.get('[data-qa="subject"]').type('teste').should('have.value' , 'teste');
        cy.get('[data-qa="message"]').type('Sugestao').should('have.value' , 'Sugestao');
        cy.get(':nth-child(6) > .form-control').click();
        cy.get('[data-qa="submit-button"]').click();
    })

    it('Verificar Casos de Testes' , () => {
        cy.get('.shop-menu > .nav > :nth-child(5) > a').click();
        cy.wait(3000);
        cy.get('b').should('have.text' , 'Test Cases');
        cy.get('span').should('have.text' , 'Below is the list of test Cases for you to practice the Automation. Click on the scenario for detailed Test Steps:');
    })

    it('Verificar pagina All Products' , () => {
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
        cy.get('.title').should('have.text' , 'All Products');
        cy.get('#accordian').should('exist');
        cy.wait(2000);
        cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click();
        cy.get('.product-information > h2').should('have.text' , 'Blue Top');
        cy.get('.product-information > :nth-child(3)').should('have.text', 'Category: Women > Tops');
        cy.get(':nth-child(5) > span').should('have.text' , 'Rs. 500');
        cy.get('.product-information > :nth-child(6)').should('have.text' , 'Availability: In Stock');
        cy.get('.product-information > :nth-child(7)').should('have.text' , 'Condition: New');
        cy.get('.product-information > :nth-child(8)').should('have.text' ,'Brand: Polo');
    })

    it('Pesquisar um produto' , () => {
        cy.wait(2000);
        cy.get('a > img').should('exist');
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
        cy.wait(2000)
        cy.get('.title').should('have.text' , 'All Products');
        cy.get('#sale_image').should('exist');
        cy.get('#search_product').type('Summer White Top').should('have.value' , 'Summer White Top');
        cy.get('#submit_search').click();
        cy.get('.title').should('have.text' , 'Searched Products');
        cy.wait(1000);
        cy.get('.productinfo > p').should('have.text' , 'Summer White Top');
  
    })

    it('Verificar Subscricao' , () => {
        cy.wait(2000);
        cy.get('#susbscribe_email').type('bob_esponja@hotmail.com').should('have.value' , 'bob_esponja@hotmail.com');
        cy.get('#subscribe').click();
        cy.wait(4000);
        cy.get('.alert-success').should('exist')
            .and('have.text' , 'You have been successfully subscribed!');

    })

    it('Verificar Subscricao Cart Page' , () => {
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
        cy.get('h2').should('exist').and('have.text' , 'Subscription');
        cy.get('#susbscribe_email').type('bob_esponja@hotmail.com').should('have.value' , 'bob_esponja@hotmail.com');
        cy.get('#subscribe').click();
        cy.wait(2000);
        cy.get('.alert-success').should('exist').and('have.text' , 'You have been successfully subscribed!');
    })

    it('Add produtos no carrinho' , () => {
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
        cy.get('#sale_image').should('exist');
        cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
        cy.on('window:alert' , msg => {
            expect(msg).to.be.equal('Your product has been added to cart.');
        })
        cy.get('.modal-footer > .btn').click();
        cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
        cy.get('u').click();
        cy.get('#product-1 > .cart_description').should('exist');
        cy.get('#product-2 > .cart_description').should('exist');
        cy.get('#product-1 > .cart_price > p').should('have.text' , 'Rs. 500');
        cy.get('#product-2 > .cart_price > p').should('have.text' , 'Rs. 400');
        cy.get('#product-1 > .cart_quantity > .disabled').should('have.length' , 1);
        cy.get('#product-2 > .cart_quantity > .disabled').should('have.length' , 1);

    })

    it.only('Place Order: Register while Checkout' , () => {
        cy.get('a > img').should('exist');
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
        cy.get('.title').should('have.text' , 'All Products');
        cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
        cy.get('.modal-footer > .btn').click();
        cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
        cy.get('u').click();

        cy.get('.active').should('exist').and('have.text' , 'Shopping Cart');
        cy.get('.col-sm-6 > .btn').click();
        cy.get('.modal-body > :nth-child(2) > a > u').click();

        cy.get('.login-form > h2').should('exist').and('have.text' , 'Login to your account');
        //123@calca
        //bob_esponja@hotmail.com
        cy.get('[data-qa="login-email"]').type('bob_esponja@hotmail.com');
        cy.get('[data-qa="login-password"]').type('123@calca');
        cy.get('[data-qa="login-button"]').click();

        cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
        cy.get('.active').should('exist').and('have.text' , 'Shopping Cart');
        cy.get('.col-sm-6 > .btn').click();

        cy.get('.active').should('exist').and('have.text' , 'Checkout');
        cy.get(':nth-child(7) > .btn').click();
        cy.get('[data-qa="name-on-card"]').type('BOB ESPONJA');
        

    })

})