describe("cypress todo", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  const newTodo = "NewTodo";

  it("renders the default elements on the screen", () => {
    cy.get('[data-cy="cypress-title"]')
      .should("exist")
      .should("have.text", "TODO");
  });

  it("allow adding a new todo item", () => {
    cy.get('[data-cy="TodoTitleField"]').type(`${newTodo}{enter}`);

    cy.get('[data-cy="TodoItem"]').should("have.length.greaterThan", 0);
    cy.get('[data-cy="TodoItem"]').last().contains(newTodo);
  });

  it("verifies that the input field is cleared after adding a todo", () => {
    cy.get('[data-cy="TodoTitleField"]').type(`${newTodo}{enter}`);
    cy.get('[data-cy="TodoTitleField"]').should("have.value", "");
  });

  it("allows deleted element", () => {
    cy.get('[data-cy="TodoTitleField"]').type(`${newTodo}{enter}`);

    cy.get('[data-cy="TodoDelete"]').click();
    cy.get('[data-cy="TodoItem"]').should("not.exist");
  });

  it("verify checked todos", () => {
    cy.get('[data-cy="TodoTitleField"]').type(`${newTodo}{enter}`);
    cy.get('[data-cy="TodoStatus"]').should("not.be.checked");
    cy.get('[data-cy="TodoStatus"]').click();
    cy.get('[data-cy="TodoStatus"]').should("be.checked")
  });
});
