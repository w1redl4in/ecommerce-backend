FROM node:12-alpine

WORKDIR /app
RUN apk add --no-cache bash
RUN apk --no-cache add --virtual builds-deps build-base python

ENV NODE_ENV=docker

COPY . ./
RUN yarn global add pm2
RUN yarn install
RUN yarn build
EXPOSE 3333
CMD [ "pm2-runtime", "dist/server.js"]
