function getData(obj: true): Object;
function getData(obj: false): any[];
function getData(obj: boolean): Object | any[];
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