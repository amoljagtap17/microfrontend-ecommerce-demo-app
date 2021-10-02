import faker from 'faker'

const mount = (el) => {
  // const cartText = `<div>You have ${faker.random.number()} items in your cart!</div>`

  const cartText = `<div>You have ${faker.datatype.number()} items in your cart!</div>`

  // document.querySelector('#cart-dev').innerHTML = cartText
  el.innerHTML = cartText
}

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-cart')

  // Assuming our container does not have an element with id 'dev-products'
  if (el) {
    mount(el)
  }
}

export { mount }
