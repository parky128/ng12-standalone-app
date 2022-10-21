import { DefaultRouteComponent} from './default-route.component'

describe('', () => {
  it('should mout', () => {
    cy.mount(DefaultRouteComponent);
  })

  it("should default to 0 ", () => {
    cy.mount(DefaultRouteComponent);
    cy.get('body').should("have.text", "0");
  });
})