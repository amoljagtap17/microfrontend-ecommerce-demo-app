import faker from 'faker'

const mount = (el) => {
  let products = ''

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName()

    products += `<div>${name}</div>`
  }

  // console.log('products : ', products)

  // document.querySelector('#dev-products').innerHTML = products
  el.innerHTML = products
}

// Context/ Situation #1
// We are running this file in development in isolation
// We are using our local index.html file
// which definitely had an id 'dev-products'
// we want to immediately render our app in that element
if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-products')

  // Assuming our container does not have an element with id 'dev-products'
  if (el) {
    mount(el)
  }
}

// Context/ Situation #2
// We are running this file in development or production
// through the CONTAINER app
// NO GUARANTEE that an element with an id of 'dev-products' exists
// we DO NOT WANT to immediately render the app
export { mount }
