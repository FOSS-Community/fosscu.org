#BUILDER
FROM node:19-alpine as builder

#Make the builder directory
WORKDIR /website_fosscu

#COPY build source from project
COPY package*.json .
COPY yarn.lock .

#Copy all files into container
COPY . .

#Installing all dependencies
RUN yarn install


#MAIN
FROM node:19-alpine as main

#Make main app directory
WORKDIR /app

#Copy all from builder stage
COPY --from=builder /website_fosscu/.  ./

# Run the production build
RUN yarn build

# Start the server
CMD ["yarn", "start"]