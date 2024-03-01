# Use Node.js as the base image
FROM node:latest AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build -- --prod

# Use NGINX as the base image for serving Angular application
FROM nginx:latest

# Copy the built Angular app to the NGINX directory
COPY --from=builder /app/dist/<your-angular-app-name> /usr/share/nginx/html

# Expose port 80
EXPOSE 80

