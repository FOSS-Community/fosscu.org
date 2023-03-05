FROM node:19-alpine

WORKDIR /website_fosscu

ADD . /website_fosscu/

RUN npm install --force

CMD npm start