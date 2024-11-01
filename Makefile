SHELL:=/bin/bash

NAME:=montu_challenge
HASH:=$(shell git rev-parse --short HEAD)

all: clean lint test build
.PHONY: all

clean:
	@echo "######## make clean"
	rm -rf ./dist ./node_modules
.PHONY: clean

lint:
	@echo "######## make lint"
	yarn install && \
	yarn run lint:check && \
	yarn run ts:check
.PHONY: lint

test:
	@echo "######## make test"
	yarn install && \
	yarn run test
.PHONY: test

build:
	@echo "######## make build"
	yarn install && \
	yarn run build
.PHONY: build
