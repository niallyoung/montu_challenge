import { addressSearch } from './tomtom'

export async function getAddressSearchResults(address: any): Promise<any> {
    return addressSearch(address).then(async (addressResults) => {
        return [...addressResults]
    })
}
