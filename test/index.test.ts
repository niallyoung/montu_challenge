import { config } from 'dotenv'
import { getAddressSearchResults } from '../src';
import { describe, it, expect, jest } from '@jest/globals'

config()

describe('getAddressSearchResults()', () => {
    it('returns a promise', () => {
        const results = getAddressSearchResults('Smith St')
        expect(results).toBeInstanceOf(Promise)
    })
})