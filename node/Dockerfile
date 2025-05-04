FROM node:18-alpine

RUN apk add --no-cache curl \
  && curl -sL https://github.com/jwilder/dockerize/releases/download/v0.6.1/dockerize-alpine-linux-amd64-v0.6.1.tar.gz \
  | tar -C /usr/local/bin -xzv

WORKDIR /usr/src/app

COPY package.json .
RUN npm install

COPY . .

EXPOSE 3000

CMD ["dockerize", "-wait", "tcp://db:3306", "-timeout", "30s", "node", "index.js"]
