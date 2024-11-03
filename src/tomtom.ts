import { SearchResult } from './index'

const axios = require('axios').default;
const tomTomURL = "https://api.tomtom.com";

export interface addressSearchParams {
    key: string;
    address: any;
    limit?: number;
    countrySet?: string;
}

export async function addressSearch(searchParams: addressSearchParams) {
    const response = await axios.get(tomTomURL + `/search/2/search/${searchParams.address}.json'`, {
        params: { ...searchParams }
    });

    return response.data.results.map((result) => {
        const searchResult: SearchResult = {
            placeId: result.id,
            streetNumber: result.streetNumber,
            countryCode: result.countryCode,
            country: result.country,
            freeformAddress: result.freeformAddress,
            municipality: result.municipality
        }
        return searchResult;
    })
}
