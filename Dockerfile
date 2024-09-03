# Stage 1: Build the application
FROM node:20 AS builder

# Set the working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy application files
COPY . .

# Build the application
RUN npm run build

# Stage 2: Create the final image
FROM node:20-slim

# Set the working directory
WORKDIR /app

# Install only production dependencies
COPY package*.json ./
RUN npm install --production

# Copy built application files from the builder stage
COPY --from=builder /app/build /app/build

# Expose the port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"]
