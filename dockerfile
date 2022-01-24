FROM nginx:1.19.1
WORKDIR /app
EXPOSE 80

COPY dist/spa /app
COPY nginx.conf /etc/nginx/nginx.conf
