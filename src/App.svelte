<script>
  import Header from "./layouts/Header.svelte";
  import router from './routes/router'
  import Router from 'svelte-spa-router'
  import Navbar from './layouts/NavBar.svelte'
</script>
<Header />
<Navbar />
<Router {router} />

