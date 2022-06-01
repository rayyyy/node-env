FROM node:18-alpine

RUN apk upgrade && apk update && \
  apk add zsh && \
  apk --no-cache add tzdata && \
  cp /usr/share/zoneinfo/Asia/Tokyo /etc/localtime && \
  apk del tzdata

RUN mkdir -p /app
COPY . /app
WORKDIR /app
