interface Foo {
    bar: string;
    baz: number;
    qux: string;
}

let stringKey: keyof Foo;
stringKey = "bar";
stringKey = "baz"; // This one we don't want
stringKey = "qux";
