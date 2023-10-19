
<!-- FileInput.svelte -->

<script lang="ts">
import filescount from "./stores/filescount";
import databytes from "./stores/databytes";
import fileName from "./stores/fileName";
function handleClick(){
    filescount.set(0);

    // Create a Blob from Uint8Array
    const blob = new Blob([$databytes]);

    // Create a URL for the Blob
    const url = URL.createObjectURL(blob);

    // Create an anchor element for download
    const a = document.createElement('a');
    a.href = url;
    try{
        let name : string[] = $fileName.split(".")
        name[2];
        a.download = name[0] + name[1];
    }catch (error){
        a.download = "data.bin";
    }
     // Specify the file name here

    // Simulate a click to trigger download
    a.click();

    // Clean up
    URL.revokeObjectURL(url);
}
</script>

<main class="get-merge-container">
    <button class="btn waves-effect waves-light" on:click={handleClick}>Merge</button>
</main>

<style>
    @import 'materialize-css/dist/css/materialize.min.css';
    .get-merge-container {
        margin: 16px;
    }
</style>