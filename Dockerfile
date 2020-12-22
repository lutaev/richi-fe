FROM nginx:1.19.4-alpine

RUN apk update && apk add nodejs && apk add yarn

WORKDIR /app

COPY . .

COPY nginx-default.conf.template /etc/nginx/conf.d/default.conf.template

COPY docker-entrypoint.sh /

RUN chmod +x /docker-entrypoint.sh

RUN yarn install && yarn build

ENTRYPOINT ["/docker-entrypoint.sh"]

CMD ["nginx", "-g", "daemon off;"]

EXPOSE 80