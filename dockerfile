# Use the official Node.js image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the application (if necessary, adjust the command based on your needs)
RUN npm run build

# Expose the port that your application will listen on
EXPOSE 1337

# Start your application (adjust the command based on your needs)
CMD ["npm", "start"]
