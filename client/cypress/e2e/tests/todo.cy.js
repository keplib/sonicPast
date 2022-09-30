/// <reference types="cypress" />

describe("Playlist page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/playlists");
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
  it("should have a input", () => {
    cy.get("input").click();
  });
});
