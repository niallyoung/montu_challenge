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
        freeformAddress: 'Victoria Parade, Collingwood, VIC, 3066'
    },
    {
        streetNumber: undefined,
        streetName: 'Smith Street',
        municipality: 'Darwin',
        country: 'Australia',
        freeformAddress: 'Smith Street, Darwin, NT'
    },
    {
        streetNumber: undefined,
        streetName: 'Smith Street',
        municipality: 'Alice Springs',
        country: 'Australia',
        freeformAddress: 'Smith Street, Alice Springs, NT'
    },
    {
        streetNumber: undefined,
        streetName: 'Smith Street',
        municipality: 'Gold Coast',
        country: 'Australia',
        freeformAddress: 'Smith Street, Gold Coast, QLD'
    },
    {
        streetNumber: undefined,
        streetName: 'Smith Street',
        municipality: 'Brisbane',
        country: 'Australia',
        freeformAddress: 'Smith Street, Cleveland, QLD'
    },
    {
        streetNumber: undefined,
        streetName: 'Smith Street',
        municipality: 'Hervey Bay',
        country: 'Australia',
        freeformAddress: 'Smith Street, Urangan, QLD'
    },
    {
        streetNumber: undefined,
        streetName: 'Smith Street',
        municipality: 'Brisbane',
        country: 'Australia',
        freeformAddress: 'Smith Street, Brisbane, QLD'
    },
    {
        streetNumber: undefined,
        streetName: 'Smith Street',
        municipality: 'Melbourne',
        country: 'Australia',
        freeformAddress: 'Smith Street, Melbourne, VIC'
    },
    {
        streetNumber: undefined,
        streetName: 'Smith Street',
        municipality: 'Melbourne',
        country: 'Australia',
        freeformAddress: 'Smith Street, Melbourne, VIC'
    },
    {
        streetNumber: undefined,
        streetName: 'Smith Street',
        municipality: 'Melbourne',
        country: 'Australia',
        freeformAddress: 'Smith Street, Port Melbourne, VIC'
    }
]

const expectedSearchResults20SmithStreet = [
    {
        "streetName": "Smith Street",
        "municipality": "Melbourne",
        "country": "Australia",
        "freeformAddress": "Smith Street, Fitzroy, VIC, 3065, 3066"
    },
    {
        "streetName": "Little Smith Street",
        "municipality": "Melbourne",
        "country": "Australia",
        "freeformAddress": "Little Smith Street, Fitzroy, VIC, 3065"
    },
    {
        "streetNumber": "305",
        "streetName": "Smith Street",
        "municipality": "Melbourne",
        "country": "Australia",
        "freeformAddress": "305 Smith Street, Fitzroy, VIC, 3065"
    },
    {
        "streetNumber": "279-281",
        "streetName": "Smith Street",
        "municipality": "Melbourne",
        "country": "Australia",
        "freeformAddress": "279-281 Smith Street, Fitzroy, VIC, 3065"
    },
    {
        "streetName": "Smith Street",
        "municipality": "Melbourne",
        "country": "Australia",
        "freeformAddress": "Smith Street, Fitzroy, VIC, 3065"
    },
    {
        "streetName": "Queens Parade",
        "municipality": "Melbourne",
        "country": "Australia",
        "freeformAddress": "Queens Parade, Fitzroy North, VIC, 3068"
    },
    {
        "streetNumber": "53",
        "streetName": "Little Smith Street",
        "municipality": "Melbourne",
        "country": "Australia",
        "freeformAddress": "53 Little Smith Street, Fitzroy, VIC, 3065"
    },
    {
        "streetNumber": "69",
        "streetName": "Little Smith Street",
        "municipality": "Melbourne",
        "country": "Australia",
        "freeformAddress": "69 Little Smith Street, Fitzroy, VIC, 3065"
    },
    {
        "streetNumber": "115",
        "streetName": "Smith Street",
        "municipality": "Melbourne",
        "country": "Australia",
        "freeformAddress": "115 Smith Street, Fitzroy, VIC, 3065"
    },
    {
        "streetNumber": "397",
        "streetName": "Smith Street",
        "municipality": "Melbourne",
        "country": "Australia",
        "freeformAddress": "397 Smith Street, Fitzroy, VIC, 3065"
    }
]