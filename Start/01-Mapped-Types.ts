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

export interface IPreferencesParital  { 
    genres?: Genres[],
    singers?: Singer[],
    volume?: number
}

var partial : IPreferencesParital = {
    volume: 0
}

console.log(partial);