# montu_challenge

`montu_challenge` presents a simple npm/ts library to perform fuzzy search matching of Australian addresses.

- `Makefile` for language-agnostic CICD
- `yarn` for dependency management
- `jest` for testing
- `rollup` for build
- `TOMTOM_API_KEY` ENV injection via `dotenv` local .env file (gitignore .env*)

---

## TODO

* review functionality vs. requirements, test coverage, overall quality, docs and comments
* pluggable / modular TomTom search implementation with tests
* working mocks in all unit tests, no live fixtures or dependencies
* consider a Service class (wrapping search functions) injectable dependencies e.g. TomTom implementation, vs. Generic / Test implementation
* build and export matching Client (dog-food it for local testing and in CICD, integration and smoke tests etc.)
* integration tests, smoke tests (if Service was also exposed via an API)


---

## USAGE

*** TBC ***

NOTE: package yet to be published to npm repository for consumption

## DEVELOPMENT

```shell
make
```

## Test

```shell
make test
```

When integrating with your client code, ensure you're providing Environment variable `TOMTOM_API_KEY` e.g. via a local
`.env` file:

```code
TOMTOM_API_KEY=xyz
```
---
# NPM library testing (manual)

TODO: spin up a test client to consume a published npm module of montu_challenge/dist/index.js

```shell
set -a && source .env && set +a && npx run-func dist/index.js getAddressSearchResults "{ key: process.env.TOMTOM_API_KEY, countrySet: 'AU', address: "1 Eagle Street Brisbane QLD" }"
```

sample output:
```code
set -a && source .env && set +a && npx run-func dist/index.js getAddressSearchResults "{ key: process.env.TOMTOM_API_KEY, countrySet: 'AU', address: "1 Eagle Street Brisbane QLD" }"
[
  {
    streetNumber: undefined,
    streetName: 'Mayne Street',
    municipality: 'Tiaro',
    country: 'Australia',
    freeformAddress: 'Mayne Street, Tiaro, QLD, 4650'
  },
  ...
]
```

---
# Montu Challenge Details

### Scenario

A new logistics startup, “QuickRoute” is rapidly scaling its delivery operations across Australia. As part of optimising their services, they need a robust and efficient solution for parsing partial address inputs. This integration will improve delivery precision by minimising address errors and speeding up address entry during order placement.

### Task

QuickRoute’s backend needs an extensible, shareable library written in TypeScript that leverages the TomTom API to return full address suggestions from partial address inputs. This package should provide responses that are typed, maintainable, and easily consumable in any LTS Node.js environment.

In the future we will want to explore alternate API providers to TomTom. Your design should accommodate this possibility.

### Requirements

1. All tests should pass and ensure good coverage
2. We only allow Australian addresses to be returned
3. Code should be maintainable and consistent
4. The result elements should contain important information about the place (country, municipality, etc)
5. The returned result should be typed and easily consumable via users of the library
6. No front-end requirements are necessary, this is purely a backend NodeJS library

### Resources

Place Search Documentation: https://developer.tomtom.com/search-api/documentation/search-service/search-service
