
<!-- FileInput.svelte -->

<script lang="ts">
	import databytes from "./stores/databytes";
	import filescount from "./stores/filescount";
	import lastname from "./stores/lastname";
	import concatTypedArrays from "$lib/concat";
	import fileName from "./stores/fileName";
    async function readFile(file: File): Promise<Uint8Array> {
        return new Promise<Uint8Array>((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (event: ProgressEvent<FileReader>) => {
                if (event.target && event.target.result instanceof ArrayBuffer) {
                    const arrayBuffer = event.target.result;
                    const uint8Array = new Uint8Array(arrayBuffer);
                    resolve(uint8Array);
                } else {
                    reject(new Error('Failed to read file as Uint8Array'));
                }
            };
            reader.onerror = (error) => {
                reject(error);
            };
            reader.readAsArrayBuffer(file);
        });
    }

	async function handleFileInput(event: null | Event & { currentTarget: EventTarget & HTMLInputElement; }) {

        if (event) {
			if (event.target) {
				if (event.currentTarget.files) {
					const file: File = event.currentTarget.files[0];

					if (file) {

						if (file.name != $lastname){
							fileName.set(file.name)
							databytes.set(concatTypedArrays($databytes, await readFile(file)));
							/*data.getReader().read().then((scc) => {
                                console.log(scc.value.length)
                                databytes.set(concatTypedArrays($databytes, scc.value));
							});*/
							lastname.set(file.name);
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