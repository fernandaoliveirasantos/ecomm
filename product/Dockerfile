FROM node

WORKDIR /app

ADD package.json /app/

RUN npm install

ADD . .

ENTRYPOINT [ "npm", "start" ]
