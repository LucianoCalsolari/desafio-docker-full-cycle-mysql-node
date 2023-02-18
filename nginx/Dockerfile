FROM nginx:stable-alpine

COPY nginx.conf /etc/nginx/nginx.conf

RUN mkdir /var/www/html -p && touch /var/www/html/index.html

EXPOSE 8080

CMD [ "nginx", "-g", "daemon off;" ]