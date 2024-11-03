import { SearchResult } from '../src'
import { config } from 'dotenv'
import { addressSearch} from '../src/tomtom';
import { describe, expect, it, jest } from '@jest/globals'

config()
const apiKey = process.env.TOMTOM_API_KEY;

const fakeResults: SearchResult[] = [
    {
        placeId: "fake-place-id-1",
        streetNumber: "fake-street-number-1",
        countryCode: "fake-country-code-1",
        country: "fake-country-1",
        freeformAddress: "fake-free-form-address-1",
        municipality: "fake-municipality-1"
    },
    {
        placeId: "fake-place-id-2",
        streetNumber: "fake-street-number-2",
        countryCode: "fake-country-code-2",
        country: "fake-country-2",
        freeformAddress: "fake-free-form-address-2",
        municipality: "fake-municipality-2"
    }
]

describe('addressSearch()', () => {
    it('returns a promise', () => {
        const searchResults = addressSearch({key: apiKey, address: 'Charlotte Street'})
        expect(searchResults).toBeInstanceOf(Promise)
    })
})

// describe('with mocked axios data, addressSearch()', () => {
//     const mockAxios = axios as jest.Mocked<typeof axios>;
//     beforeEach(() => {
//         mockAxios.request.mockImplementationOnce(() : Promise<any> => Promise.resolve(fakeResults));
//     });
//
//     it('returns the expected results', async () => {
//         const searchResults = await addressSearch({key: apiKey, address: 'Smith St'})
//         expect(axios.get).toHaveBeenCalledTimes(1);
//         expect(searchResults).resolves.toContain({
//             placeId: "fake-place-id-1",
//             streetNumber: "fake-street-number-1",
//             countryCode: "fake-country-code-1",
//             country: "fake-country-1",
//             freeformAddress: "fake-free-form-address-1",
//             municipality: "fake-municipality-1"
//         })
//     })
// })
