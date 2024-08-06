# Stage 1: Build Angular app
FROM node:18 AS build
 
WORKDIR /app
 
# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./
 
# Install dependencies and Angular CLI
RUN npm install --force
RUN npm install -g @angular/cli
 
# Copy the rest of the application source code
COPY . .
 
RUN npm run build --configuration=production
 
# Stage 2: Serve Angular app with Nginx over HTTPS
FROM nginx:latest
 

# Copy the Angular build output to the Nginx web server directory
COPY --from=build /app/dist/* /usr/share/nginx/html/
 
# Expose port 443 for HTTPS
EXPOSE 80
 
# Start Nginx server with daemon off to run in foreground
CMD ["nginx", "-g", "daemon off;"]
