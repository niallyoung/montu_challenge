import { config } from 'dotenv'
import { addressSearch} from "../src/tomtom";
import { describe, it, expect } from '@jest/globals'

config()

describe('tomtom', () => {
    describe('addressSearch returns a promise', () => {
        it('returns a promise', () => {
            const results = addressSearch('Charlotte Street')
            expect(results).toBeInstanceOf(Promise)
        })
    })
})