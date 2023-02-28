FROM node:14 AS builder

WORKDIR /app

COPY . .

RUN apt-get update && apt-get install -y wget


ENV WAIT_VERSION 2.7.2
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/$WAIT_VERSION/wait /wait
RUN chmod +x /wait

RUN npm i

EXPOSE 3000