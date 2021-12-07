#intrim build image
FROM node:12.13-slim as build
COPY . /usr/src/react_boilerplate
WORKDIR /usr/src/react_boilerplate
RUN npm install
RUN npm run deploy

#server image
FROM node:12.13-slim
WORKDIR /usr/src/react_boilerplate
COPY --from=build /usr/src/react_boilerplate/build build
COPY --from=build /usr/src/react_boilerplate/public public