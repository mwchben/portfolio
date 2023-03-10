FROM node:10

# create app directory

WORKDIR /usr/app

# install app dependacies

COPY package*.json ./

RUN npm install

# if under production ... have RUN npm ci --only=production

# Bundle app source

COPY . .
EXPOSE 3000
CMD [ "node", "index.js" ]

