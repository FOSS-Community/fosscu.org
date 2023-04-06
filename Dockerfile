FROM node:19-alpine

WORKDIR /website_fosscu

COPY . /website_fosscu/

RUN yarn add vite

RUN yarn install

CMD ["yarn", "start"]
