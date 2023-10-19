import {writable} from "svelte/store";
import type {Writable} from "svelte/store"
const filescount: Writable<number> = writable(0);

export default filescount;