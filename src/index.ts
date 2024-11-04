import { addressSearch } from './tomtom'

export interface SearchResult {
    streetNumber: string;
    streetName: string;
    municipality: string;
    country: string;
    freeformAddress: string;
    score: number;
}

// TODO consider an AddressSearch Class so we can inject a TomTom implementation function behind getAddressSearchResults() interface
interface AddressSearch {
    getAddressSearchResults(address: any): Promise<any>;
}

export function getAddressSearchResults(address: any): Promise<any> {
    return addressSearch({
        key: process.env.TOMTOM_API_KEY,
        address: address,
        countrySet: 'AU'
    })
}
