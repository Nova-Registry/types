export type StringMap<T> = {
    [key: string]: T;
}

export type NumberMap<T> = {
    [key: number]: T;
}

export type SymbolMap<T> = {
    [key: symbol]: T;
}

export type Optional<T> = T | null;