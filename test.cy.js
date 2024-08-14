describe('',()=>{
    before(()=>{
        cy.visit("https://www.google.in")
    })

    it("sudo",()=>{
        cy.get("#gLFyf").type("Cypress{enter}")

        //Verifies the first option has text cypress
        cy.get("span[class='VuuXrf']").should('have.text','Cypress')

    });

    // 2.CSS , xpath, id, class, div , span

    // 4.Cypress file-upload, mochawesome reports

    //6. ls , pwd , cd , mkdir , rm file_name , gzip file_name ,unzip file_name


})