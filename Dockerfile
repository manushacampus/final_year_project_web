# Use an official Node runtime as a parent image
FROM node:14 as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular app
RUN npm run build --prod

# Use an official Apache image as the final image
FROM httpd:alpine

# Copy the Angular build output to the Apache web server directory
COPY --from=build /app/dist /usr/local/apache2/htdocs/

# Expose port 80
EXPOSE 80
