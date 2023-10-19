// stores/counter.ts
import type {Writable} from "svelte/store";
import {writable} from "svelte/store";
const databytes: Writable<Uint8Array> = writable(new Uint8Array());

export default databytes;