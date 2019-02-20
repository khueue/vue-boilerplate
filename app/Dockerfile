FROM node:11.9.0-alpine

WORKDIR /workdir

RUN apk add --no-cache \
	bash

# For NPM (node-gyp).
RUN apk add --no-cache \
	build-base \
	python

# For Parcel.
RUN apk add --no-cache \
	util-linux
