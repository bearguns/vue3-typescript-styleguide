# build stage
FROM node:lts-alpine as build
WORKDIR /opt/app
ARG NPM_TOKEN
COPY package.json /opt/app
COPY yarn.lock /opt/app
COPY .npmrc /opt/app
RUN yarn
COPY . .
RUN yarn build:site

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build --chown=nginx /opt/app/dist/ /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
