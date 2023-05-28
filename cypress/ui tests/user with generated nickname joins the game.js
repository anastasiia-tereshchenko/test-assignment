
describe("Log in and join the table", function () {
    it("Log in", function() {
        
        cy.visit("https://demo.bombay.live/operator/bombaydemo/bombay-live-lobby/fun")
        cy.wait(4000)
        //I used a cypress-iframe plugin to identify elements within the page
        cy.frameLoaded('#iframeId')
       
        //verifying blocking background that includes popup is presented
        cy.iframe('#iframeId').find('div')
        .should('have.class', 'modal-background-overlay username-wrapper').should('be.visible')
        //using the button for generating a nickname
        cy.iframe('#iframeId').find('[data-test-id="generate-username-button"]').click()
        cy.iframe('#iframeId').find('[data-test-id="save-username-button"]').click()
        
        //verifying username popup was closed as generated nickname is valid
        cy.get('[data-test-id="username-popup"]').should('not.exist')

        //verifying logged in user can join the table
        cy.iframe('#iframeId').contains('Join table').click()

        //verifying the game was opened by (video is running)
        cy.iframe('#iframeId').find('[data-testid="VideoComponentRender"]').should('be.visible')
    })
})
