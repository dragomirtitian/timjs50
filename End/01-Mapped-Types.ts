interface Genres  {
    name: string;
}
interface Singer {
    name: string;
}
export interface IPreferences { 
    genres: Genres[],
    singers: Singer[],
    volume: number
}

export interface IPreferencesPartial  { 
    genres?: Genres[],
    singers?: Singer[],
    volume?: number
}

let p: { [P in keyof IPreferences]?: IPreferences[P] }
let v: IPreferences['genres']
type MyPartial<T> = { [P in keyof T]?: T[P] };

var partial : Partial<IPreferences> = {
    volume: 0
}

console.log(partial);