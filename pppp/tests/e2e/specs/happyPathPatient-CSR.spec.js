// https://docs.cypress.io/api/introduction/api.html
/* eslint-disable jest/valid-expect */
/* eslint-disable jest/valid-expect-in-promise */

const testYear = (new Date().getFullYear()) - 1;
const backendLastName = "GOTTNER"
const backendFirstName = "MICHAEL"
const backendPractitionerNumber = "00001"

describe('Pay Patient', () => {
  it('follows the happy path on the CSR url', () => {
    cy.visit('/pay-patient')
    //Claim Count
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/pppp/pay-patient");
    });

    cy.get("[data-cy=captchaInput]").type("irobot");
    cy.get("[data-cy=consentCheckbox]").click();
    cy.get("[data-cy=consentContinue]").click();

    cy.get("select")
    .find("option[data-cy=MedicalClaim1]")
    .then(($el) => $el.get(0).setAttribute("selected", "selected"))
    .parent()
    .trigger("change");

    cy.get("[data-cy=continueBar]").click();

    //Main Form
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/pppp/pay-patient/main-form");
    });

    cy.get("[data-cy=PHN]").type("9353 166 544");
    cy.get("[data-cy=patientFirstName]").type("Firstname");
    cy.get("[data-cy=patientLastName]").type("Lastname");

    cy.get("select")
      .find("option[data-cy=patientBirthDateMonth0]")
      .then(($el) => $el.get(0).setAttribute("selected", "selected"))
      .parent()
      .trigger("change");
    cy.get("[data-cy=patientBirthDateDay]").type("11");
    cy.get("[data-cy=patientBirthDateYear]").type(testYear);

    cy.get("[data-cy=motorVehicleAccidentis-vehicle-accident-n]").click({force: true}) 

    cy.get("select")
      .find("option[data-cy=serviceDate0Month0]")
      .then(($el) => $el.get(0).setAttribute("selected", "selected"))
      .parent()
      .trigger("change");
    cy.get("[data-cy=serviceDate0Day]").type("11");
    cy.get("[data-cy=serviceDate0Year]").type(testYear);
    cy.get("[data-cy=numberOfServices0]").type("1");
    cy.get("[data-cy=feeItem0]").type("00010");
    cy.get("[data-cy=amountBilled0]").type("1.00");
    cy.get("[data-cy=diagnosticCode0]").type("001");

    cy.get("select")
      .find("option[data-cy=serviceLocationCode01]")
      .then(($el) => $el.get(0).setAttribute("selected", "selected"))
      .parent()
      .trigger("change");

    cy.get("select")
      .find("option[data-cy=submissionCode0]")
      .then(($el) => $el.get(0).setAttribute("selected", "selected"))
      .parent()
      .trigger("change");

    cy.get("[data-cy=addressOwneraddress-owner-patient]").click({force: true});

    cy.get("[data-cy=streetName]").type("Fake street");
    cy.get("[data-cy=cityName]").type("Fakesville");
    cy.get("[data-cy=postalCode]").type("V1A1A1");

    cy.get("[data-cy=practitionerLastName]").type(backendLastName);
    cy.get("[data-cy=practitionerFirstName]").type(backendFirstName);
    cy.get("[data-cy=paymentNumber]").type(backendPractitionerNumber);
    cy.get("[data-cy=practitionerNumber]").type(backendPractitionerNumber);

    cy.get("[data-cy=continueBar]").click();

    //Review page
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/pppp/pay-patient/review");
    });

    cy.get("[data-cy=continueBar]").click();

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/pppp/pay-patient/submission");
    });
  })
})
