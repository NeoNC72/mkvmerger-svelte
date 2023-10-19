
<!-- FileInput.svelte -->

<script lang="ts">
	import databytes from "./stores/databytes";
	import filescount from "./stores/filescount";
	import lastname from "./stores/lastname";
	import concatTypedArrays from "$lib/concat";
	import fileName from "./stores/fileName";

	let selectedFile: File | null = null;


	function handleFileInput(event: null | Event & { currentTarget: EventTarget & HTMLInputElement; }) {
		if (event) {
			if (event.target) {
				if (event.currentTarget.files) {
					const file: File = event.currentTarget.files[0];

					if (file) {

						if (file.name != $lastname){
							fileName.set(file.name)
							const data = file.stream();
							console.log(data.getReader().read().then((scc) => {
								databytes.set(concatTypedArrays($databytes, scc.value));
							}));
							lastname.set(file.name)
							filescount.set($filescount + 1);
						}

					}
				}
			}
		}
	}
</script>

<main class="file-input-container">
    <div class="input-field">
        <input type="file" class="validate" on:change={handleFileInput} />
    </div>
</main>


<style>
    @import 'materialize-css/dist/css/materialize.min.css';

    .file-input-container {
        margin: 36px;
    }
</style>