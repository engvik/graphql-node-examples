import gql from 'graphql-tag';

function createTopping(name) {
  return gql(`
    mutation {
      createTopping(input: {
        name: "${name}"
    }) {
        id
        name
      }
    }
  `);
}

function updateTopping(id, name) {
  return gql(`
    mutation {
      updateTopping(id: "${id}", input: {
        name: "${name}"
      }) {
        id
        name
      }
    }
  `);
}

function createPizza(name, toppings) {
  let stringToppings = '';

  toppings.forEach((topping) => stringToppings += `{ id: "${topping}" }`)

  return gql`
    mutation {
      createPizza(
        input: {
          name: "${name}"
          toppings: [
            ${stringToppings}
          ]
        }) {
        id
        name
        toppings {
          name
        }
      }
    }
  `;
}

export {
  createTopping,
  updateTopping,
  createPizza,
};