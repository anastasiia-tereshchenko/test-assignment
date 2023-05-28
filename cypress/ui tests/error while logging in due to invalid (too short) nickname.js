describe("error due to invalid nickname", function () {
        it("error", function() {
            
            cy.visit("https://demo.bombay.live/operator/bombaydemo/bombay-live-lobby/fun")
            cy.wait(4000)
            //I used a cypress-iframe plugin to identify elements within the page
            cy.frameLoaded('#iframeId')
            
            //verifying blocking background that includes popup appeared
            cy.iframe('#iframeId').find('div')
            .should('have.class', 'modal-background-overlay username-wrapper').should('be.visible')
            
            //entering invalid (less then 4 characters) password
            cy.iframe('#iframeId').find('[data-test-id="entry-username-input"]').type('123') 
            cy.iframe('#iframeId').find('[data-test-id="save-username-button"]').click()

           //verifying error message appeared
            cy.iframe('#iframeId').find('[data-test-id="username-wrong-length-error"]').should('be.visible')

            //verifying username popup is still present
            cy.iframe('#iframeId').find('[data-test-id="username-popup"]').should('be.visible')

            
           
            
    
        })
    
})