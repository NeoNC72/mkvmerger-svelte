function concatTypedArrays(a:Uint8Array, b:Uint8Array) { // a, b TypedArray of same type
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const c = new (a.constructor)(a.length + b.length);
    c.set(a, 0);
    c.set(b, a.length);
    return c;
}

export default concatTypedArrays;