# Use an official Node.js image as the base
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Install the 'serve' package globally to serve static files
RUN npm install -g serve

# Use the 'serve' command to serve the built application
CMD ["serve", "-s", "build", "-l", "3000"]

# Expose port 3000 to the outside
EXPOSE 3000