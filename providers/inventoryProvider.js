import inventory from './inventory';

/*
Inventory items must adhere to the following schema:

type Product {
  id: ID!
  categories: [String]!
  price: Float!
  name: String!
  image: String!
  description: String!
  currentInventory: Int!
  brand: String
}
*/

// getInventory() should get inventory from a API and it should return like ./inventory.js
async function getInventory() {
  return new Promise((resolve, reject) => {
    // const inventory = API.get(apiUrl)
    resolve(inventory)
  })
}

const DENOMINATION = '$'

export { DENOMINATION, getInventory as default } 
