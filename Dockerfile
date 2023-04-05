FROM node:19-alpine

WORKDIR /website_fosscu

COPY . /website_fosscu/

RUN npm install vite --force

CMD ["npm", "start"]
