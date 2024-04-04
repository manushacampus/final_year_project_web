# Use an official Node runtime as a parent image
FROM node:18 as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install
RUN npm install -g @angular/cli

# Copy the rest of the application code
COPY . .

# Build the Angular app
RUN npm run build --configuration=production

# Stage 2: Serve Angular app with Apache
FROM httpd:alpine

# Copy the Angular build output to the Apache web server directory

COPY --from=build /app/dist/* /usr/local/apache2/htdocs/
