FROM node:19-alpine

# Make the app directory
WORKDIR /website_fosscu

# Copy built sources from project
COPY ./package.json .
COPY ./yarn.lock .
COPY ./package-lock.json .

# Installing all dependencies
RUN yarn install

# Copy all files into container
COPY . .

# Run the production build
RUN yarn build

# Start the server
CMD ["yarn", "start"]
