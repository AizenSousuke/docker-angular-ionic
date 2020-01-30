# Using base image
FROM node:alpine

# Give it a label
LABEL tag="ionic"

# Define the work directory
WORKDIR /code

# Copy the project files to the directory inside the container
COPY . .

# Run commands
RUN npm install
RUN npm install -g @angular/cli
RUN npm install -g ionic

# For user to verify that node_modules folder is present
RUN ls -l

EXPOSE 8100

# Set entrypoint
ENTRYPOINT [ "ionic", "serve", "--external" ]


