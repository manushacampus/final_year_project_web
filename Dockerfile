# Use a specific Node.js version
FROM node:14 as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies and Angular CLI


# Copy the rest of the application code
COPY . .

# Build the Angular app
RUN npm run build --configuration=production

# Stage 2: Serve Angular app with Apache
FROM httpd:alpine

# Copy the Angular build output to the Apache web server directory
COPY --from=build /app/dist/* /usr/local/apache2/htdocs/
