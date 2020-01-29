# Using base image
FROM node:alpine

# Give it a label
LABEL tag="ionic"

# Define the work directory
WORKDIR /code

# Copy the project files to the directory inside the container
COPY . .

# Set volume as mountpoint
# VOLUME [ "/data" ]

# Run commands
RUN npm install
RUN npm install -g ionic

EXPOSE 8100

# Set entrypoint
ENTRYPOINT [ "ionic", "serve", "--external" ]


