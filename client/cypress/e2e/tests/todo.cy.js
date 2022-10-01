/// <reference types="cypress" />

describe("Playlist page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/playlists");
    cy.get(".flex-col > :nth-child(3) > :nth-child(3)").as("allPlaylists");
    cy.get(".flex-col > :nth-child(3) > :nth-child(1)").as("favourites");
  });
  it("should have a button", () => {
    cy.get("button").should("exist");
    cy.get('[href="/create"]').click();
  });
  it("should have the words My favourites", () => {
    cy.contains("My favourites");
  });
  it("should hava an iframe", () => {
    cy.get("iframe").should("exist");
  });
  it("should hava logo", () => {
    cy.contains("soni").should("exist");
  });
  it("should be able to add to favourites", () => {
    cy.get("@allPlaylists").find("button").first().click();
  });
  it("should be able to remove from favourites", () => {
    cy.get("@favourites").find("button").first().click();
  });
});
describe("Login page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/login");
  });
  it("should have a button", () => {
    cy.get("button").should("exist");
  });
  it("should have logo", () => {
    cy.contains("soni");
  });
});
describe("Create page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/create");
  });
  it("should have logo", () => {
    cy.contains("soni");
  });
  it("should generate songs for playlist", () => {
    cy.get("input")
      .type("1970-10-06")
      .get(".mb-5 > .font-light")
      .click()
      .then(() => {
        cy.contains("NEIL DIAMOND");
      });
  });
});
