import { config } from 'dotenv'
import { getAddressSearchResults } from '../src';
import { describe, it, expect } from '@jest/globals'

config()

describe('index.ts', () => {
    describe('getAddressSearchResults returns a promise', () => {
        it('returns a promise', () => {
            const results = getAddressSearchResults('')
            expect(results).toBeInstanceOf(Promise)
        })
    })
})