FROM node:16-alpine as ui-build

COPY ./ui /usr/src/ui

WORKDIR /usr/src/ui 

RUN npm install && npm run build

FROM nginx

COPY ./deploy/nginx.conf /etc/nginx/nginx.conf
COPY --from=ui-build /usr/src/ui/build /usr/share/nginx/html

EXPOSE 80


 
