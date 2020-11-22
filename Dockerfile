FROM nginx:1.19.4-alpine

RUN apk update

RUN apk add nodejs

RUN apk add yarn

COPY . ./app

COPY nginx.conf /etc/nginx/nginx.conf

RUN cd app && ls && yarn install && yarn build

CMD ["nginx","-g","daemon off;"]

EXPOSE 80