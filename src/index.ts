import { addressSearch } from './tomtom'

const apiKey = process.env.TOMTOM_API_KEY;

// TODO consider more generic field names for impls to map to
export interface SearchResult {
    placeId: string; // TODO confirm tomtom or universal concept?
    streetNumber: string;
    countryCode: string;
    country: string;
    freeformAddress: string;
    municipality: string;
}

export async function getAddressSearchResults(address: any): Promise<any> {
    return addressSearch({ key: apiKey, countrySet: 'AU', address })
}
