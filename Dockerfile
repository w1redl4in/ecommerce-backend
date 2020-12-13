FROM node:12-alpine

WORKDIR /app

ARG NODE_ENV
ENV NODE_ENV=$NODE_ENV

COPY package.json yarn.lock .env* ./
RUN yarn global add pm2
RUN yarn install
ADD ./dist /app
EXPOSE 3000
CMD [ "pm2-runtime", "server.js"]


