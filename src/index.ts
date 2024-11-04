import { addressSearch } from './tomtom'

const apiKey = process.env.TOMTOM_API_KEY;

export interface SearchResult {
    streetNumber: string;
    streetName: string;
    municipality: string;
    country: string;
    freeformAddress: string;
}

export function getAddressSearchResults(address: any): Promise<any> {
    return addressSearch({ key: apiKey, countrySet: 'AU', address })
}
