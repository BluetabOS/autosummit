import Home from './Home.svelte'
import Postventa from './Postventa.svelte'
import Ventas from './Ventas.svelte'
import Sucursales from './Sucursales.svelte'
import Financiamiento from './Financiamiento.svelte'
import Checkout from './Checkout.svelte'
import Catalog from './Catalog.svelte'
import Signin from './Signin.svelte'
import Signup from './Signup.svelte'

export default {
    '/':Home,
    '/ventas':Ventas,
    '/postventa':Postventa,
    '/sucursales':Sucursales,
    '/financiamiento':Financiamiento,
    '/checkout':Checkout,
    '/catalog':Catalog,
    '/signin':Signin,
    '/signup':Signup
}