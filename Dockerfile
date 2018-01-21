FROM nginx

EXPOSE 8080

COPY _site /usr/share/nginx/html
