var foo = "bar"  // no-var error

function test(x) {  // missing param & return types
    return x
}

const unused = "test"  // unused var error

// @ts-expect-error
const wrongType: number = "string"  // type error