# Dockerfile
# FROM node AS build
# WORKDIR /usr/src/app
# COPY package.json /usr/src/app/
# RUN npm install --legacy-peer-deps
# RUN npm install -g @angular/cli
# COPY ./ /usr/src/app
# RUN ng build --configuration=production

FROM nginx:alpine
VOLUME /var/cache/nginx
COPY  ./dist /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

#docker build -t sgh-front
#docker run -p 8081:80 sgh-front