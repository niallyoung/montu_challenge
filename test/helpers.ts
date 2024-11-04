import fs from "fs";

export function loadFixture(filename: string) {
    const expected = JSON.parse(fs.readFileSync(filename, 'utf-8'))
    return expected.map(function (item) { return setNullsToUndefined(item) })
}

export function fail(message) {
    throw new Error(message);
}

const setNullsToUndefined = <T extends object>(obj: T): {
    [K in keyof T]: null extends T[K] ? (NonNullable<T[K]> | undefined) : T[K]
} => {
    for (const key in obj) {
        if (obj[key] === null) {
            obj[key] = undefined
        }
    }
    return obj as any
}