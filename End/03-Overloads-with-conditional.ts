function withFoo<T extends boolean>(p: T, foo: T extends true ? Object: any[] ){

}
withFoo(true, {})
withFoo(false, [])

function getData<T extends boolean>(obj: T): T extends true ? Object : any[];
function getData(): any[];
function getData(obj?: boolean): Object | any[] {
    if (obj) {
        return {};
    } else {
        return [];
    }
}

getData(true)
getData(false);

declare let bVar : boolean;
getData(bVar)