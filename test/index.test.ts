import { config } from 'dotenv'
import { getAddressSearchResults } from '../src';
import { describe, it, expect } from '@jest/globals'
import { loadFixture } from './helpers'

config()

describe('getAddressSearchResults()', () => {
    it('returns a promise', () => {
        const results = getAddressSearchResults('Smith St')
        expect(results).toBeInstanceOf(Promise)
    })

    it('returns expected response for "Smith St"', () => {
        getAddressSearchResults('Smith St').then((results) => {
            const expected = loadFixture('./test/fixtures/expectedSearchResultsSmithStreet.json')
            expect(results).toEqual(expected)
        })
    })

    it('returns expected response for "20 Smith St Fitzroy"', () => {
        getAddressSearchResults('20 Smith St Fitzroy').then((results) => {
            const expected = loadFixture('./test/fixtures/expectedSearchResults20SmithStreet.json')
            expect(results).toEqual(expected)
        })
    })
})
