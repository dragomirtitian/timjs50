var fields = {email: {$: 'test'}, password: {$: 1}};

let member = {$: 'test'}
type Unpack<T> = T extends { $: infer U} ? U : never;
let unpackMember: Unpack<typeof member>

function unpack<T>(obj: T) : { [ P in keyof T]: Unpack<T[P]> } {
    return  <any>null; // dummy implementation
}

var r = unpack(fields)