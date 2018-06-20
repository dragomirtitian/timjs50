interface Foo {
    bar: string;
    baz: number;
    qux: string;
}

let fooValues: Foo[keyof Foo];

let stringKey: { [P in keyof Foo] : Foo[P] extends string ? P : never }[keyof Foo];
stringKey = "bar";
// stringKey = "baz"; // This one we don't want
stringKey = "qux";
