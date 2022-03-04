FROM alpine

COPY src/ /app

RUN apk add nodejs npm

RUN cd app && \
    npm install

WORKDIR /app

USER 1000