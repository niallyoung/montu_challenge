import { addressSearch} from '../src/tomtom';
import { config } from 'dotenv'
import { describe, expect, it } from '@jest/globals'
import fs from 'fs'

// import { jest } from '@jest/globals'
// import axios from 'axios'
// const mockAxios = axios as jest.Mocked<typeof axios>;
// jest.mock('axios')

// --------------------------------------------------------------------------
// NOTE: had trouble mocking out axios response data, tried about half a dozen different patterns but nothing successful yet
//   will keep trying, but may run out of time here to get back to 100% coverage (trivial once I can inject)
// --------------------------------------------------------------------------

config()
const key = process.env.TOMTOM_API_KEY;

// TODO: unmocked tests, migrate these to be future integration/smoke "live" tests, and replace with 100% mocked fixtures

describe('addressSearch()', () => {
    // TODO mock out axios response
    it('returns a promise', () => {
        const searchResults = addressSearch({key, countrySet: 'AU', address: 'Smith Street'})
        expect(searchResults).toBeInstanceOf(Promise)
    })

    it('returns a promise that resolves to a value', () => {
        // TODO mock out axios response
        const searchResults = addressSearch({key, countrySet: 'AU', address: 'Smith Street'})
        const expected = loadFixture('./test/fixtures/expectedSearchResultsSmithStreet.json')
        expect(searchResults).resolves.toEqual(expected)
    })

    // TODO test coverage finishing off the rest of tomtom.ts

    // it('catches errors and returns a rejected promise', () => {
    //     fail('not yet covered')
    //     // missing coverage from tomtom.ts
    //     // 19: } catch (error) {
    //     // 20:     return Promise.reject(error)
    //     // 21: }
    // })

    // it('catches undefined and returns a rejected promise', () => {
    //     fail('not yet covered')
    //     // 23: if (response === undefined) {
    //     // 24:     return Promise.reject('response not found')
    //     // 25: }
    // })

    // it('maps all results and returns a promise to resolve', async () => {
    //     fail('not yet covered')
    //     // 27: const results = response.data.results.map(function (result) {
    //     // 28:     const searchResult: SearchResult = {
    //     // 29:         streetNumber: result.address.streetNumber,
    //     // 30:         streetName: result.address.streetName,
    //     // 31:         municipality: result.address.municipality,
    //     // 32:         country: result.address.country,
    //     // 33:         freeformAddress: result.address.freeformAddress,
    //     // 34:         score: result.score,
    //     // 35:     }
    //     // 36:     return searchResult
    //     // 37: })
    //     // 38:
    //     // 39: return new Promise(function (resolve) { resolve(results) })
    // })
})

// describe('with mocked axios data, addressSearch()', () => {
//     const expected = loadFixture('./test/fixtures/mockResults.json')
//
//     beforeEach(() => {
//         // TypeError: mockAxios.get.mockResolvedValue is not a function
//         // mockAxios.request.mockResolvedValue({ data: { results: expected }})
//
//         // TypeError: mockAxios.request.mockImplementation is not a function
//         // mockAxios.request.mockImplementation(() =>
//         //     Promise.resolve({ data: { results: expected }})
//         // );
//
//         // TypeError: mockAxios.request.mockImplementation is not a function
//         mockAxios.request.mockImplementation(() : Promise<any> => Promise.resolve({ data: { results: expected }}))
//     });
//
//     it('returns the expected results', () => {
//         const searchResults = addressSearch({key, countrySet: 'AU', address: 'Smith St'})
//         // expect(axios.get).toHaveBeenCalledTimes(1);
//         expect(searchResults).resolves.toContain({
//             streetNumber: "fake-street-number-1",
//             country: "fake-country-1",
//             freeformAddress: "fake-free-form-address-1",
//             municipality: "fake-municipality-1"
//         })
//     })
// })

function loadFixture(filename: string) {
    const expected = JSON.parse(fs.readFileSync(filename, 'utf-8'))
    return expected.map(function (item) { return setNullsToUndefined(item) })
}

function fail(message) {
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