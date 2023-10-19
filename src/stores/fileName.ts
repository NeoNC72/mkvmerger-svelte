import {writable} from "svelte/store";
import type {Writable} from "svelte/store"
const fileName: Writable<string> = writable("");

export default fileName;