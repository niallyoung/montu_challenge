import { config } from 'dotenv'
import { getAddressSearchResults } from '../src';
import { describe, it, expect } from '@jest/globals'

config()

describe('getAddressSearchResults()', () => {
    it('returns a promise', () => {
        const results = getAddressSearchResults('Smith St')
        expect(results).toBeInstanceOf(Promise)
    })

    it('returns expected response for "Smith St"', () => {
        getAddressSearchResults('Smith St').then((results) => {
            expect(results).toEqual(expectedSearchResultsSmithStreet)
        })
    })

    it('returns expected response for "20 Smith St Fitzroy"', () => {
        getAddressSearchResults('20 Smith St Fitzroy').then((results) => {
            expect(results).toEqual(expectedSearchResults20SmithStreet)
        })
    })
})

const expectedSearchResultsSmithStreet = [
    {
        streetNumber: undefined,
        streetName: 'Victoria Parade',
        municipality: 'Melbourne',
        country: 'Australia',
        freeformAddress: 'Victoria Parade, Collingwood, VIC, 3066',
        score: 4.6736936569
    },
    {
        streetNumber: undefined,
        streetName: 'Smith Street',
        municipality: 'Darwin',
        country: 'Australia',
        freeformAddress: 'Smith Street, Darwin, NT',
        score: 4.6116523743
    },
    {
        streetNumber: undefined,
        streetName: 'Smith Street',
        municipality: 'Alice Springs',
        country: 'Australia',
        freeformAddress: 'Smith Street, Alice Springs, NT',
        score: 4.6116523743
    },
    {
        streetNumber: undefined,
        streetName: 'Smith Street',
        municipality: 'Gold Coast',
        country: 'Australia',
        freeformAddress: 'Smith Street, Gold Coast, QLD',
        score: 4.6116523743
    },
    {
        streetNumber: undefined,
        streetName: 'Smith Street',
        municipality: 'Brisbane',
        country: 'Australia',
        freeformAddress: 'Smith Street, Cleveland, QLD',
        score: 4.6116523743
    },
    {
        streetNumber: undefined,
        streetName: 'Smith Street',
        municipality: 'Hervey Bay',
        country: 'Australia',
        freeformAddress: 'Smith Street, Urangan, QLD',
        score: 4.6116523743
    },
    {
        streetNumber: undefined,
        streetName: 'Smith Street',
        municipality: 'Brisbane',
        country: 'Australia',
        freeformAddress: 'Smith Street, Brisbane, QLD',
        score: 4.6116523743
    },
    {
        streetNumber: undefined,
        streetName: 'Smith Street',
        municipality: 'Melbourne',
        country: 'Australia',
        freeformAddress: 'Smith Street, Melbourne, VIC',
        score: 4.6116523743
    },
    {
        streetNumber: undefined,
        streetName: 'Smith Street',
        municipality: 'Melbourne',
        country: 'Australia',
        freeformAddress: 'Smith Street, Melbourne, VIC',
        score: 4.6116523743
    },
    {
        streetNumber: undefined,
        streetName: 'Smith Street',
        municipality: 'Melbourne',
        country: 'Australia',
        freeformAddress: 'Smith Street, Port Melbourne, VIC',
        score: 4.6116523743
    }
]

const expectedSearchResults20SmithStreet = [
    {
        streetNumber: undefined,
        streetName: 'Smith Street',
        municipality: 'Melbourne',
        country: 'Australia',
        freeformAddress: 'Smith Street, Fitzroy, VIC, 3065, 3066',
        score: 6.4523925781
    },
    {
        streetNumber: undefined,
        streetName: 'Little Smith Street',
        municipality: 'Melbourne',
        country: 'Australia',
        freeformAddress: 'Little Smith Street, Fitzroy, VIC, 3065',
        score: 6.4080619812
    },
    {
        streetNumber: '305',
        streetName: 'Smith Street',
        municipality: 'Melbourne',
        country: 'Australia',
        freeformAddress: '305 Smith Street, Fitzroy, VIC, 3065',
        score: 6.1879377365
    },
    {
        streetNumber: '279-281',
        streetName: 'Smith Street',
        municipality: 'Melbourne',
        country: 'Australia',
        freeformAddress: '279-281 Smith Street, Fitzroy, VIC, 3065',
        score: 6.1879377365
    },
    {
        streetNumber: undefined,
        streetName: 'Smith Street',
        municipality: 'Melbourne',
        country: 'Australia',
        freeformAddress: 'Smith Street, Fitzroy, VIC, 3065',
        score: 6.1879377365
    },
    {
        streetNumber: undefined,
        streetName: 'Queens Parade',
        municipality: 'Melbourne',
        country: 'Australia',
        freeformAddress: 'Queens Parade, Fitzroy North, VIC, 3068',
        score: 6.1543030739
    },
    {
        streetNumber: '53',
        streetName: 'Little Smith Street',
        municipality: 'Melbourne',
        country: 'Australia',
        freeformAddress: '53 Little Smith Street, Fitzroy, VIC, 3065',
        score: 6.1459541321
    },
    {
        streetNumber: '69',
        streetName: 'Little Smith Street',
        municipality: 'Melbourne',
        country: 'Australia',
        freeformAddress: '69 Little Smith Street, Fitzroy, VIC, 3065',
        score: 6.1459541321
    },
    {
        streetNumber: '115',
        streetName: 'Smith Street',
        municipality: 'Melbourne',
        country: 'Australia',
        freeformAddress: '115 Smith Street, Fitzroy, VIC, 3065',
        score: 6.1459541321
    },
    {
        streetNumber: '397',
        streetName: 'Smith Street',
        municipality: 'Melbourne',
        country: 'Australia',
        freeformAddress: '397 Smith Street, Fitzroy, VIC, 3065',
        score: 6.1047692299
    }
]