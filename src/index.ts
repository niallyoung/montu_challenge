import { addressSearch } from './tomtom'

const apiKey = process.env.TOMTOM_API_KEY;

export interface SearchResult {
    placeId: string;
    streetNumber: string;
    countryCode: string;
    country: string;
    freeformAddress: string;
    municipality: string;
}

export async function getAddressSearchResults(address: any): Promise<any> {
    return addressSearch({ key: apiKey, countrySet: 'AU', address })
}
