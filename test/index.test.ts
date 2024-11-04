import { config } from 'dotenv'
import { getAddressSearchResults } from '../src';
import { describe, it, expect } from '@jest/globals'
import { loadFixture } from './helpers'
import { jest } from '@jest/globals'
import { addressSearch } from '../src/tomtom'

config()


// NOTE: jest mocking is not working yet, may run out of time to finish off mocks and 100% coverage

describe('getAddressSearchResults()', () => {
    it('returns a promise', () => {
        jest.mock('../src/tomtom', () => ({
            addressSearch: jest.fn(() => Promise.resolve())
        }));

        const results = getAddressSearchResults('Smith St')
        expect(results).toBeInstanceOf(Promise)
    })

    it('returns expected response for "Smith St"', () => {
        const expected = loadFixture('./test/fixtures/expectedSearchResultsSmithStreet.json')
        jest.mock('../src/tomtom', () => ({
            addressSearch: jest.fn(() => Promise.resolve(expected))
        }));

        getAddressSearchResults('Smith St').then((results) => {
            expect(results).toEqual(expected)
        })
    })

    it('returns expected response for "20 Smith St Fitzroy"', () => {
        const expected = loadFixture('./test/fixtures/expectedSearchResults20SmithStreet.json')
        jest.mock('../src/tomtom', () => ({
            addressSearch: jest.fn(() => Promise.resolve(expected))
        }));

        getAddressSearchResults('20 Smith St Fitzroy').then((results) => {
            expect(results).toEqual(expected)
        })
    })
})
