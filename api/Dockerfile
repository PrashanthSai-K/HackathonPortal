FROM node:18.16.1-alpine3.18

RUN mkdir -p /app

WORKDIR /app

COPY . /app

RUN apk add --no-cache python3 make g++ 

RUN npm install nodemon -g

EXPOSE 4500

CMD echo 1; npm install; echo 2; npm start;