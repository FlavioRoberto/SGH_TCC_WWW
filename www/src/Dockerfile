FROM nginx
LABEL maintainer 'Flávio Roberto Teixeira <flavio.r.teixeira@outlook.com>'

COPY ./ /usr/share/nginx/html && /
COPY default.conf /etc/nginx/conf.d && /

RUN chmod -R a+rwx /usr/share/nginx/html
