import { mount as productsMount } from 'products/ProductsIndex'
import { mount as cartMount } from 'cart/CartShow'

console.log('container!')

productsMount(document.querySelector('#container-dev-products'))
cartMount(document.querySelector('#container-dev-cart'))
