<script> import logo from "/logo.svg";
    import Button from "../components/Button.svelte"</script>
    import Router from "svelte-spa-router"

    <div class="flex fixed w-full">
      <img src={logo} class="ml-24 py-2" alt="logo" />
      <a href="/"><h1 class="text-2xl text-white font-bold mt-2 ml-4">AutoSummit</h1></a>
      <a href="/postventa"><span class="mx-6 ml-16 text-white mt-4 text-sm">Postventa</span></a> 
      <a href="/ventas"><span class="mx-6 text-white mt-4 text-sm">Ventas Corporativas</span></a>
      <a href="/sucursales"><span class="mx-6 text-white mt-4 text-sm">Sucursales</span></a>
      <a href="/financiamiento"><span class="mx-6 text-white mt-4 text-sm">Financiamiento</span></a>
      <Button />
    </div>