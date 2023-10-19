<!-- App.svelte -->
<script>
    import FileInput from '../FileInput.svelte';
    import GetMerge from "../GetMerge.svelte";
    import filescount from "../stores/filescount";
</script>
  
  <main>
    <h1>File Input Example</h1>
    <FileInput />
    <FileInput />
    {#if $filescount == 2}
      <GetMerge />
    {/if}
  </main>

<style>
  @import 'materialize-css/dist/css/materialize.min.css';

</style>