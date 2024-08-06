# Use an official Node.js runtime as a parent image
FROM node:16 AS build
 
# Set environment variable for base href
ENV BASE_HREF /dev/
 
# Set the working directory
WORKDIR /app
 
# Copy package.json and package-lock.json
COPY package*.json ./
 
# Install dependencies
RUN npm install
 
# Copy the rest of the application code
COPY . .
 
# Build the Angular application with the dynamic base href
RUN npm run build -- --prod --base-href $BASE_HREF
 
# Use Nginx to serve the app
FROM nginx:alpine
COPY --from=build /app/dist/* /usr/share/nginx/html/
 
# Expose port 80
EXPOSE 80
