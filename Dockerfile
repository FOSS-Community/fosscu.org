# Stage 1: Build the application
FROM node:20 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Serve the built application
FROM node:20-slim

WORKDIR /app

COPY --from=builder /app/package*.json ./
RUN npm install --production

# Copy build output
COPY --from=builder /app/.next /app/.next
COPY --from=builder /app/public /app/public

# Expose the port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
