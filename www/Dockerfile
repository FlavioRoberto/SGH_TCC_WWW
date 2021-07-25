FROM node:14.15-alpine as build-step
WORKDIR /usr/src/app

COPY . .

RUN npm i @angular/cli --no-progress --loglevel=error
RUN npm i --no-progress --loglevel=error

RUN npm run build-prod

### STAGE 2: Setup ###
FROM nginx:alpine

COPY config/default.conf /etc/nginx/conf.d/
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build-step /usr/src/app/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
