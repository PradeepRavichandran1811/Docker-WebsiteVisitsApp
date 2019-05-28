#Author: Pradeep Ravichandran
#Base Image- alpine version is small and handy
FROM node:alpine
#Our working directory is /app
WORKDIR '/app'
#Since npm install only needs package.json, we are copying that to the container initially
COPY package.json .
#npm installs dependencies and starts node scripts
RUN npm install
#copy all files from our directory to container
COPY . .
#start our server once container is created
CMD ["npm","start"]