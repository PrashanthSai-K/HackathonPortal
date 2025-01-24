FROM node:18.16.1-alpine3.18

RUN mkdir -p /app

WORKDIR /app

COPY . /app

EXPOSE 5173

CMD npm install --force && npm run dev -- --host 0.0.0.0
