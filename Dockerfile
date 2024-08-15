#!/bin/bash

FROM node:18-alpine as builder
RUN apk add --no-cache git

WORKDIR /usr/app

COPY ./ ./

RUN npm install
RUN npm run build

## production environment
FROM nginx:1-alpine
COPY ./nginx.conf /etc/nginx/
COPY --from=builder /usr/app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
