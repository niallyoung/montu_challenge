import {SearchResult} from './index'

const axios = require('axios').default
const tomTomURL = "https://api.tomtom.com"

export interface addressSearchParams {
    key: string;
    address: any;
    countrySet: string;
}

export async function addressSearch(searchParams: addressSearchParams): Promise<any> {
    let response
    try {
        await process.nextTick(() => {}); // async-await workaround for axios, TODO investigate further
        response = await axios.get(tomTomURL + `/search/2/search/${searchParams.address}.json`, {
            params: {key: searchParams.key, countrySet: searchParams.countrySet},
        })
    } catch (error) {
        return Promise.reject(error)
    }

    if (response === undefined) {
        return Promise.reject('response not found')
    }

    const results = response.data.results.map(function (result) {
        const searchResult: SearchResult = {
            streetNumber: result.address.streetNumber,
            streetName: result.address.streetName,
            municipality: result.address.municipality,
            country: result.address.country,
            freeformAddress: result.address.freeformAddress,
            score: result.score,
        }
        return searchResult
    })

    return new Promise(function (resolve) { resolve(results) })
}

// NOTE: I had trouble getting Promises .then().catch() working with axios.get, sticking with
// async/await for now, will come back if I have time...

// export async function addressSearch(searchParams: addressSearchParams): Promise<any> {
//     axios.get(tomTomURL + `/search/2/search/${searchParams.address}.json`, {
//         params: { key: searchParams.key, countrySet: searchParams.countrySet },
//     }).then((response) => {
//         const results = response.data.results.map(result => {
//             const searchResult: SearchResult = {
//                 streetNumber: result.address.streetNumber,
//                 streetName: result.address.streetName,
//                 municipality: result.address.municipality,
//                 country: result.address.country,
//                 freeformAddress: result.address.freeformAddress,
//             }
//             return searchResult
//         })
//         return new Promise(function (resolve) { resolve(results) })
//     }).catch((error) => {
//         console.log(error)
//         return Promise.reject(error)
//     })
// }