FROM node:latest as build

RUN npm install -g pnpm

WORKDIR /usr/local/app

COPY ./ /usr/local/app/

RUN pnpm install

RUN pnpm build

FROM nginx:latest

COPY --from=build /usr/local/app/dist/store-template /usr/share/nginx/html

EXPOSE 80