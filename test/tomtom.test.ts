import { SearchResult } from '../src'
import { addressSearch} from '../src/tomtom';
import { config } from 'dotenv'
import { describe, expect, it, beforeEach } from '@jest/globals'

// import { jest } from '@jest/globals'
// import axios from 'axios'
// const mockAxios = axios as jest.Mocked<typeof axios>;
// jest.mock('axios')

config()
const apiKey = process.env.TOMTOM_API_KEY;

describe('addressSearch()', () => {
    it('returns a promise', () => {
        const searchResults = addressSearch({key: apiKey, countrySet: 'AU', address: 'Smith Street'})
        expect(searchResults).toBeInstanceOf(Promise)
    })

    it('returns a promise that resolves to a value', () => {
        const searchResults = addressSearch({key: apiKey, countrySet: 'AU', address: 'Smith Street'})
        expect(searchResults).resolves.toEqual(expectedSearchResultsSmithStreet)
    })
})

// NOTE: had trouble mocking out axios response data, tried about half a dozen different patterns but nothing successful yet

// describe('with mocked axios data, addressSearch()', () => {
//     beforeEach(() => {
//         // TypeError: mockAxios.get.mockResolvedValue is not a function
//         // mockAxios.request.mockResolvedValue({ data: { results: mockResults }})
//
//         // TypeError: mockAxios.request.mockImplementation is not a function
//         // mockAxios.request.mockImplementation(() =>
//         //     Promise.resolve({ data: { results: mockResults }})
//         // );
//
//         // TypeError: mockAxios.request.mockImplementation is not a function
//         mockAxios.request.mockImplementation(() : Promise<any> => Promise.resolve({ data: { results: mockResults }}))
//     });
//
//     it('returns the expected results', () => {
//         const searchResults = addressSearch({key: apiKey, countrySet: 'AU', address: 'Smith St'})
//         // expect(axios.get).toHaveBeenCalledTimes(1);
//         expect(searchResults).resolves.toContain({
//             streetNumber: "fake-street-number-1",
//             country: "fake-country-1",
//             freeformAddress: "fake-free-form-address-1",
//             municipality: "fake-municipality-1"
//         })
//     })
// })

// TODO move test fixtures to .json and load from disk
// TODO expect this to be fragile and change over time
//      => mock everything and shift this to an integration/smoke test (geofence pin?)
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

const mockResults: SearchResult[] = [
    {
        streetNumber: "fake-street-number-1",
        streetName: "fake-street-name-1",
        municipality: "fake-municipality-1",
        country: "fake-country-1",
        freeformAddress: "fake-free-form-address-1",
        score: 1.234
    },
    {
        streetNumber: "fake-street-number-2",
        streetName: "fake-street-name-2",
        municipality: "fake-municipality-2",
        country: "fake-country-2",
        freeformAddress: "fake-free-form-address-2",
        score: 5.678
    }
]
