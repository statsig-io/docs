#!/bin/bash

FROM node:15-alpine as builder
WORKDIR /usr/app

COPY ./ ./
RUN npm ci
RUN npm run build

## production environment
FROM nginx:1-alpine
COPY ./nginx.conf /etc/nginx/
COPY --from=builder /usr/app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
