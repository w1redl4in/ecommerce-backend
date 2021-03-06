FROM node:12-alpine

WORKDIR /app
RUN apk add --no-cache bash
RUN apk --no-cache add --virtual builds-deps build-base python

ENV NODE_ENV=dev

COPY package.json yarn.lock .env* ./
RUN yarn global add pm2
RUN yarn install
ADD ./dist /app
EXPOSE 3333
CMD [ "pm2-runtime", "server.js"]
