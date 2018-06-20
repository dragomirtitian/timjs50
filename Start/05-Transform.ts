var fields = {email: {$: 'test'}, password: {$: 1}};

let member = {$: 'test'}
type Unpack<T> = T
let unpackMember: Unpack<typeof member>

function unpack<T>(obj: T) : T {
    return  <any>null; // dummy implementation
}

var r = unpack(fields)