<!-- FileInput.svelte -->
<script lang="ts">

    import type { ChangeEventHandler } from 'svelte/elements';

	let selectedFile: File | null = null;

	function handleFileInput(event: null | Event & { target: EventTarget & HTMLInputElement }) {
		if (event) {
			if (event.target) {
				if (event.target.files) {
					var file: File = event.target.files[0];
					if (file) {
						selectedFile = file;
					}
				}
			}
		}
	}
</script>

<main>
    <input type="file" on:change={handleFileInput} />
	{#if selectedFile}
		<p>Selected File: {selectedFile.name}</p>
	{/if}
</main>
