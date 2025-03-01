FROM node:16-alpine AS build

# Create a Virtual directory inside the docker image
WORKDIR /dist/src/app
RUN npm cache clean --force

# Copy files from local machine to virtual directory in docker image
COPY ./frontend/ .
RUN npm install
RUN npm run build --prod

# Defining nginx image to be used
FROM nginx:latest AS ngi

# Copying compiled code and different folder 
COPY --from=build /dist/src/app/dist/frontend /usr/share/nginx/html

RUN rm -rf /etc/nginx/conf.d/default.conf

COPY ./config/default.conf /etc/nginx/conf.d/

RUN apt update && apt install -y vim

# Exposing a port, here it means that inside the container 
EXPOSE 80
