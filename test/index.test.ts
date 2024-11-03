import { config } from 'dotenv'
import { getAddressSearchResults } from '../src';
import { describe, it, expect, jest } from '@jest/globals'

config()

describe('getAddressSearchResults()', () => {
    it('returns a promise', () => {
        const results = getAddressSearchResults('Smith St')
        expect(results).toBeInstanceOf(Promise)
    })

    it('returns expected response', () => {
        const expectedSearchResults = [{"country": undefined, "countryCode": undefined, "freeformAddress": undefined, "municipality": undefined, "placeId": "63qM_LxrCZucq5ey5bTAMQ", "streetNumber": undefined}, {"country": undefined, "countryCode": undefined, "freeformAddress": undefined, "municipality": undefined, "placeId": "rVyABIibpbf2U-q6U2xHvw", "streetNumber": undefined}, {"country": undefined, "countryCode": undefined, "freeformAddress": undefined, "municipality": undefined, "placeId": "NXhntTM0ZQLbE8cqW3x6LA", "streetNumber": undefined}, {"country": undefined, "countryCode": undefined, "freeformAddress": undefined, "municipality": undefined, "placeId": "rvt6pTcBaV1KrFIlHq0HGA", "streetNumber": undefined}, {"country": undefined, "countryCode": undefined, "freeformAddress": undefined, "municipality": undefined, "placeId": "9_Uc2sMU84tPmk27f88Enw", "streetNumber": undefined}, {"country": undefined, "countryCode": undefined, "freeformAddress": undefined, "municipality": undefined, "placeId": "QOWd4reSeyxQTR33cJgHqA", "streetNumber": undefined}, {"country": undefined, "countryCode": undefined, "freeformAddress": undefined, "municipality": undefined, "placeId": "EOP91AcLD0FsiDAyi9DrPA", "streetNumber": undefined}, {"country": undefined, "countryCode": undefined, "freeformAddress": undefined, "municipality": undefined, "placeId": "UP-aR3bVFUMbg13oT92X7Q", "streetNumber": undefined}, {"country": undefined, "countryCode": undefined, "freeformAddress": undefined, "municipality": undefined, "placeId": "LXQ1OlxTry9T7_rXvVzFyQ", "streetNumber": undefined}, {"country": undefined, "countryCode": undefined, "freeformAddress": undefined, "municipality": undefined, "placeId": "6IPNxPwLCWJacS-rCdanGA", "streetNumber": undefined}]

        getAddressSearchResults('Smith St').then((response) => {
            expect(response).toEqual(expectedSearchResults)
        })
    })
})