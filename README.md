# montu_challenge

`montu_challenge` presents a simple npm/ts library to perform fuzzy search matching of Australian addresses.

`TOMTOM_API_KEY` Environment variable is injected via `dotenv`. `jest` is used for testing.

GitHub Actions Workflow will be spun up shortly for CICD, building and testing the repo behind a standardised,
language-agnostic `Makefile`

## TODO

* initial search function interface with tests
* stub tests running
* pluggable / modular TomTom search implementation with tests
* spin up simple github actions workflow (Makefile)
* review functionality vs. requirements, test coverage, overall quality, docs and comments
* consume the library as a client, ensure it's easy to adopt (npm publish necessary?)

## USAGE

```shell
yarn install
```

## Test

Populate a local `./.env` file with `TOMTOM_API_KEY` configured:

```code
TOMTOM_API_KEY=...
```

and then execute:

```shell
yarn test
```

## Montu Challenge Details

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
