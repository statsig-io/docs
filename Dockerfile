#!/bin/bash

FROM node:16-alpine as builder
RUN apk add --no-cache git

WORKDIR /usr/app

COPY ./ ./

RUN npm install -g pnpm@8.15.4
RUN pnpm install
RUN pnpm build

## production environment
FROM nginx:1-alpine
COPY ./nginx.conf /etc/nginx/
COPY --from=builder /usr/app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
