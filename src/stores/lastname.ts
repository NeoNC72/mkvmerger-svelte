import {writable} from "svelte/store";
import type {Writable} from "svelte/store"
const lastname: Writable<string> = writable("");

export default lastname;