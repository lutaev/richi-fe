FROM nginx:1.19.4-alpine

ARG REACT_APP_API_URL

ENV REACT_APP_API_URL=${REACT_APP_API_URL}

RUN apk update && apk add nodejs && apk add yarn

WORKDIR /app

COPY . .

COPY nginx.conf /etc/nginx/nginx.conf

RUN yarn install && yarn build

CMD ["nginx","-g","daemon off;"]

EXPOSE 80